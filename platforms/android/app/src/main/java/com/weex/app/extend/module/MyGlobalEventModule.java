package com.weex.app.extend.module;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.text.TextUtils;
import android.widget.Toast;

import com.alibaba.fastjson.JSONObject;
import com.journeyapps.barcodescanner.CaptureActivity;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.weex.app.WXPageActivity;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Created by zhaobin on 2018/3/9.
 */

public class MyGlobalEventModule extends WXModule {

    private static final String WEEX_CATEGORY = "com.taobao.android.intent.category.WEEX";
    private static final String WEEX_ACTION = "com.taobao.android.intent.action.WEEX";

    public static final String MODULE_NAME = "myGlobalEvent";

    private static final int CAMERA_PERMISSION_REQUEST_CODE = 0x9;

    @JSMethod(uiThread = true)
    public void openURL(String url) {
        if (TextUtils.isEmpty(url)) {
            return;
        }
        Uri uri = Uri.parse(url);
        String scheme = uri.getScheme();

        StringBuilder builder = new StringBuilder();

        if ("weex://go/scan".equals(url)) {
            if (ContextCompat.checkSelfPermission(mWXSDKInstance.getContext(), Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                if (ActivityCompat.shouldShowRequestPermissionRationale((Activity) mWXSDKInstance.getContext(), Manifest.permission.CAMERA)) {
                    Toast.makeText(mWXSDKInstance.getContext(), "App need the camera permission to scan QR code", Toast.LENGTH_SHORT).show();
                } else {
                    ActivityCompat.requestPermissions((Activity) mWXSDKInstance.getContext(), new String[]{Manifest.permission.CAMERA}, CAMERA_PERMISSION_REQUEST_CODE);
                }
            } else {
                mWXSDKInstance.getContext().startActivity(new Intent(mWXSDKInstance.getContext(), CaptureActivity.class));
            }
            return;
        }

        if (TextUtils.equals("http", scheme) || TextUtils.equals("https", scheme) || TextUtils.equals("file", scheme)) {
            builder.append(url);
        } else {
            builder.append("http:");
            builder.append(url);
        }

        Uri uri2 = Uri.parse(builder.toString());
        Intent intent = new Intent(mWXSDKInstance.getContext(), WXPageActivity.class);
        intent.setAction(WEEX_ACTION);
        intent.setData(uri2);
        intent.addCategory(WEEX_CATEGORY);
        mWXSDKInstance.getContext().startActivity(intent);

        if (mWXSDKInstance.checkModuleEventRegistered(MODULE_NAME, this)) {
            HashMap<String, Object> params = new HashMap<>();

            Set<String> names = uri.getQueryParameterNames();
            if (names != null) {
                Iterator<String> iterator = names.iterator();
                String name = null;
                List<String> values = null;
                while (iterator.hasNext()) {
                    name = iterator.next();
                    values = uri.getQueryParameters(name);
                    params.put(name, values);
                }
            }

            mWXSDKInstance.fireModuleEvent(MODULE_NAME, this, params);
        }
    }

    /*
       * a test method for macaca case, you can fire globalEvent when download finish、device shaked and so on.
       * @param event event name
      * */
    @JSMethod(uiThread = true)
    public void fireGlobalEvent(String event, JSONObject params, JSCallback callback) {
        // 页面上没有返回值
        // 加了toast试了下传的返回值能接受到
//        Toast.makeText(mWXSDKInstance.getContext(), params.toJSONString(), Toast.LENGTH_LONG).show();
        mWXSDKInstance.fireGlobalEventCallback(event, params);
//        mWXSDKInstance.fireModuleEvent(event, this, params);
        if (null != callback) {
            Map<String, Boolean> result = new HashMap<String, Boolean>();
            result.put("ok", true);
            callback.invoke(result);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == CAMERA_PERMISSION_REQUEST_CODE && grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            mWXSDKInstance.getContext().startActivity(new Intent(mWXSDKInstance.getContext(), CaptureActivity.class));
        }
    }
}
