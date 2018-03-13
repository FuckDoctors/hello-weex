package com.weex.app.extend.module;

import android.app.Activity;
import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;

import com.taobao.weex.appfram.navigator.IActivityNavBarSetter;
import com.weex.app.WXPageActivity;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Stack;

/**
 * Created by zhaobin on 2018/3/3.
 */

public class MyNavigatorAdapter implements IActivityNavBarSetter {

    private Context context;

    private Stack<Activity> history = new Stack<>();

    public MyNavigatorAdapter(Context context) {
        this.context = context;
    }

    @Override
    public boolean push(String param) {
//        return false;
        // 不懂android，以为android端什么都不做就能实现navigator.push。
        // 实际发现不是这样。
        // 后来别人说在AndroidManifest.xml里加上intent-filter就可以。
        // 但自己试了下发现不行。
        // 看了看weex playground中的代码也没有类似处理（可能能力不行，是没看出来。。。）
        // 后来想着在github上搜IActivityNavBarSetter，看看有没有别人的代码可以参考。
        // 然后就照着这个地址做了，然后android页面终于显示出来了~~~
        // https://github.com/alibaba/bindingx/blob/509c79c78aad61951173e28ed9a7452609351832/weex/playground/android/playground-weex/src/main/java/com/alibaba/android/bindingx/playground/weex/DemoApplication.java
        // bindingx/weex/playground/android/playground-weex/src/main/java/com/alibaba/android/bindingx/playground/weex/DemoApplication.java
        JSONObject object = null;
        try {
            object = new JSONObject(param);
            String url = object.optString("url");
            if(!TextUtils.isEmpty(url)) {
                if (context instanceof Activity) {
                    history.push((Activity) context);
                }
                WXPageActivity.start(context, url);
                return true;
            } else {
                return false;
            }
        } catch (JSONException e) {
            return false;
        }
    }

    @Override
    public boolean pop(String param) {
//        return false;
        // 上面的push可以实现跳转效果，但是pop的效果不对。
        // 导航的历史记录感觉不对，每次都是重新跳转的效果？
        // 不知道怎么搞。
        // 别的资料有下面的东西，不知道有什么作用，先拿过来吧。。。
        // 参考资料：https://github.com/Droi-SDK/droiv-android/blob/2a38e56c6ca1e171ea470233699340a10c6b9d74/bin/templates/app/src/main/java/com/xiudian/weex/extend/XDNavBarSetter.java
        // 然后发现它的这个项目里自定义了navigator的一些东西，值得学习，居然没有star，果断给一个。
        // https://github.com/Droi-SDK/droiv-android
        // 拿过来后反而pop不能用了。。。先注释掉吧。。。
//        if (context instanceof Activity) {
//            ((Activity) context).finish();
//        }
//        return true;
        if (context instanceof Activity) {
            ((Activity) context).finish();
        }
        if (history.isEmpty()) {
            return false;
        } else {
            history.peek();
            return true;
        }
    }

    @Override
    public boolean setNavBarRightItem(String param) {
        return false;
    }

    @Override
    public boolean clearNavBarRightItem(String param) {
        return false;
    }

    @Override
    public boolean setNavBarLeftItem(String param) {
        return false;
    }

    @Override
    public boolean clearNavBarLeftItem(String param) {
        return false;
    }

    @Override
    public boolean setNavBarMoreItem(String param) {
        return false;
    }

    @Override
    public boolean clearNavBarMoreItem(String param) {
        return false;
    }

    @Override
    public boolean setNavBarTitle(String param) {
        return false;
    }
}
