# Hello Weex

[![Build Status](https://travis-ci.org/FuckDoctors/hello-weex.svg?branch=dev)](https://travis-ci.org/FuckDoctors/hello-weex)

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

* weex页面间传值

  1. 可以通过queryString的方式，正向传值，反向传值都可以。

      但是，但是反向传值也是通过navigator.push方法，会在历史记录里存着，使用pop时会再次显示出页面来，参数也可能会影响页面。

      weex中没有vue-router中的replace方法？

  2. 正向使用queryString方式传值，反向使用globalEvent，可以避免上面1. 中navigator.pop的问题。

      但是使用globalEvent需要配合native端，native需要有相应的实现。

      另外，需要在合适的时机执行removeEventListener，不然可能会注册多次，callback执行多次。

      事件名也要配合好，不能乱了。

  3. 使用localStorage实现？

      这样传值和取值，不用区分传值方向了，直接从localStroge里取或设？

  4. 别人的实践：

      a. [「前端」weex页面传参](https://zhuanlan.zhihu.com/p/28490996)

      b. [weex从.we转.vue之BroadcastChannel](https://segmentfault.com/a/1190000009885105)

          标题虽然是BroadcastChannel，其实写的是由BroadcastChannel改为globalEvent的事

* 后面再加。。。

## Commands

### npm run build:docs (新增命令)

发布Demo，需要修改configs/config.js里的下面的内容。

``` javascript
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
