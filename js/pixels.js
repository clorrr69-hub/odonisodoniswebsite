/* ============================================================
   ODONIS ODONIS — TRACKING PIXEL INFRASTRUCTURE
   ------------------------------------------------------------
   This file wires up Meta (Facebook/Instagram) Pixel, Google
   tag (GA4 + Google Ads), and TikTok Pixel behind a single
   consent-gated loader.

   TO ACTIVATE: replace every "REPLACE_WITH_..." placeholder
   below with your real ID(s), then delete the early "return"
   guards in each init function. See /README.md for full setup
   steps and where each ID comes from.
   ============================================================ */

(function () {
  "use strict";

  // ---- IDs: replace these -----------------------------------
  var META_PIXEL_ID = "28862457153361619";
  var GA4_MEASUREMENT_ID = "REPLACE_WITH_GA4_ID";          // e.g. "G-XXXXXXXXXX"
  var GOOGLE_ADS_ID = "REPLACE_WITH_GOOGLE_ADS_ID";        // e.g. "AW-XXXXXXXXX" (optional)
  var TIKTOK_PIXEL_ID = "7681763178048684048";

  // ---- Simple consent flag -----------------------------------
  // Wire this up to a real cookie-consent banner before going live
  // in regions that require opt-in (EU/UK/CA all require this).
  var CONSENT_GRANTED = true; // set to false + gate behind a banner if required

  function isPlaceholder(id) {
    return !id || id.indexOf("REPLACE_WITH_") === 0;
  }

  // ---- Meta Pixel ---------------------------------------------
  function initMeta() {
    if (isPlaceholder(META_PIXEL_ID)) return;
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");

    var noscript = document.createElement("noscript");
    var img = document.createElement("img");
    img.height = 1; img.width = 1; img.style.display = "none";
    img.src = "https://www.facebook.com/tr?id=" + META_PIXEL_ID + "&ev=PageView&noscript=1";
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }

  // ---- Google tag (GA4 + optional Google Ads) ------------------
  function initGoogle() {
    if (isPlaceholder(GA4_MEASUREMENT_ID)) return;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_MEASUREMENT_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA4_MEASUREMENT_ID);

    if (!isPlaceholder(GOOGLE_ADS_ID)) {
      gtag("config", GOOGLE_ADS_ID);
    }
  }

  // ---- TikTok Pixel ---------------------------------------------
  function initTikTok() {
    if (isPlaceholder(TIKTOK_PIXEL_ID)) return;
    !function (w, d, t) {
      w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
      ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.load = function (e, n) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = i;
        ttq._t = ttq._t || {}; ttq._t[e] = +new Date;
        ttq._o = ttq._o || {}; ttq._o[e] = n || {};
        var o = document.createElement("script"); o.type = "text/javascript"; o.async = !0; o.src = i + "?sdkid=" + e + "&lib=" + t;
        var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a)
      };
      ttq.load(TIKTOK_PIXEL_ID);
      ttq.page();
    }(window, document, "ttq");
  }

  if (CONSENT_GRANTED) {
    initMeta();
    initGoogle();
    initTikTok();
  }

  // Expose a helper for firing conversion events site-wide, e.g.
  // trackConversion("Lead") on the contact form, or
  // trackConversion("Purchase") on a merch/ticket link.
  window.trackConversion = function (eventName, params) {
    if (window.fbq) window.fbq("track", eventName, params || {});
    if (window.gtag) window.gtag("event", eventName, params || {});
    if (window.ttq) window.ttq.track(eventName, params || {});
  };
})();
