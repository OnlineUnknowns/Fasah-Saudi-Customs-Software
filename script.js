/* =========================================================
   OWNER SETTINGS — edit only this block.
   - DOWNLOAD_URL: link to your installer (e.g. a GitHub Release asset).
     Every download button on the page reads it from here.
   - VERSION / FILE_SIZE / RELEASE_DATE: shown next to the buttons.
   - SUPPORT_EMAIL: used for the support mailto link in the FAQ.
   ========================================================= */
const CONFIG = {
  DOWNLOAD_URL: "https://github.com/YOUR-USER/YOUR-REPO/releases/latest/download/FasahClearance-Setup.exe",
  VERSION: "1.0.0",
  FILE_SIZE: "XX MB",
  RELEASE_DATE: "Month YYYY",
  SUPPORT_EMAIL: "support@example.com",
  WHATSAPP_URL: "https://wa.me/201286669272",
  TELEGRAM_URL: "https://t.me/iqrouter"
};

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  /* ---------- Translations (English default, Arabic) ---------- */
  var I18N = {
    en: {
      "meta.title": "Fasah Clearance Platform — Customs clearance operations on your Windows desktop",
      "skip": "Skip to content",
      "nav.aria": "Main navigation",
      "lang.aria": "Language",
      "menu.aria": "Open or close menu",
      "foot.aria": "Footer",
      "nav.features": "Features",
      "nav.how": "How it works",
      "nav.security": "Security",
      "nav.download": "Download",
      "nav.faq": "FAQ",
      "btn.download": "Download for Windows",
      "bar.meta": "v{version} · {size}",

      "hero.title": "Automate customs clearance operations from one desktop app",
      "hero.sub": "Fasah Clearance Platform brings your broker accounts, declarations, documents, alerts and integrations for Saudi customs platforms together in one Windows application.",
      "hero.explore": "Explore features",
      "hero.meta": "Windows 10 / 11 · 64-bit · v{version}",

      "mk.nav1": "Dashboard", "mk.nav2": "Accounts", "mk.nav3": "Declarations",
      "mk.nav4": "Documents", "mk.nav5": "Alerts", "mk.nav6": "Integrations",
      "mk.k1": "Active declarations", "mk.k2": "Under inspection", "mk.k3": "Cleared", "mk.k4": "Open objections",
      "mk.th1": "Declaration", "mk.th2": "Port", "mk.th3": "Status",
      "mk.p1": "Jeddah", "mk.p2": "Dammam", "mk.p3": "Riyadh",
      "mk.s1": "Cleared", "mk.s2": "Under inspection", "mk.s3": "Submitted",
      "mk.rate": "API rate limit", "mk.rate2": "Retry-After respected",
      "mk.caption": "Illustrative interface",

      "trust.1": "Encrypted credential vault",
      "trust.2": "Runs locally on your PC",
      "trust.3": "No admin rights required",
      "trust.4": "Windows 10 / 11",

      "f.title": "Everything for clearance, in one place",
      "f.sub": "Six modules that cover the daily work of a customs broker.",
      "f1.t": "Accounts & Security",
      "f1.b1": "Multiple broker accounts in one place",
      "f1.b2": "Credentials encrypted with Windows DPAPI and AES-256-GCM",
      "f1.b3": "Per-account proxy settings",
      "f1.b4": "Session handling with CAPTCHA and 2FA OTP prompts when the platform asks for them",
      "f2.t": "Customs Declarations",
      "f2.b1": "Bayan declaration lifecycle: Draft, Submitted, Manifest Linked, Under Inspection, Cleared",
      "f2.b2": "Green, yellow and red lane indicators",
      "f2.b3": "Customs objections with tracking",
      "f2.b4": "Port inspection appointment slots",
      "f3.t": "Documents & OCR",
      "f3.b1": "Upload commercial invoices, bills of lading, SABER certificates, certificates of origin and packing lists",
      "f3.b2": "OCR extraction for Arabic and English documents",
      "f3.b3": "Extracted data preview linked to declarations",
      "f4.t": "Tracking & Alerts",
      "f4.b1": "Clearance lane monitor",
      "f4.b2": "Alert channels: Telegram, WhatsApp, SMS and Email",
      "f4.b3": "Delivery log",
      "f4.b4": "Background monitoring",
      "f5.t": "API & ERP Integrations",
      "f5.b1": "Gateway token management and renewal",
      "f5.b2": "Connectors for SAP S/4HANA, Odoo and a custom WMS webhook",
      "f5.b3": "Smart rate limiting with Retry-After handling, exponential backoff and jitter",
      "f6.t": "Customs Tools",
      "f6.b1": "Landed-cost calculator with CIF valuation and duty brackets",
      "f6.b2": "15% VAT and multi-currency support",
      "f6.b3": "HS code fuzzy search",
      "f6.b4": "SABER / SASO and SFDA requirement tags",
      "c1.t": "Recycle Bin", "c1.d": "Restore anything you delete.",
      "c2.t": "Activity logs", "c2.d": "Filterable audit trail with JSON export.",
      "c3.t": "Bilingual-ready interface", "c3.d": "Built to work in English and Arabic.",

      "how.title": "How it works",
      "how.sub": "Three steps from download to daily use.",
      "how.1t": "Install",
      "how.1d": "Download the installer and run it. No administrator rights are needed.",
      "how.2t": "Link your broker accounts securely",
      "how.2d": "Add your accounts. Credentials are encrypted on your PC.",
      "how.3t": "Monitor and manage clearance",
      "how.3d": "Follow declarations, documents and alerts from one dashboard.",

      "sec.title": "Designed to keep your data on your PC",
      "sec.p1": "Fasah Clearance Platform follows a local-first design. Your accounts, declarations and documents are handled on your own computer.",
      "sec.p2": "Credentials are protected with Windows DPAPI and AES-256-GCM encryption, and the app is designed not to send your data to third parties by itself.",
      "sec.note": "Alert channels you turn on, such as Telegram or Email, deliver messages through those services.",
      "sec.l1t": "Encrypted credential vault",
      "sec.l1d": "DPAPI and AES-256-GCM protect stored credentials.",
      "sec.l2t": "Local-first design",
      "sec.l2d": "The application runs on your PC, not on a hosted service.",
      "sec.l3t": "Privacy by design",
      "sec.l3d": "No tracking or third-party data sharing is built into the app.",
      "sec.l4t": "Rate-limit protection",
      "sec.l4d": "Retry-After handling, exponential backoff and jitter help keep requests within platform limits.",

      "dl.title": "Download Fasah Clearance Platform",
      "dl.sub": "Get the Windows installer and start in a few minutes.",
      "dl.version": "Version", "dl.size": "File size", "dl.date": "Release date",
      "dl.reqtitle": "System requirements",
      "dl.r1": "Windows 10 or 11, 64-bit",
      "dl.r2": "About 500 MB of free disk space",
      "dl.r3": "Internet connection",
      "dl.r4": "No administrator rights needed",
      "dl.note": "Windows SmartScreen may show a warning for new or unsigned apps. Choose \"More info\", then \"Run anyway\" if you downloaded this file from this page.",

      "faq.title": "Frequently asked questions",
      "faq.q1": "What is Fasah Clearance Platform?",
      "faq.a1": "A Windows desktop application that helps customs brokers manage accounts, declarations, documents, alerts and integrations for Saudi customs platforms from one place.",
      "faq.q2": "Which Windows versions are supported?",
      "faq.a2": "Windows 10 and Windows 11, 64-bit.",
      "faq.q3": "Is my data stored locally?",
      "faq.a3": "The app follows a local-first design, so your data is kept on your PC. Credentials are encrypted with Windows DPAPI and AES-256-GCM.",
      "faq.q4": "Do I need administrator rights?",
      "faq.a4": "No. The app is designed to install and run without administrator rights.",
      "faq.q5": "How do I update?",
      "faq.a5": "Download the newest installer from this page and run it. Compare the version shown here with the one you have installed.",
      "faq.q6": "How do I get support?",
      "faq.a6": "Send us an email, describe the issue and include your app version:",

      "foot.desc": "A Windows desktop application for managing customs clearance operations.",
      "foot.contact": "Direct Support",
      "contact.whatsapp": "WhatsApp",
      "contact.telegram": "Telegram",
      "foot.copy": "© {year} Fasah Clearance Platform",
      "foot.disc": "Fasah Clearance Platform is an independent desktop application. It is not affiliated with, endorsed by, or sponsored by the Zakat, Tax and Customs Authority (ZATCA) or any government entity. Product names are used for identification only."
    },

    ar: {
      "meta.title": "Fasah Clearance Platform — إدارة أعمال التخليص الجمركي على سطح مكتب ويندوز",
      "skip": "انتقل إلى المحتوى",
      "nav.aria": "التنقل الرئيسي",
      "lang.aria": "اللغة",
      "menu.aria": "فتح القائمة أو إغلاقها",
      "foot.aria": "روابط التذييل",
      "nav.features": "الميزات",
      "nav.how": "كيف يعمل",
      "nav.security": "الأمان",
      "nav.download": "التنزيل",
      "nav.faq": "الأسئلة الشائعة",
      "btn.download": "تنزيل لنظام ويندوز",
      "bar.meta": "الإصدار {version} · {size}",

      "hero.title": "أتمتة أعمال التخليص الجمركي من تطبيق واحد على سطح المكتب",
      "hero.sub": "يجمع Fasah Clearance Platform حسابات المخلصين والبيانات الجمركية والمستندات والتنبيهات والتكاملات الخاصة بمنصات الجمارك السعودية في تطبيق واحد لنظام ويندوز.",
      "hero.explore": "استعرض الميزات",
      "hero.meta": "ويندوز 10 / 11 · 64 بت · الإصدار {version}",

      "mk.nav1": "لوحة التحكم", "mk.nav2": "الحسابات", "mk.nav3": "البيانات الجمركية",
      "mk.nav4": "المستندات", "mk.nav5": "التنبيهات", "mk.nav6": "التكاملات",
      "mk.k1": "بيانات نشطة", "mk.k2": "قيد الفحص", "mk.k3": "تم التخليص", "mk.k4": "اعتراضات مفتوحة",
      "mk.th1": "البيان", "mk.th2": "الميناء", "mk.th3": "الحالة",
      "mk.p1": "جدة", "mk.p2": "الدمام", "mk.p3": "الرياض",
      "mk.s1": "تم التخليص", "mk.s2": "قيد الفحص", "mk.s3": "مُقدَّم",
      "mk.rate": "حد الطلبات", "mk.rate2": "مراعاة Retry-After",
      "mk.caption": "واجهة توضيحية",

      "trust.1": "مخزن اعتمادات مشفّر",
      "trust.2": "يعمل محليًا على جهازك",
      "trust.3": "لا يتطلب صلاحيات المسؤول",
      "trust.4": "ويندوز 10 / 11",

      "f.title": "كل ما يلزم للتخليص في مكان واحد",
      "f.sub": "ست وحدات تغطي العمل اليومي للمخلص الجمركي.",
      "f1.t": "الحسابات والأمان",
      "f1.b1": "عدة حسابات للمخلصين في مكان واحد",
      "f1.b2": "تشفير بيانات الدخول باستخدام Windows DPAPI وAES-256-GCM",
      "f1.b3": "إعدادات وكيل (Proxy) لكل حساب",
      "f1.b4": "إدارة الجلسات مع طلبات CAPTCHA ورمز التحقق 2FA عندما تطلبها المنصة",
      "f2.t": "البيانات الجمركية",
      "f2.b1": "دورة حياة بيان الاستيراد (بيان): مسودة، مُقدَّم، مرتبط بالمانيفست، قيد الفحص، تم التخليص",
      "f2.b2": "مؤشرات المسارات الخضراء والصفراء والحمراء",
      "f2.b3": "الاعتراضات الجمركية مع تتبعها",
      "f2.b4": "مواعيد الفحص في الموانئ",
      "f3.t": "المستندات والتعرّف الضوئي (OCR)",
      "f3.b1": "رفع الفواتير التجارية وبوالص الشحن وشهادات سابر وشهادات المنشأ وقوائم التعبئة",
      "f3.b2": "استخراج البيانات بتقنية OCR من المستندات العربية والإنجليزية",
      "f3.b3": "معاينة البيانات المستخرجة مرتبطة بالبيانات الجمركية",
      "f4.t": "التتبع والتنبيهات",
      "f4.b1": "مراقبة مسار التخليص",
      "f4.b2": "قنوات التنبيه: تيليجرام وواتساب والرسائل النصية والبريد الإلكتروني",
      "f4.b3": "سجل التسليم",
      "f4.b4": "المراقبة في الخلفية",
      "f5.t": "تكاملات API وأنظمة ERP",
      "f5.b1": "إدارة رموز البوابة وتجديدها",
      "f5.b2": "موصّلات لـ SAP S/4HANA وOdoo وWebhook مخصص لنظام WMS",
      "f5.b3": "تحديد ذكي لمعدل الطلبات مع معالجة Retry-After والتراجع الأسي والتشويش العشوائي (Jitter)",
      "f6.t": "أدوات جمركية",
      "f6.b1": "حاسبة التكلفة الواصلة مع التقييم على أساس CIF وشرائح الرسوم الجمركية",
      "f6.b2": "ضريبة القيمة المضافة 15% ودعم عدة عملات",
      "f6.b3": "بحث تقريبي برموز النظام المنسق (HS)",
      "f6.b4": "وسوم متطلبات سابر / سأسو وهيئة الغذاء والدواء",
      "c1.t": "سلة المحذوفات", "c1.d": "استعد أي عنصر قمت بحذفه.",
      "c2.t": "سجلات النشاط", "c2.d": "سجل تدقيق قابل للتصفية مع تصدير بصيغة JSON.",
      "c3.t": "واجهة ثنائية اللغة", "c3.d": "مصممة للعمل بالعربية والإنجليزية.",

      "how.title": "كيف يعمل",
      "how.sub": "ثلاث خطوات من التنزيل إلى الاستخدام اليومي.",
      "how.1t": "التثبيت",
      "how.1d": "نزّل ملف التثبيت وشغّله. لا حاجة إلى صلاحيات المسؤول.",
      "how.2t": "اربط حسابات المخلصين بأمان",
      "how.2d": "أضف حساباتك. تُشفَّر بيانات الدخول على جهازك.",
      "how.3t": "تابع التخليص وأدِره",
      "how.3d": "تابع البيانات الجمركية والمستندات والتنبيهات من لوحة واحدة.",

      "sec.title": "مصمَّم لإبقاء بياناتك على جهازك",
      "sec.p1": "يعتمد Fasah Clearance Platform تصميمًا محليًا أولًا. تتم معالجة حساباتك وبياناتك الجمركية ومستنداتك على حاسوبك الشخصي.",
      "sec.p2": "تُحمى بيانات الدخول بتشفير Windows DPAPI وAES-256-GCM، وقد صُمم التطبيق بحيث لا يرسل بياناتك إلى أطراف ثالثة من تلقاء نفسه.",
      "sec.note": "قنوات التنبيه التي تفعّلها، مثل تيليجرام أو البريد الإلكتروني، ترسل الرسائل عبر تلك الخدمات.",
      "sec.l1t": "مخزن اعتمادات مشفّر",
      "sec.l1d": "يحمي DPAPI وAES-256-GCM بيانات الدخول المخزّنة.",
      "sec.l2t": "تصميم محلي أولًا",
      "sec.l2d": "يعمل التطبيق على جهازك وليس على خدمة مستضافة.",
      "sec.l3t": "الخصوصية بالتصميم",
      "sec.l3d": "لا يتضمن التطبيق أي تتبّع أو مشاركة للبيانات مع أطراف ثالثة.",
      "sec.l4t": "حماية من تجاوز حدود الطلبات",
      "sec.l4d": "تساعد معالجة Retry-After والتراجع الأسي والتشويش العشوائي على إبقاء الطلبات ضمن حدود المنصة.",

      "dl.title": "نزّل Fasah Clearance Platform",
      "dl.sub": "احصل على ملف التثبيت لنظام ويندوز وابدأ خلال دقائق.",
      "dl.version": "الإصدار", "dl.size": "حجم الملف", "dl.date": "تاريخ الإصدار",
      "dl.reqtitle": "متطلبات النظام",
      "dl.r1": "ويندوز 10 أو 11، نظام 64 بت",
      "dl.r2": "نحو 500 ميجابايت من المساحة الحرة على القرص",
      "dl.r3": "اتصال بالإنترنت",
      "dl.r4": "لا حاجة إلى صلاحيات المسؤول",
      "dl.note": "قد يعرض Windows SmartScreen تحذيرًا للتطبيقات الجديدة أو غير الموقّعة. اختر «مزيد من المعلومات» ثم «تشغيل على أي حال» إذا كنت قد نزّلت هذا الملف من هذه الصفحة.",

      "faq.title": "الأسئلة الشائعة",
      "faq.q1": "ما هو Fasah Clearance Platform؟",
      "faq.a1": "تطبيق لسطح مكتب ويندوز يساعد المخلصين الجمركيين على إدارة الحسابات والبيانات الجمركية والمستندات والتنبيهات والتكاملات الخاصة بمنصات الجمارك السعودية من مكان واحد.",
      "faq.q2": "ما إصدارات ويندوز المدعومة؟",
      "faq.a2": "ويندوز 10 وويندوز 11، نظام 64 بت.",
      "faq.q3": "هل تُخزَّن بياناتي محليًا؟",
      "faq.a3": "يعتمد التطبيق تصميمًا محليًا أولًا، لذلك تبقى بياناتك على جهازك. وتُشفَّر بيانات الدخول باستخدام Windows DPAPI وAES-256-GCM.",
      "faq.q4": "هل أحتاج إلى صلاحيات المسؤول؟",
      "faq.a4": "لا. صُمم التطبيق ليُثبَّت ويعمل دون صلاحيات المسؤول.",
      "faq.q5": "كيف أقوم بالتحديث؟",
      "faq.a5": "نزّل أحدث ملف تثبيت من هذه الصفحة وشغّله. قارن الإصدار المعروض هنا بالإصدار المثبّت لديك.",
      "faq.q6": "كيف أحصل على الدعم؟",
      "faq.a6": "راسلنا عبر البريد الإلكتروني، واشرح المشكلة، واذكر إصدار التطبيق لديك:",

      "foot.desc": "تطبيق لسطح مكتب ويندوز لإدارة أعمال التخليص الجمركي.",
      "foot.contact": "الدعم الفني المباشر",
      "contact.whatsapp": "واتساب",
      "contact.telegram": "تلجرام",
      "foot.copy": "© {year} Fasah Clearance Platform",
      "foot.disc": "Fasah Clearance Platform تطبيق مستقل لسطح المكتب، وهو غير تابع لهيئة الزكاة والضريبة والجمارك (ZATCA) أو أي جهة حكومية، ولا تؤيده أو ترعاه. أسماء المنتجات مذكورة لأغراض التعريف فقط."
    }
  };

  var STORAGE_KEY = "fasah-lang";
  var currentLang = "en";

  /* ---------- Helpers ---------- */
  function isolate(v) { return "\u2066" + v + "\u2069"; } // keep Latin values readable inside Arabic text

  function format(str) {
    return str
      .replace("{version}", isolate(CONFIG.VERSION))
      .replace("{size}", isolate(CONFIG.FILE_SIZE))
      .replace("{year}", String(new Date().getFullYear()));
  }

  function translate(key) {
    var dict = I18N[currentLang] || I18N.en;
    var value = dict[key];
    if (value === undefined) { value = I18N.en[key]; }
    return value === undefined ? "" : format(value);
  }

  function readLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      return saved === "ar" ? "ar" : "en";
    } catch (e) { return "en"; }
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  /* ---------- Language switcher ---------- */
  function applyLanguage(lang) {
    currentLang = lang === "ar" ? "ar" : "en";
    root.lang = currentLang;
    root.dir = currentLang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = translate(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", translate(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === currentLang));
    });
    document.title = translate("meta.title");
    saveLang(currentLang);
  }

  /* ---------- Config wiring: download buttons, meta values, support link ---------- */
  function wireConfig() {
    document.querySelectorAll("[data-download]").forEach(function (a) {
      a.setAttribute("href", CONFIG.DOWNLOAD_URL);
      a.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-config]").forEach(function (el) {
      var key = el.getAttribute("data-config");
      if (CONFIG[key] !== undefined) { el.textContent = CONFIG[key]; }
    });
    document.querySelectorAll("[data-support]").forEach(function (a) {
      a.setAttribute("href", "mailto:" + CONFIG.SUPPORT_EMAIL);
      a.textContent = CONFIG.SUPPORT_EMAIL;
    });
    document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
      a.setAttribute("href", CONFIG.WHATSAPP_URL);
    });
    document.querySelectorAll("[data-telegram]").forEach(function (a) {
      a.setAttribute("href", CONFIG.TELEGRAM_URL);
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    if (!menuBtn || !nav) { return; }
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }

  /* ---------- Smooth scroll with sticky header offset ---------- */
  function headerHeight() {
    var header = document.querySelector(".site-header");
    return header ? header.offsetHeight : 0;
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function onAnchorClick(e) {
    var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!link || link.hasAttribute("data-download")) { return; }
    var id = link.getAttribute("href");
    if (id.length < 2) { return; }
    var target = document.getElementById(id.slice(1));
    if (!target) { return; }
    e.preventDefault();
    setMenu(false);
    var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight() - 8;
    window.scrollTo({ top: id === "#top" ? 0 : top, behavior: reducedMotion() ? "auto" : "smooth" });
    if (history.pushState) { history.pushState(null, "", id); }
  }

  /* ---------- Reveal on scroll + active nav ---------- */
  function setupObservers() {
    var reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("in"); });
      return;
    }

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { revealObserver.observe(el); });

    var links = document.querySelectorAll(".nav-link");
    var sections = [];
    links.forEach(function (link) {
      var s = document.getElementById(link.getAttribute("href").slice(1));
      if (s) { sections.push(s); }
    });

    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        links.forEach(function (link) {
          var on = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("active", on);
          if (on) { link.setAttribute("aria-current", "true"); } else { link.removeAttribute("aria-current"); }
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ---------- FAQ accordion ---------- */
  function setupFaq() {
    document.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!open));
        if (panel) { panel.hidden = open; }
      });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    wireConfig();
    applyLanguage(readLang());

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { applyLanguage(btn.getAttribute("data-lang")); });
    });
    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
      });
    }
    document.addEventListener("click", onAnchorClick);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { setMenu(false); }
    });

    setupFaq();
    setupObservers();
  }

  init();
})();
