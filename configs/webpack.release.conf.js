const commonConfig = require('./webpack.common.conf');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
// tools
const ip = require('ip').address();
const os = require('os');
const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const helper = require('./helper');
const config = require('./config');

console.log(`${chalk.green(`Package web project at ${chalk.bold(path.resolve('./release/web'))}!`)}`)
/**
 * Webpack Plugins
 */
const UglifyJsparallelPlugin = require('webpack-uglify-parallel');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

/**
 * Generate multiple entrys
 * @param {Array} entry
 */
const generateMultipleEntrys = (entry) => {
  let entrys = Object.keys(entry);
  // exclude phantom-limb entry.
  entrys = entrys.filter(entry => entry !== 'phantom-limb');
  const htmlPlugin = entrys.map(name => {
    return new HtmlWebpackPlugin({
      filename: name + '.html',
      template: helper.rootNode(`web/index.html`),
      isDevServer: true,
      chunksSortMode: 'dependency',
      inject: true,
      // chunks: [name],
      chunks: ['vendor', 'manifest', 'common', name],
      // production
      minimize: true
    })
  })
  return htmlPlugin;
}

/**
 * Webpack configuration for web.
 */
const productionConfig = webpackMerge(commonConfig[0], {
  /**
   * Developer tool to enhance debugging
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: config.prod.devtool,
  /**
   * Options affecting the output of the compilation.
   *
   * See: http://webpack.github.io/docs/configuration.html#output
   */
  output: {
    /**
     * The output directory as absolute path (required).
     *
     * See: http://webpack.github.io/docs/configuration.html#output-path
     */
    path: helper.rootNode('release/web'),
    /**
     * Specifies the name of each output file on disk.
     * IMPORTANT: You must not specify an absolute path here!
     *
     * See: http://webpack.github.io/docs/configuration.html#output-filename
     */
    filename: '[name].[chunkhash].bundle.js',
    /**
     * The filename of the SourceMaps for the JavaScript files.
     * They are inside the output.path directory.
     *
     * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
     */
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    /**
     * The filename of non-entry chunks as relative path
     * inside the output.path directory.
     *
     * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
     */
    chunkFilename: '[id].[chunkhash].chunk.js'
  },
  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [
    /**
     * Plugin: webpack.DefinePlugin
     * Description: The DefinePlugin allows you to create global constants which can be configured at compile time.
     *
     * See: https://webpack.js.org/plugins/define-plugin/
     */
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': config.prod.env
      }
    }),
    /*
     * Plugin: UglifyJsPlugin
     * Description: Minimize all JavaScript output of chunks.
     * Loaders are switched into minimizing mode.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
     */
    ...generateMultipleEntrys(commonConfig[0].entry),
    /*
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * See: https://github.com/ampedandwired/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      template: 'web/index.html',
      chunksSortMode: 'dependency',
      inject: 'head'
    }),
    /*
     * Plugin: ScriptExtHtmlWebpackPlugin
     * Description: Enhances html-webpack-plugin functionality
     * with different deployment options for your scripts including:
     *
     * See: https://github.com/numical/script-ext-html-webpack-plugin
     */
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    /*
     * Plugin: UglifyJsparallelPlugin
     * Description: Identical to standard uglify webpack plugin
     * with an option to build multiple files in parallel
     *
     * See: https://www.npmjs.com/package/webpack-uglify-parallel
     */
    new UglifyJsparallelPlugin({
      workers: os.cpus().length,
      mangle: true,
      compressor: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      }
    }),

    // 使用webpack.optimize.CommonsChunkPlugin虽然能分开打包，但是页面没显示出来。
    // 只有index.html里引入了vendor, manifest这些公共包，其他html里没有引入。
    // 自己从之前的vue工程里配置直接copy过来的居然不行，不懂webpack，调查了一上午，配置上没问题。。。
    // 还是自己本身知识有限的问题。
    // 解决方案：在generateMultipleEntrys里的HtmlWebpackPlugin里手动加上vendor,common等bundle的引用。
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'common',
      minChunks: (module, count) => count >= 2
    }),
  ]
});

/**
 * Webpack configuration for weex.
 */
const weexConfig = webpackMerge(commonConfig[1], {
  /**
   * Options affecting the output of the compilation.
   *
   * See: http://webpack.github.io/docs/configuration.html#output
   */
  output: {
    /**
     * The output directory as absolute path (required).
     *
     * See: http://webpack.github.io/docs/configuration.html#output-path
     */
    path: helper.rootNode('dist'),
    /**
     * Specifies the name of each output file on disk.
     * IMPORTANT: You must not specify an absolute path here!
     *
     * See: http://webpack.github.io/docs/configuration.html#output-filename
     */
    filename: '[name].js'
  },
  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [
    /*
     * Plugin: UglifyJsparallelPlugin
     * Description: Identical to standard uglify webpack plugin
     * with an option to build multiple files in parallel
     *
     * See: https://www.npmjs.com/package/webpack-uglify-parallel
     */
    new UglifyJsparallelPlugin({
      workers: os.cpus().length,
      mangle: true,
      compressor: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      }
    }),

    // npm start打包后，本地用WeexPlayground能正常显示，
    // npm run build:prod之后发布到github pages上不能显示，猜测是打包出问题了。
    // 后来试了把npm start后得到的未压缩的dist/app.js放到公网上，用WeexPlayground可以正常显示。
    // 验证了上面打包出错的猜测。
    // 然后回头去看weex ui，它打包后的js能正常显示，查看打包后的js，发现上头有下面的banner，
    // 忽然想起自己打包的没有这句，而这句对weex是必须的。所以，添加进来。
    // 但是，这个插件在webpack.common.conf.js里已经配置了，而且webpack.prod.conf.js也引用common了。
    // 并且上面用webpackMerge进行了合并，应该也不用再引入了才对，难道是执行顺序的问题？
    /*
     * Plugin: BannerPlugin
     * Description: Adds a banner to the top of each generated chunk.
     * See: https://webpack.js.org/plugins/banner-plugin/
     */
    new webpack.BannerPlugin({
      banner: '// { "framework": "Vue"} \n',
      raw: true,
      exclude: 'Vue'
    })
  ]
})

if (config.prod.bundleAnalyzerReport) {
  // 开启webpack-bundle-analyzer
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  // web端
  productionConfig.plugins.push(new BundleAnalyzerPlugin());
  // native端
  weexConfig.plugins.push(new BundleAnalyzerPlugin({
    // 同时开启两个webpack-bundle-analyzer，为了防止端口冲突修改了默认配置。
    analyzerPort: 8889,
    reportFilename: 'report-native.html'
  }));
}

// build source to weex_bundle with watch mode.
webpack(weexConfig, (err, stats) => {
  if (err) {
    console.err('COMPILE ERROR:', err.stack)
  }
})

module.exports = productionConfig
