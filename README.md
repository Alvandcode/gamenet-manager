# GameNet Manager

[![Stars](https://img.shields.io/github/stars/Alvandcode/gamenet-manager?style=flat-square)](https://github.com/Alvandcode/gamenet-manager/stargazers) [![License](https://img.shields.io/github/license/Alvandcode/gamenet-manager?style=flat-square)](./LICENSE) [![Last commit](https://img.shields.io/github/last-commit/Alvandcode/gamenet-manager?style=flat-square)](https://github.com/Alvandcode/gamenet-manager/commits)

> Android management app for game centers — devices, customers, timers, billing and extra services, phone/tablet friendly.

<div dir="rtl">

## اپ مدیریت گیم‌نت

اپلیکیشن اندرویدی مدیریت گیم‌نت؛ مدیریت دستگاه‌ها و مشتریان، زمان‌سنجی، محاسبه هزینه و خدمات جانبی، مناسب موبایل و تبلت.

</div>

---

# 🎮 GameNet Manager

**GameNet Manager** یک اپلیکیشن مدیریت گیم‌نت برای **Android** است که با هدف ساده‌تر کردن مدیریت دستگاه‌ها، کاربران، زمان استفاده و هزینه‌ها طراحی شده است.

> 📱 این پروژه در حال حاضر **فقط نسخه Android** دارد و نسخه Windows برای آن ارائه نشده است.

---

## ✨ امکانات

* 🎮 مدیریت دستگاه‌های گیم‌نت
* ▶️ شروع و پایان استفاده از دستگاه
* 👤 مدیریت کاربران و مهمان‌ها
* 👥 تعیین تعداد افراد استفاده‌کننده
* 💰 محاسبه هزینه استفاده
* ⏱️ مدیریت زمان استفاده
* 💵 تعیین قیمت بر اساس ساعت، روز یا دستگاه
* 🧾 ثبت و مدیریت هزینه‌ها
* 🛍️ ثبت خدمات جانبی
* ⚙️ تنظیم قیمت‌ها و خدمات
* 📊 مدیریت اطلاعات مربوط به جلسات استفاده
* 📱 رابط کاربری مناسب برای استفاده روی گوشی و تبلت Android

---

## 📱 پلتفرم

| Platform | وضعیت   |
| -------- | ------- |
| Android  | ✅ موجود |
| Windows  | ❌ ندارد |
| Linux    | ❌ ندارد |
| macOS    | ❌ ندارد |
| iOS      | ❌ ندارد |

---

## 🎯 هدف پروژه

هدف GameNet Manager ایجاد یک ابزار ساده، سریع و کاربردی برای مدیریت گیم‌نت‌ها و مراکز بازی است؛ به‌خصوص برای مدیریت دستگاه‌ها، زمان استفاده مشتریان و محاسبه هزینه‌ها بدون نیاز به سیستم‌های پیچیده.

---

## 🛠️ وضعیت پروژه

این پروژه در حال توسعه است و ممکن است برخی قابلیت‌ها در نسخه‌های آینده تغییر کنند یا امکانات جدیدی به آن اضافه شوند.

### Roadmap

* [ ] بهبود رابط کاربری
* [ ] گزارش‌گیری پیشرفته
* [ ] تاریخچه تراکنش‌ها
* [ ] پشتیبان‌گیری از اطلاعات
* [ ] بازیابی اطلاعات
* [ ] مدیریت چندین شعبه
* [ ] امکانات آماری و مالی پیشرفته
* [ ] بهبود سیستم مدیریت خدمات
* [ ] انتشار نسخه‌های پایدار Android

---

## 🚀 نصب

این پروژه **Cordova** است (نگاه کنید به `config.xml` و `www/index.html`)؛ خروجی اندروید از وب‌اپ داخل `www/` ساخته می‌شود.

### روش ۱ — نصب آماده (پیشنهادی)

فایل `app-debug.apk` در بخش [Releases](https://github.com/Alvandcode/gamenet-manager/releases) موجود است (ساخته‌شده خودکار با GitHub Actions)؛ دانلود و روی گوشی نصب کنید.

### روش ۲ — بیلد از سورس

پیش‌نیازها: **Node.js** (همراه npm)، **JDK 17** و **Gradle**، و **Android SDK** (همراه platform-tools).

```bash
git clone https://github.com/Alvandcode/gamenet-manager.git
cd gamenet-manager

npm install -g cordova

cordova platform add android

# اجرا روی دستگاه/شبیه‌ساز:
cordova run android

# یا فقط بیلد APK دیباگ:
cordova build android
# خروجی: platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

> نکته: فیلد `scripts` در `package.json` خالی است، پس دستورهای `cordova` را مستقیم اجرا کنید (اسکریپت npm میانی وجود ندارد).

---

## 📦 ساخت پروژه

برای توسعه یا بیلد محلی، مخزن را Clone کنید و طبق بخش «نصب» پیش‌نیازها (Node، JDK/Gradle، Android SDK) را آماده کنید؛ سپس با `cordova platform add android` و `cordova build android` خروجی بگیرید. بیلد خودکار CI هم روی هر push به `main` اجرا می‌شود (نگاه کنید به `.github/workflows/build-android.yml`) و APK را در Releases منتشر می‌کند.

---

## 🤝 مشارکت

مشارکت در توسعه پروژه آزاد است.

اگر ایده‌ای برای بهبود برنامه دارید یا با مشکلی مواجه شدید:

1. ابتدا Issues را بررسی کنید.
2. در صورت وجود نداشتن Issue مشابه، یک Issue جدید ایجاد کنید.
3. برای تغییرات بزرگ، بهتر است ابتدا درباره آن با توسعه‌دهنده پروژه هماهنگ شود.

Pull Requestهای مرتبط با بهبود عملکرد، رفع باگ، افزایش امنیت و بهبود تجربه کاربری استقبال می‌شوند.

---

## 🐛 گزارش باگ

در صورت مشاهده مشکل، لطفاً یک Issue ایجاد کنید و تا حد امکان موارد زیر را ذکر کنید:

* مدل دستگاه Android
* نسخه Android
* نسخه برنامه
* شرح دقیق مشکل
* مراحل بازتولید مشکل
* Screenshot یا Log در صورت امکان

---

## 🔐 امنیت

اگر یک آسیب‌پذیری امنیتی پیدا کردید، لطفاً جزئیات آن را به‌صورت عمومی در Issue منتشر نکنید و از روش ارتباطی مناسب با صاحب پروژه برای گزارش خصوصی آن استفاده کنید.

---

## 📄 License

این پروژه تحت **Alvand Non-Commercial Source License (ANCSL) 1.0** منتشر شده است.

استفاده، مشاهده و مطالعه کد منبع برای اهداف شخصی و غیرتجاری مجاز است؛ اما استفاده تجاری، فروش، انتشار نسخه تغییر‌یافته یا استفاده از بخش‌های پروژه در محصولات تجاری بدون اجازه صاحب پروژه مجاز نیست.

برای جزئیات کامل، فایل [`LICENSE`](LICENSE) را مطالعه کنید.

---

## 👨‍💻 Developer

**Alvandcode**

GitHub:
https://github.com/Alvandcode

---

## ⭐ حمایت از پروژه

اگر این پروژه برای شما مفید است، با ⭐ دادن به Repository در GitHub از توسعه آن حمایت کنید.

**GameNet Manager — ساده‌تر، سریع‌تر و حرفه‌ای‌تر مدیریت کنید.** 🎮

---

## Contributing / مشارکت

- EN: Issues and Pull Requests are welcome. Please see `CONTRIBUTING.md`.
- FA: برای گزارش مشکل یا پیشنهاد قابلیت جدید، لطفا ایشو یا پول‌ریکوئست ثبت کنید.

## License / لایسنس

لایسنس: ANCSL 1.0 غیرتجاری (متن کامل در LICENSE) — see [LICENSE](./LICENSE).

## Contact / ارتباط

- Telegram: https://t.me/a_c_official
- Website: https://alvandcode.github.io
