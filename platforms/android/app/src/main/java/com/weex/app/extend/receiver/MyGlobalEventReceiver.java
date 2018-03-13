package com.weex.app.extend.receiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.utils.WXLogUtils;

import java.util.HashMap;

/**
 * Created by zhaobc on 2018/3/13.
 */

public class MyGlobalEventReceiver extends BroadcastReceiver {

    public static final String EVENT_NAME = "eventName";
    public static final String EVENT_PARAMS = "eventParams";
    public static final String EVENT_ACTION = "my_global_action";
    public static final String EVENT_WX_INSTANCEID = "wx_instanceid";

    private WXSDKInstance mWXSDKInstance;

    public MyGlobalEventReceiver() {
    }

    public MyGlobalEventReceiver(WXSDKInstance instance) {
        mWXSDKInstance = instance;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        String eventName = intent.getStringExtra(EVENT_NAME);
        String params = intent.getStringExtra(EVENT_PARAMS);
        if (EVENT_ACTION.equals(intent.getAction())) {
            HashMap<String, Object> maps = null;
            try {
                maps = com.alibaba.fastjson.JSON.parseObject(params, HashMap.class);
                mWXSDKInstance.fireGlobalEventCallback(eventName, maps);
            } catch (Exception e) {
                WXLogUtils.e("my-global-receiver",e);
            }
        }
    }
}
