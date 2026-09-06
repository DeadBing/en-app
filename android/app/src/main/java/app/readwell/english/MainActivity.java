package app.readwell.english;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.View;
import android.content.res.Configuration;
import android.widget.FrameLayout;
import android.window.OnBackInvokedDispatcher;
import androidx.webkit.WebViewAssetLoader;
import androidx.webkit.WebViewCompat;
import androidx.webkit.WebViewFeature;
import java.util.Collections;
import java.io.ByteArrayInputStream;

public class MainActivity extends Activity {
    private WebView webView;
    private FrameLayout container;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        if (Build.VERSION.SDK_INT >= 30) getWindow().setDecorFitsSystemWindows(false);
        showApp();
        if (Build.VERSION.SDK_INT >= 33) {
            getOnBackInvokedDispatcher().registerOnBackInvokedCallback(
                OnBackInvokedDispatcher.PRIORITY_DEFAULT, this::goBack);
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void showApp() {
        webView = new WebView(this);
        container = new FrameLayout(this);
        container.addView(webView, new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(container);
        boolean systemDark = (getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES;
        applyNativeTheme(getPreferences(MODE_PRIVATE).getString("theme", systemDark ? "dark" : "light"));
        if (Build.VERSION.SDK_INT >= 30) {
            container.setOnApplyWindowInsetsListener((view, insets) -> {
                android.graphics.Insets bars = insets.getInsets(WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout() | WindowInsets.Type.ime());
                view.setPadding(bars.left, bars.top, bars.right, bars.bottom);
                return WindowInsets.CONSUMED;
            });
        }
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setTextZoom(Math.round(getResources().getConfiguration().fontScale * 100));
        webView.getSettings().setAllowFileAccess(false);
        webView.getSettings().setAllowContentAccess(false);
        webView.getSettings().setMediaPlaybackRequiresUserGesture(true);
        WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG);
        if (WebViewFeature.isFeatureSupported(WebViewFeature.WEB_MESSAGE_LISTENER)) {
            WebViewCompat.addWebMessageListener(webView, "ReadwellTheme",
                Collections.singleton("https://appassets.androidplatform.net"),
                (view, message, origin, isMainFrame, reply) -> {
                    if (isMainFrame) applyNativeTheme(message.getData());
                });
        }
        final WebViewAssetLoader loader = new WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this)).build();
        webView.setWebViewClient(new WebViewClient() {
            @Override public void onPageFinished(WebView view, String url) {
                view.evaluateJavascript("document.documentElement.dataset.theme", result -> {
                    if ("\"dark\"".equals(result)) applyNativeTheme("dark");
                    else if ("\"light\"".equals(result)) applyNativeTheme("light");
                });
            }
            @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                WebResourceResponse local = loader.shouldInterceptRequest(request.getUrl());
                return local != null ? local : new WebResourceResponse("text/plain", "UTF-8", 404, "Not Found", null, new ByteArrayInputStream(new byte[0]));
            }
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return !("https".equals(request.getUrl().getScheme()) && "appassets.androidplatform.net".equals(request.getUrl().getHost()) && request.getUrl().getPath().startsWith("/assets/"));
            }
            @Override public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                ((android.view.ViewGroup) view.getParent()).removeView(view);
                view.destroy();
                showApp();
                return true;
            }
        });
        webView.loadUrl("https://appassets.androidplatform.net/assets/index.html");
    }

    @SuppressWarnings("deprecation")
    private void applyNativeTheme(String theme) {
        if (!"dark".equals(theme) && !"light".equals(theme)) return;
        boolean dark = "dark".equals(theme);
        int background = Color.parseColor(dark ? "#141313" : "#f6f1e8");
        container.setBackgroundColor(background);
        webView.setBackgroundColor(background);
        getWindow().setStatusBarColor(background);
        getWindow().setNavigationBarColor(background);
        if (Build.VERSION.SDK_INT >= 30) {
            int mask = WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS | WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS;
            WindowInsetsController controller = getWindow().getInsetsController();
            if (controller != null) controller.setSystemBarsAppearance(dark ? 0 : mask, mask);
        } else {
            int mask = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
            View decor = getWindow().getDecorView();
            decor.setSystemUiVisibility((decor.getSystemUiVisibility() & ~mask) | (dark ? 0 : mask));
        }
        getPreferences(MODE_PRIVATE).edit().putString("theme", theme).apply();
    }

    private void goBack() {
        webView.evaluateJavascript("window.appBack ? window.appBack() : false", result -> {
            if (!"true".equals(result)) finish();
        });
    }
    @SuppressWarnings("deprecation")
    // Only Android 8-12 use this callback. API 33+ uses OnBackInvokedDispatcher above.
    @SuppressLint("GestureBackNavigation")
    @Override public void onBackPressed() { goBack(); }
    @Override protected void onDestroy() {
        if (webView != null) webView.destroy();
        super.onDestroy();
    }
}
