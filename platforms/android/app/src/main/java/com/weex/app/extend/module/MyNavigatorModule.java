package com.weex.app.extend.module;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONException;
import com.alibaba.fastjson.JSONObject;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.bridge.WXBridgeManager;
import com.taobao.weex.common.Constants;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.utils.WXLogUtils;
import com.weex.app.util.AppConfig;

/**
 * Created by zhaobin on 2018/3/12.
 */

public class MyNavigatorModule extends WXModule {

    public static final String MODULE_NAME = "myNavigator";

    public static final String MSG_SUCCESS = "WX_SUCCESS";
    public static final String MSG_FAILED = "WX_FAILED";
    public static final String MSG_PARAM_ERR = "WX_PARAM_ERR";

    public static final String CALLBACK_RESULT = "result";
    public static final String CALLBACK_MESSAGE = "message";

    private final static String INSTANCE_ID = "instanceId";
    private final static String TAG = "MyNavigator";
    private final static String WEEX = AppConfig.getCategory();
    private final static String URL = "url";

    @JSMethod(uiThread = true)
    public void open(JSONObject options, JSCallback success, JSCallback failure) {
        if (options != null) {
            String url = options.getString(Constants.Value.URL);
            JSCallback callback = success;
            JSONObject result = new JSONObject();
            if (!TextUtils.isEmpty(url)) {
                Uri rawUri = Uri.parse(url);
                String scheme = rawUri.getScheme();
                if (TextUtils.isEmpty(scheme) || Constants.Scheme.HTTP.equalsIgnoreCase(scheme) || Constants.Scheme.HTTPS.equalsIgnoreCase(scheme)) {
                    this.push(options.toJSONString(), success);
                } else {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, rawUri);
                        mWXSDKInstance.getContext().startActivity(intent);
                        result.put(CALLBACK_RESULT, MSG_SUCCESS);
                    } catch (Throwable e) {
                        e.printStackTrace();
                        result.put(CALLBACK_RESULT, MSG_FAILED);
                        result.put(CALLBACK_MESSAGE, "Open page failed.");
                        callback = failure;
                    }
                }
            } else {
                result.put(CALLBACK_RESULT, MSG_PARAM_ERR);
                result.put(CALLBACK_MESSAGE, "The URL parameter is empty.");
                callback = failure;
            }

            if(callback != null){
                callback.invoke(result);
            }
        }
    }

    @JSMethod(uiThread = true)
    public void close(JSONObject options, JSCallback success, JSCallback failure) {
        JSONObject result = new JSONObject();
        JSCallback callback = null;
        if (mWXSDKInstance.getContext() instanceof Activity) {
            callback = success;
            ((Activity) mWXSDKInstance.getContext()).finish();
        } else {
            result.put(CALLBACK_RESULT, MSG_FAILED);
            result.put(CALLBACK_MESSAGE, "Close page failed.");
            callback = failure;
        }
        if (callback != null) {
            callback.invoke(result);
        }
    }

    @JSMethod(uiThread = true)
    public void push(String param, JSCallback callback) {

        if (!TextUtils.isEmpty(param)) {
            if (WXSDKEngine.getActivityNavBarSetter() != null) {
                if (WXSDKEngine.getActivityNavBarSetter().push(param)) {
                    if (callback != null) {
                        callback.invoke(MSG_SUCCESS);
                    }
                    return;
                }
            }

            try {
                JSONObject jsonObject = JSON.parseObject(param);
                String url = jsonObject.getString(URL);
                if (!TextUtils.isEmpty(url)) {
                    Uri rawUri = Uri.parse(url);
                    String scheme = rawUri.getScheme();
                    Uri.Builder builder = rawUri.buildUpon();
                    if (TextUtils.isEmpty(scheme)) {
                        builder.scheme(Constants.Scheme.HTTP);
                    }
                    Intent intent = new Intent(Intent.ACTION_VIEW, builder.build());
//                    Intent intent = new Intent(Intent.ACTION_VIEW, rawUri);
                    // 判断是否是AndroidN以及更高的版本
                    // 想通过fileProvider的形式解决，可惜不会。。。没成功
//                    Intent intent = null;
//                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N && "file".equals(scheme)) {
//                        intent = new Intent(Intent.ACTION_VIEW);
//                        intent.setData(
//                                FileProvider.getUriForFile(
//                                    mWXSDKInstance.getContext(),
//                                    mWXSDKInstance.getContext().getPackageName() + ".fileProvider",
//                                        new File(url))
//                        );
//                        intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
//                    } else {
//                        intent = new Intent(Intent.ACTION_VIEW, builder.build());
//                    }
                    intent.addCategory(WEEX);
                    intent.putExtra(INSTANCE_ID, mWXSDKInstance.getInstanceId());
                    mWXSDKInstance.getContext().startActivity(intent);
                    if (callback != null) {
                        callback.invoke(MSG_SUCCESS);
                    }
                }
            } catch (Exception e) {
                WXLogUtils.eTag(TAG, e);
                if (callback != null) {
                    callback.invoke(MSG_FAILED);
                }
            }
        } else if (callback != null) {
            callback.invoke(MSG_FAILED);
        }
    }

    @JSMethod(uiThread = true)
    public void pop(String param, JSCallback callback) {

        if (WXSDKEngine.getActivityNavBarSetter() != null) {
            if (WXSDKEngine.getActivityNavBarSetter().pop(param)) {
                if (callback != null) {
                    callback.invoke(MSG_SUCCESS);
                }
                return;
            }
        }

        if (mWXSDKInstance.getContext() instanceof Activity) {
            if (callback != null) {
                callback.invoke(MSG_SUCCESS);
            }
            ((Activity) mWXSDKInstance.getContext()).finish();
        }
    }

    @JSMethod(uiThread = true)
    public void setNavBarRightItem(String param, JSCallback callback) {
        if (!TextUtils.isEmpty(param)) {
            if (WXSDKEngine.getActivityNavBarSetter() != null) {
                if (WXSDKEngine.getActivityNavBarSetter().setNavBarRightItem(param)) {
                    if (callback != null) {
                        callback.invoke(MSG_SUCCESS);
                    }
                    return;
                }
            }
        }

        if (callback != null) {
            callback.invoke(MSG_FAILED);
        }
    }

    @JSMethod(uiThread = true)
    public void clearNavBarRightItem(String param, JSCallback callback) {
        if (WXSDKEngine.getActivityNavBarSetter() != null) {
            if (WXSDKEngine.getActivityNavBarSetter().clearNavBarRightItem(param)) {
                if (callback != null) {
                    callback.invoke(MSG_SUCCESS);
                }
                return;
            }
        }
        if (callback != null) {
            callback.invoke(MSG_FAILED);
        }
    }

    @JSMethod(uiThread = true)
    public void setNavBarLeftItem(String param, JSCallback callback) {
        if (!TextUtils.isEmpty(param)) {
            if (WXSDKEngine.getActivityNavBarSetter() != null) {
                if (WXSDKEngine.getActivityNavBarSetter().setNavBarLeftItem(param)) {
                    if (callback != null) {
                        callback.invoke(MSG_SUCCESS);
                    }
                    return;
                }
            }
        }

        if (callback != null) {
            callback.invoke(MSG_FAILED);
        }

    }

    @JSMethod(uiThread = true)
    public void clearNavBarLeftItem(String param, JSCallback callback) {
        if (WXSDKEngine.getActivityNavBarSetter() != null) {
            if (WXSDKEngine.getActivityNavBarSetter().clearNavBarLeftItem(param)) {
                if (callback != null) {
                    callback.invoke(MSG_SUCCESS);
                }
                return;
            }
        }

        if (callback != null) {
            callback.invoke(MSG_FAILED);
        }
    }

    @JSMethod(uiThread = true)
    public void setNavBarMoreItem(String param, JSCallback callback) {
        if (!TextUtils.isEmpty(param)) {
            if (WXSDKEngine.getActivityNavBarSetter() != null) {
                if (WXSDKEngine.getActivityNavBarSetter().setNavBarMoreItem(param)) {
                    if (callback != null) {
                        callback.invoke(MSG_SUCCESS);
                    }
                    return;
                }
            }
        }

        if (callback != null) {
            callback.invoke(MSG_FAILED);
        }
    }

    @JSMethod(uiThread = true)
    public void clearNavBarMoreItem(String param, JSCallback callback) {
        if (WXSDKEngine.getActivityNavBarSetter() != null) {
            if (WXSDKEngine.getActivityNavBarSetter().clearNavBarMoreItem(param)) {
                if (callback != null) {
                    callback.invoke(MSG_SUCCESS);
                }
                return;
            }
        }

        if (callback != null) {
            callback.invoke(MSG_FAILED);
        }
    }

    @JSMethod(uiThread = true)
    public void setNavBarTitle(String param, JSCallback callback) {
        if (!TextUtils.isEmpty(param)) {
            if (WXSDKEngine.getActivityNavBarSetter() != null) {
                if (WXSDKEngine.getActivityNavBarSetter().setNavBarTitle(param)) {
                    if (callback != null) {
                        callback.invoke(MSG_SUCCESS);
                    }
                    return;
                }
            }
        }
        if (callback != null) {
            callback.invoke(MSG_FAILED);
        }
    }

    @JSMethod
    public void setNavBarHidden(String param, final String callback) {
        String message = MSG_FAILED;
        try {
            JSONObject jsObj = JSON.parseObject(param);
            int visibility = jsObj.getInteger(Constants.Name.NAV_BAR_VISIBILITY);
            boolean success = changeVisibilityOfActionBar(mWXSDKInstance.getContext(), visibility);
            if (success) {
                message = MSG_SUCCESS;
            }
        } catch (JSONException e) {
            WXLogUtils.e(TAG, WXLogUtils.getStackTrace(e));
        }
        WXBridgeManager.getInstance().callback(mWXSDKInstance.getInstanceId(), callback, message);
    }

    private boolean changeVisibilityOfActionBar(Context context, int visibility) {
        boolean result = false;
        boolean hasAppCompatActivity = false;
        try {
            Class.forName("android.support.v7.app.AppCompatActivity");
            hasAppCompatActivity = true;
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        if (hasAppCompatActivity && mWXSDKInstance.getContext() instanceof AppCompatActivity) {
            android.support.v7.app.ActionBar actionbar = ((AppCompatActivity) mWXSDKInstance.getContext()).getSupportActionBar();
            if (actionbar != null) {
                switch (visibility) {
                    case Constants.Value.NAV_BAR_HIDDEN:
                        actionbar.hide();
                        result = true;
                        break;
                    case Constants.Value.NAV_BAR_SHOWN:
                        actionbar.show();
                        result = true;
                        break;
                }
            }
        } else if (mWXSDKInstance.getContext() instanceof Activity) {
            android.app.ActionBar actionbar = ((Activity) mWXSDKInstance.getContext()).getActionBar();
            if (actionbar != null) {
                switch (visibility) {
                    case Constants.Value.NAV_BAR_HIDDEN:
                        actionbar.hide();
                        result = true;
                        break;
                    case Constants.Value.NAV_BAR_SHOWN:
                        actionbar.show();
                        result = true;
                        break;
                }
            }
        }
        return result;
    }

}
