package com.weex.app;

import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.content.LocalBroadcastManager;
import android.text.TextUtils;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXRenderErrorCode;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.ui.component.NestedContainer;
import com.taobao.weex.utils.WXLogUtils;
import com.taobao.weex.utils.WXSoInstallMgrSdk;
import com.weex.app.hotreload.HotReloadManager;
import com.weex.app.util.AppConfig;
import com.weex.app.util.Constants;

import org.json.JSONException;
import org.json.JSONObject;


public class WXPageActivity extends AbsWeexActivity implements
    WXSDKInstance.NestedInstanceInterceptor {

  private static final String TAG = "WXPageActivity";
  private ProgressBar mProgressBar;
  private TextView mTipView;
  private boolean mFromSplash = false;
  private HotReloadManager mHotReloadManager;

  public static String WEEX_URL = "weexUrl";

  @Override
  public void onCreateNestInstance(WXSDKInstance instance, NestedContainer container) {
    Log.d(TAG, "Nested Instance created.");
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_wxpage);

    // 隐藏状态栏，理解沉浸式模式
    // https://blog.csdn.net/guolin_blog/article/details/51763825
    if (Build.VERSION.SDK_INT >= 21) {
      View decorView = getWindow().getDecorView();
//      int option = View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
//              | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//              | View.SYSTEM_UI_FLAG_LAYOUT_STABLE;
      int option = View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
              | View.SYSTEM_UI_FLAG_LAYOUT_STABLE;
      decorView.setSystemUiVisibility(option);
//      getWindow().setNavigationBarColor(Color.TRANSPARENT);
      getWindow().setStatusBarColor(Color.TRANSPARENT);
//      getWindow().setStatusBarColor(Color.argb(0, 0, 62, 94));
    }
//    // 隐藏ActionBar
//    ActionBar actionBar = getSupportActionBar();
//    if (actionBar != null) {
//      actionBar.hide();
//    }
    // 设置FitsSystemWindows
    ViewGroup contentFrameLayout = findViewById(Window.ID_ANDROID_CONTENT);
    View parentView = contentFrameLayout.getChildAt(0);
    if (parentView != null && Build.VERSION.SDK_INT >= 19) {
      // 不懂android，想实现跟iOS一样的效果，设置状态栏颜色。
      // 有关于沉浸式的资料有写，但是需要设置android:fitsSystemWindows="true"。
      // 但是试了不起作用，还是透明色，搜索过程中有资料要设为false，然后不报希望的试了一下，是想要的效果了。。。
      // 更多资料可以看这个：
      // http://yifeng.studio/2017/02/19/android-statusbar/
      // https://www.zhihu.com/question/31468556
      // https://yiweifen.com/html/news/WaiYu/114323.html
      // 这里设置true不行，必须设置为false
      parentView.setFitsSystemWindows(false);
    }

//    WXSDKEngine.setActivityNavBarSetter(new MyNavigatorAdapter());

    mContainer = (ViewGroup) findViewById(R.id.container);
    mProgressBar = (ProgressBar) findViewById(R.id.progress);
    mTipView = (TextView) findViewById(R.id.index_tip);

    Intent intent = getIntent();
    Uri uri = intent.getData();
    String from = intent.getStringExtra("from");
    mFromSplash = "splash".equals(from);

//    if (uri == null) {
//      uri = Uri.parse("{}");
//    }
    if (uri != null) {
      try {
        JSONObject initData = new JSONObject(uri.toString());
        String bundleUrl = initData.optString("WeexBundle", null);
        if (bundleUrl != null) {
          mUri = Uri.parse(bundleUrl);
        }

        String ws = initData.optString("Ws", null);
        if (!TextUtils.isEmpty(ws)) {
          mHotReloadManager = new HotReloadManager(ws, new HotReloadManager.ActionListener() {
            @Override
            public void reload() {
              runOnUiThread(new Runnable() {
                @Override
                public void run() {
                  Toast.makeText(WXPageActivity.this, "Hot reload", Toast.LENGTH_SHORT).show();
                  createWeexInstance();
                  renderPage();
                }
              });
            }

            @Override
            public void render(final String bundleUrl) {
              runOnUiThread(new Runnable() {
                @Override
                public void run() {
                  Toast.makeText(WXPageActivity.this, "Render: " + bundleUrl, Toast.LENGTH_SHORT).show();
                  createWeexInstance();
                  loadUrl(bundleUrl);
                }
              });
            }
          });
        } else {
          WXLogUtils.w("Weex", "can not get hot reload config");
        }
      } catch (JSONException e) {
        e.printStackTrace();
      }
    }

    if (mUri == null) {
//      mUri = Uri.parse(AppConfig.getLaunchUrl());
//      // 另一种方式
//      if (TextUtils.isEmpty(intent.getStringExtra(WEEX_URL))) {
//        mUri = Uri.parse(AppConfig.getLaunchUrl());
//      } else {
//        mUri = Uri.parse(intent.getStringExtra(WEEX_URL));
//      }
      if (uri == null) {
        mUri = Uri.parse(AppConfig.getLaunchUrl());
      } else {
        mUri = uri;
      }
    }

    if (!WXSoInstallMgrSdk.isCPUSupport()) {
      mProgressBar.setVisibility(View.INVISIBLE);
      mTipView.setText(R.string.cpu_not_support_tip);
      return;
    }

    String url = getUrl(mUri);
    if (getSupportActionBar() != null) {
      getSupportActionBar().setTitle(url);
      getSupportActionBar().hide();
    }
    loadUrl(url);
  }

  private String getUrl(Uri uri) {
    String url = uri.toString();
    String scheme = uri.getScheme();
    if (uri.isHierarchical()) {
      if (TextUtils.equals(scheme, "http") || TextUtils.equals(scheme, "https")) {
        String weexTpl = uri.getQueryParameter(Constants.WEEX_TPL_KEY);
        if (!TextUtils.isEmpty(weexTpl)) {
          url = weexTpl;
        }
      }
    }
    return url;
  }

  protected void preRenderPage() {
    mProgressBar.setVisibility(View.VISIBLE);
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    Intent intent = new Intent("requestPermission");
    intent.putExtra("REQUEST_PERMISSION_CODE", requestCode);
    intent.putExtra("permissions", permissions);
    intent.putExtra("grantResults", grantResults);
    LocalBroadcastManager.getInstance(this).sendBroadcast(intent);
  }


  @Override
  public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
    mProgressBar.setVisibility(View.GONE);
    mTipView.setVisibility(View.GONE);
  }

  @Override
  public void onException(WXSDKInstance instance, String errCode, String msg) {
    mProgressBar.setVisibility(View.GONE);
    mTipView.setVisibility(View.VISIBLE);
//    if (TextUtils.equals(errCode, WXRenderErrorCode.WX_NETWORK_ERROR)) {
    if (TextUtils.equals(errCode, WXRenderErrorCode
            .DegradPassivityCode.WX_DEGRAD_ERR_NETWORK_BUNDLE_DOWNLOAD_FAILED.getDegradErrorCode())) {
      mTipView.setText(R.string.index_tip);
    } else {
      mTipView.setText("render error:" + errCode);
    }
  }

  @Override
  public boolean onCreateOptionsMenu(Menu menu) {
    getMenuInflater().inflate(mFromSplash ? R.menu.main_scan : R.menu.main, menu);
    return super.onCreateOptionsMenu(menu);
  }

  @Override
  public boolean onOptionsItemSelected(MenuItem item) {
    switch (item.getItemId()) {
      case R.id.action_refresh:
        createWeexInstance();
        renderPage();
        break;
      case R.id.action_scan:
        IntentIntegrator integrator = new IntentIntegrator(this);
        integrator.setDesiredBarcodeFormats(IntentIntegrator.QR_CODE_TYPES);
        integrator.setPrompt("Scan a barcode");
        //integrator.setCameraId(0);  // Use a specific camera of the device
        integrator.setBeepEnabled(true);
        integrator.setOrientationLocked(false);
        integrator.setBarcodeImageEnabled(true);
        integrator.setPrompt(getString(R.string.capture_qrcode_prompt));
        integrator.initiateScan();
        break;
      case android.R.id.home:
        finish();
      default:
        break;
    }

    return super.onOptionsItemSelected(item);
  }

  @Override
  public void onActivityResult(int requestCode, int resultCode, Intent data) {
    IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
    if (result != null) {
      if (result.getContents() == null) {
        Toast.makeText(this, "Cancelled", Toast.LENGTH_LONG).show();
      } else {
        handleDecodeInternally(result.getContents());
      }
    }
    super.onActivityResult(requestCode, resultCode, data);
  }

  // Put up our own UI for how to handle the decoded contents.
  private void handleDecodeInternally(String code) {

    if (!TextUtils.isEmpty(code)) {
      Uri uri = Uri.parse(code);
      if (uri.getQueryParameterNames().contains("bundle")) {
        WXEnvironment.sDynamicMode = uri.getBooleanQueryParameter("debug", false);
        WXEnvironment.sDynamicUrl = uri.getQueryParameter("bundle");
        String tip = WXEnvironment.sDynamicMode ? "Has switched to Dynamic Mode" : "Has switched to Normal Mode";
        Toast.makeText(this, tip, Toast.LENGTH_SHORT).show();
        finish();
        return;
      } else if (uri.getQueryParameterNames().contains("_wx_devtool")) {
        WXEnvironment.sRemoteDebugProxyUrl = uri.getQueryParameter("_wx_devtool");
        WXEnvironment.sDebugServerConnectable = true;
        WXSDKEngine.reload();
        Toast.makeText(this, "devtool", Toast.LENGTH_SHORT).show();
        return;
      } else if (code.contains("_wx_debug")) {
        uri = Uri.parse(code);
        String debug_url = uri.getQueryParameter("_wx_debug");
//        WXSDKEngine.switchDebugModel(true, debug_url);
        WXEnvironment.sRemoteDebugProxyUrl = debug_url;
        WXEnvironment.sDebugServerConnectable = true;
        WXSDKEngine.reload();
        finish();
      } else {
        JSONObject data = new JSONObject();
        try {
          data.put("WeexBundle", Uri.parse(code).toString());
          Intent intent = new Intent(WXPageActivity.this, WXPageActivity.class);
          intent.setData(Uri.parse(data.toString()));
          startActivity(intent);
        } catch (JSONException e) {
          e.printStackTrace();
        }
      }
    }
  }

  public static void start(Context context, String url) {
    if(context == null || TextUtils.isEmpty(url)) {
      return;
    }
    Intent intent = new Intent(context, WXPageActivity.class);
    intent.setAction(Intent.ACTION_VIEW);
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    intent.putExtra(WEEX_URL, url);
    context.startActivity(intent);
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
    if (mHotReloadManager != null) {
      mHotReloadManager.destroy();
    }
  }
}
