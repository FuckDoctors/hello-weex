# Hello Weex

[![Build Status](https://travis-ci.org/FuckDoctors/hello-weex.svg?branch=master)](https://travis-ci.org/FuckDoctors/hello-weex)

## Demo

* [Demo on github](https://fuckdoctors.github.io/hello-weex/preview.html?page=index.js) (master分支)

* [Demo on dever.site](https://dever.site/hello-weex/preview.html?page=index.js) (dev分支，开发时实时预览用)

公司没有WIFI，Playground上无法确认，暂时放到公网上，然后用手机上的Playground扫描确认。手动滑稽(￣▽￣)"

现在刚开始学习，难免会遇到一些问题，Demo用来向别人更直观的展示问题。

所以，Demo是有错的，希望以后慢慢解决。。。

## Screenshots

<img src="./static/img/web.png" width="30%" height="30%" /><img src="./static/img/iPhone8P.png" width="30%" height="30%" /><img src="./static/img/iPhoneX.png" width="30%" height="30%" />

## Tips & Questions

* Android platform，gradle v2 -> v3(v4)，修改build.gradle.
  修改内容：
  1. defaultConfig中加入以下内容：

    ``` gradle
    javaCompileOptions {
        annotationProcessorOptions {
            includeCompileClasspath true
        }
    }
    ```

  2. outputFile修改

    ``` gradle
    // https://stackoverflow.com/questions/44239235/android-gradle-3-0-0-alpha2-plugin-cannot-set-the-value-of-read-only-property
    applicationVariants.all { variant ->
        variant.outputs.all { output ->
            outputFileName = "../weex-app.apk"
        }
    }
    ```

* Android加了intent-filter，`npm run android`执行时，`navigator.push`也不跳转。

  解决方法：

  1. 在Android里集成Weex SDK，使用原生导航栏做跳转，其他页面用Weex来做。

  2. 或者，自己实现`IActivityNavBarSetter`，然后通过`WXSDKEngine.setActivityNavBarSetter(new MyNavigator())`引入进来。

* 为了使用dev和prod两套发布地址，把发布的地址配到了process.env中，hot-reload时，process.env中的东西会丢失？？？

  暂时解决办法：还是把自己的ip配置到`src/config/index.js`中。。。

* weex-vue-render由v0.12.x升级为v1.x的问题

  一开始没照模板生成，而是自己把weex和vue相关依赖直接升级成最新的，但各种错，各种折腾后，还是按照生成的模板用的。。。（自己不懂还是别瞎折腾了，要相信别人~ 囧~）

  自己试出来的结果是使用的vue-loader版本有问题，使用最新的v14.x会出错，退回v12.x才行。

  貌似官方的weex-vue-render给的引入方式不行，还是用原来的import的方式。

* 后面再加。。。

## Commands

### npm run build:docs (新增命令)

发布Demo，需要修改configs/config.js里的下面的内容。

``` json
server: {
  domain: 'fuckdoctors.github.io/hello-weex',
  enableHttps: true
}
```

### npm run build:report (新增命令)

Webpack Bundle Analyzer

### npm start

Starts the development server for you to preview your weex page on browser.
You can also scan the QR code using weex playground to preview weex page on native.

### npm run dev

Open the code compilation task in watch mode.

### npm run ios

(Mac only, requires Xcode)
Starts the development server and loads your app in an iOS simulator.

### npm run android

(Requires Android build tools)
Starts the development server and loads your app on a connected Android device or emulator.

### npm run pack:ios

(Mac only, requires Xcode)
Packaging ios project into ipa package.

### npm run pack:android

(Requires Android build tools)
Packaging android project into apk package.

### npm run pack:web

Packaging html5 project into `web/build` folder.

### npm run test

Starts the test runner.
