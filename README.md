# ماكوا لايف | Makwa Live

تطبيق ويب تقدّمي (PWA) لخدمة غسيل وكي الملابس، بواجهة عربية مصرية واتجاه RTL، وتجربة تجريبية تفاعلية للهاتف.

## حالة المشروع

تم تنفيذ واجهة تفاعلية تعمل محليًا داخل المتصفح. الطلبات والتفضيلات والمنشورات التجريبية تُحفظ محليًا على الجهاز؛ لا يوجد حتى الآن خادم إنتاج أو معالجة AI حقيقية أو بوابة دفع.

## دليل الملفات | Project directory index

المشروع وكل ملفاته التطبيقية موجودة داخل `projects/makwa-live/`:

| المسار | عربي: المحتوى | English: contents |
| --- | --- | --- |
| `projects/makwa-live/README.md` | دليل تشغيل وشرح التطبيق | App overview and run instructions |
| `projects/makwa-live/package.json` | اعتماديات وأوامر Vite | Dependencies and Vite scripts |
| `projects/makwa-live/src/main.jsx` | نقطة تشغيل React | React entry point |
| `projects/makwa-live/src/App.jsx` | التبويبات والميزات والحالة التفاعلية | Views, features, and interactive state |
| `projects/makwa-live/src/styles.css` | التصميم المتجاوب وRTL والوضع الليلي | Responsive, RTL, and dark theme styles |
| `projects/makwa-live/public/manifest.webmanifest` | تعريف التثبيت كتطبيق PWA | PWA install metadata |
| `projects/makwa-live/public/sw.js` | تخزين موارد التطبيق الأساسية دون اتصال | Basic offline asset caching |

### فهرس الجذر | Root index

- `README.md` — الفهرس الرئيسي للمشروع بالعربية والإنجليزية | Main bilingual project index.
- `TODO.md`, `WORKLOG.md`, `plan.md` — متطلبات المشروع وخطته وسجل العمل | Requirements, plan, and work log.
- `projects/makwa-live/` — تطبيق React + Tailwind PWA كامل الملفات | Complete React + Tailwind PWA app.

## التشغيل | Run

يتطلب Node.js 18 أو أحدث. من مجلد التطبيق:

```bash
cd projects/makwa-live
npm install
npm run dev
```

لإنشاء نسخة الإنتاج:

```bash
npm run build
npm run preview
```

## الخصوصية والحدود | Privacy and limitations

كل البيانات المعروضة تجريبية. حالة الواجهة تُحفظ في `localStorage` على جهاز المستخدم. رفع الصور محاكاة محلية ولا تُرسل الصور لأي خادم. تقدير الملابس وتصنيف الشكوى ردود تجريبية وليسا خدمات ذكاء اصطناعي. لا تستخدم التطبيق لاستقبال بيانات عملاء حقيقية قبل إضافة خادم آمن ومصادقة وسياسة خصوصية.
