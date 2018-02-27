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

console.log(`${chalk.green(`Package docs at ${chalk.bold(path.resolve('./docs'))}!`)}`)
/**
 * Webpack Plugins
 */
const UglifyJsparallelPlugin = require('webpack-uglify-parallel');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Generate multiple entrys
 * @param {Array} entry
 */
const generateMultipleEntrys = (entry) => {
  let entrys = Object.keys(entry);
  // exclude phantom-limb entry.
  entrys = entrys
    .filter(entry => entry !== 'phantom-limb')
    .filter(name => {
      // components下面的不生成html
      return /^(?!components)/.test(name);
    });
  const htmlPlugin = entrys.map(name => {
      return new HtmlWebpackPlugin({
        filename: name + '.html',
        template: helper.rootNode(`web/index.html`),
        isDevServer: true,
        chunksSortMode: 'dependency',
        inject: true,
        // chunks: [name],
        chunks: ['vendor', 'manifest', 'common', name, 'phantom-limb'],
        // production
        minimize: true
      });
    });
  return htmlPlugin;
}

/**
 * Webpack configuration for web.
 */
const docsConfig = webpackMerge(commonConfig[0], {
  /**
   * Developer tool to enhance debugging
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: config.docs.devtool,
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
    path: helper.rootNode('docs'),
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
    // new CleanWebpackPlugin([
    //   // pathsToClean
    //   // 'docs/*.*' // app.xxx.bundle.js,app.xxx.bundle.map等这样的文件没删除。
    //   'docs/**/*'
    // ], {
    //   // cleanOptions
    //   // root: path.resolve('.'), // 这样也行
    //   root: path.resolve(__dirname, '..'),
    //   exclude: ['assets', 'favicon.ico', 'preview.html'], // 没起作用
    //   // exclude: [
    //   //   path.resolve(__dirname, 'assets'),
    //   //   path.resolve(__dirname, 'favicon.ico'),
    //   //   path.resolve(__dirname, 'preview.html')
    //   // ], // 也没起作用
    //   verbose: true,
    //   dry: false,
    //   watch: false
    // }),
    // 下面是替代方案，把docs整个删除，然后再重新创建，并copy必要的文件过来
    new CleanWebpackPlugin([
      // pathsToClean
      'docs'
    ], {
      // cleanOptions
      // root: path.resolve('.'),
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false,
      watch: false
    }),
    new CopyWebpackPlugin([
      {
        from: '_docs/', // 写成_docs/**/* 复制时会把_docs也给复制过去
        to: '.' // 写成docs，会多创建一层docs目录变成docs/docs，所以直接写成了“.”。
      }
    ]),
    /**
     * Plugin: webpack.DefinePlugin
     * Description: The DefinePlugin allows you to create global constants which can be configured at compile time.
     *
     * See: https://webpack.js.org/plugins/define-plugin/
     */
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': config.docs.env,
        // 追加部分，不想每次都修改发布的domain
        'DOMAIN': JSON.stringify(config.docs.server.domain),
        'ENABLE_HTTPS': JSON.stringify(config.docs.server.enableHttps)
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
    path: helper.rootNode('docs/dist'),
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
    /**
     * Plugin: webpack.DefinePlugin
     * Description: The DefinePlugin allows you to create global constants which can be configured at compile time.
     *
     * See: https://webpack.js.org/plugins/define-plugin/
     */
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': config.prod.env,
        // 追加部分，不想每次都修改发布的domain
        'DOMAIN': JSON.stringify(config.prod.server.domain),
        'ENABLE_HTTPS': JSON.stringify(config.prod.server.enableHttps)
      }
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

// build source to weex_bundle with watch mode.
webpack(weexConfig, (err, stats) => {
  if (err) {
    console.err('COMPILE ERROR:', err.stack)
  }
})

module.exports = docsConfig
