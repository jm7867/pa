package com.example.ltp


import android.Manifest
import android.content.pm.PackageManager
import android.net.http.SslError
import android.os.Build
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import android.view.WindowInsets
import android.view.WindowInsetsController
import android.webkit.*
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import java.io.File
import java.io.FileOutputStream
import java.net.HttpURLConnection
import java.net.URL
import java.util.concurrent.Executors

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var loadingLayout: LinearLayout
    private lateinit var statusText: TextView

    // ── Your GitHub ──────────────────────────────────────────
    private val GITHUB = "https://raw.githubusercontent.com/jm7867/pa/master/"

    // ── Only these files download to tablet ─────────────────
    private val FILES = arrayOf(
        arrayOf("index.html", "index.html"),
        arrayOf("i3.html",    "i3.html"),
        arrayOf("i5.html",    "i5.html"),
        arrayOf("logo.gif",   "logo.gif"),
        arrayOf("azan.mp3",   "azan.mp3")  // downloaded for reliable playback
        // quran & nashed stream directly from GitHub
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // ── Full Screen ──────────────────────────────────────
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            window.insetsController?.let {
                it.hide(WindowInsets.Type.statusBars()
                        or WindowInsets.Type.navigationBars())
                it.systemBarsBehavior =
                    WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
            }
        } else {
            @Suppress("DEPRECATION")
            window.decorView.systemUiVisibility = (
                    View.SYSTEM_UI_FLAG_FULLSCREEN
                            or View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                            or View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                            or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                            or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                            or View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    )
        }

        setContentView(R.layout.activity_main)

        webView       = findViewById(R.id.webview)
        loadingLayout = findViewById(R.id.loadingLayout)
        statusText    = findViewById(R.id.statusText)

        requestLocationPermission()
        setupWebView()
        downloadAndLaunch()
    }

    // ── WebView Setup ────────────────────────────────────────
    private fun setupWebView() {
        webView.settings.apply {
            javaScriptEnabled                = true
            setGeolocationEnabled(true)
            domStorageEnabled                = true
            mediaPlaybackRequiresUserGesture = false
            allowFileAccess                  = true
            @Suppress("DEPRECATION")
            allowFileAccessFromFileURLs      = true
            @Suppress("DEPRECATION")
            allowUniversalAccessFromFileURLs = true
            mixedContentMode                 = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            useWideViewPort                  = true
            loadWithOverviewMode             = true
            builtInZoomControls              = false
            displayZoomControls              = false
            cacheMode                        = WebSettings.LOAD_DEFAULT
        }

        webView.webViewClient = object : WebViewClient() {
            override fun onReceivedSslError(
                view: WebView?,
                handler: SslErrorHandler?,
                error: SslError?
            ) {
                handler?.proceed()
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onGeolocationPermissionsShowPrompt(
                origin: String?,
                callback: GeolocationPermissions.Callback?
            ) {
                callback?.invoke(origin, true, false)
            }

            override fun onPermissionRequest(request: PermissionRequest?) {
                request?.grant(request.resources)
            }
        }
    }

    // ── Download Files then Launch ───────────────────────────
    private fun downloadAndLaunch() {
        val executor = Executors.newSingleThreadExecutor()
        val handler  = Handler(Looper.getMainLooper())

        executor.execute {
            for (file in FILES) {
                val name = file[1]
                handler.post { statusText.text = "Updating: $name" }
                downloadFile(GITHUB + file[0], name)
            }

            handler.post {
                if (localExists("index.html")) {
                    loadingLayout.visibility = View.GONE
                    webView.visibility       = View.VISIBLE
                    val path = "file://${filesDir.absolutePath}/index.html"
                    webView.loadUrl(path)
                } else {
                    statusText.text =
                        "No internet connection.\nPlease connect and reopen."
                }
            }
        }
    }

    // ── Download Single File ─────────────────────────────────
    private fun downloadFile(urlStr: String, localName: String): Boolean {
        return try {
            val out = File(filesDir, localName)
            out.parentFile?.mkdirs()

            val url  = URL(urlStr)
            val conn = url.openConnection() as HttpURLConnection
            conn.connectTimeout = 15000
            conn.readTimeout    = 20000
            conn.connect()

            if (conn.responseCode != HttpURLConnection.HTTP_OK) {
                conn.disconnect()
                return false
            }

            val input  = conn.inputStream
            val output = FileOutputStream(out as File)
            val buffer = ByteArray(8192)
            var len: Int
            while (input.read(buffer).also { len = it } != -1) {
                output.write(buffer, 0, len)
            }
            output.close()
            input.close()
            conn.disconnect()
            true

        } catch (e: Exception) {
            false // no internet → use cached version
        }
    }

    private fun localExists(name: String) =
        File(filesDir, name).exists()

    // ── Back Button ──────────────────────────────────────────
    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        if (webView.canGoBack()) webView.goBack()
        else super.onBackPressed()
    }

    // ── Location Permission ──────────────────────────────────
    private fun requestLocationPermission() {
        if (ContextCompat.checkSelfPermission(
                this, Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(
                this,
                arrayOf(
                    Manifest.permission.ACCESS_FINE_LOCATION,
                    Manifest.permission.ACCESS_COARSE_LOCATION
                ),
                1
            )
        }
    }
}