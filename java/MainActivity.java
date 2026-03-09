package com.example.fakeidentity;

import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.JavascriptInterface;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        webView = new WebView(this);
        setContentView(webView);

        // Enable JavaScript
        webView.getSettings().setJavaScriptEnabled(true);

        // Keep navigation inside WebView
        webView.setWebViewClient(new WebViewClient());

        // Add Android bridge for JS
        webView.addJavascriptInterface(new AndroidBridge(), "Android");

        // Load your offline HTML
        webView.loadUrl("file:///android_asset/index.html");
    }

    // Bridge class for JavaScript
    public class AndroidBridge {

        @JavascriptInterface
        public void exitApp() {
            finish(); // closes app and returns to home screen
        }
    }

    // Handle phone back button
    @Override
    public void onBackPressed() {

        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            finish();
        }

    }
}
