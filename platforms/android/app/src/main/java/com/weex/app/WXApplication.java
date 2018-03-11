package com.weex.app;

import android.app.Application;

import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.weex.app.extend.ImageAdapter;
import com.weex.app.extend.WXEventModule;
import com.weex.app.extend.module.MyGlobalEventModule;
import com.weex.app.extend.module.MyNavigatorAdapter;
import com.weex.app.util.AppConfig;

public class WXApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    WXSDKEngine.addCustomOptions("appName", "WXSample");
    WXSDKEngine.addCustomOptions("appGroup", "WXApp");
    WXSDKEngine.initialize(this,
        new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build()
    );
    // 自定义导航栏
    WXSDKEngine.setActivityNavBarSetter(new MyNavigatorAdapter(WXApplication.this));
    try {
      WXSDKEngine.registerModule("event", WXEventModule.class);
      // 注册globalEvent模块
      WXSDKEngine.registerModule(MyGlobalEventModule.MODULE_NAME, MyGlobalEventModule.class);
    } catch (WXException e) {
      e.printStackTrace();
    }
    AppConfig.init(this);
    WeexPluginContainer.loadAll(this);
  }
}
