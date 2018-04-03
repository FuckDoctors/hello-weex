package com.weex.app;

import android.app.Application;
import android.os.Build;
import android.os.StrictMode;

import com.alibaba.android.bindingx.plugin.weex.BindingX;
import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.weex.app.extend.ImageAdapter;
import com.weex.app.extend.WXEventModule;
import com.weex.app.extend.module.MyGlobalEventModule;
import com.weex.app.extend.module.MyNavigatorModule;
import com.weex.app.util.AppConfig;

public class WXApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();

    // https://stackoverflow.com/questions/38200282/android-os-fileuriexposedexception-file-storage-emulated-0-test-txt-exposed
    // https://github.com/alibaba/weex/issues/3119
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
      StrictMode.VmPolicy.Builder builder = new StrictMode.VmPolicy.Builder();
      StrictMode.setVmPolicy(builder.build());
      builder.detectFileUriExposure();
    }

    // 加上这句可以debug，不过模拟器上不能显示页面了。。。
//    initDebugEnvironment(true, "192.168.1.86");

    WXSDKEngine.addCustomOptions("appName", "WXSample");
    WXSDKEngine.addCustomOptions("appGroup", "WXApp");
    WXSDKEngine.initialize(this,
        new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build()
    );
//    // 自定义导航栏
//    WXSDKEngine.setActivityNavBarSetter(new MyNavigatorAdapter(WXApplication.this));
    try {
      WXSDKEngine.registerModule("event", WXEventModule.class);
      // 注册globalEvent模块
      WXSDKEngine.registerModule(MyGlobalEventModule.MODULE_NAME, MyGlobalEventModule.class, true);
      // 自己的NavigatorModule
      WXSDKEngine.registerModule(MyNavigatorModule.MODULE_NAME, MyNavigatorModule.class);
    } catch (WXException e) {
      e.printStackTrace();
    }
    AppConfig.init(this);

    // register bindingx module manually
    try {
      BindingX.register();
    } catch (WXException e) {
    }

    // register bindingx module automatically by annotation processor
//        WeexPluginContainer.loadAll(getApplicationContext());

    WeexPluginContainer.loadAll(this);
  }

  private void initDebugEnvironment(boolean enable, String host) {
    WXEnvironment.sRemoteDebugMode = enable;
    WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8088/debugProxy/native";
  }
}
