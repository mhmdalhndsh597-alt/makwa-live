# ماكوا لايف | Makwa Live

تطبيق ويب تقدّمي تجريبي لخدمة غسيل وكي مصرية، بواجهة عربية RTL. تحفظ الواجهة الطلبات والمنشورات والقصص والشكاوى والإعدادات على الجهاز باستخدام `localStorage`.

## التشغيل والبناء

يتطلب Node.js 18+:

```bash
npm install
npm run dev
```

لبناء نسخة الإنتاج والتحقق منها: `npm run build`، ثم `npm run preview` لمعاينتها.

## تثبيت PWA

يظهر زر التثبيت عندما يدعم المتصفح التثبيت المباشر. على iPhone/iPad افتح الموقع في Safari، واضغط **مشاركة** ثم **إضافة إلى الشاشة الرئيسية**. يحتاج Service Worker إلى HTTPS (أو localhost للتطوير). ألوان شاشة البداية يحددها النظام من manifest؛ لا توجد حاليًا صور splash مخصصة متعددة المقاسات.

## بيانات واتساب

رقم واتساب الرسمي غير مضمّن. افتح **وضع الإدارة** وأضف الرقم بصيغته الدولية، أرقام فقط (مثل `201XXXXXXXXX`). التطبيق يفتح رسالة جاهزة؛ العميل يراجعها ويضغط إرسال بنفسه. صور الشكوى تحتاج إلى إرفاق يدوي داخل واتساب.

## حدود مهمة قبل الإطلاق الحقيقي

هذا إصدار واجهة تجريبي وليس منصة جاهزة لاستقبال طلبات حقيقية: `localStorage` خاص بمتصفح وجهاز واحد ولا يوفر قاعدة بيانات أو نسخًا احتياطيًا أو تزامنًا؛ وضع الإدارة ليس محميًا بتسجيل دخول؛ لا يوجد خادم لمعالجة الطلبات أو التحقق من التحويلات؛ خيارات الدفع والفواتير معلوماتية وليست بوابة دفع/فواتير ضريبية؛ وظائف AI محاكاة؛ الصور تُخزن على الجهاز. يلزم بناء backend آمن، مصادقة وصلاحيات، تخزين بيانات وصور، سياسة خصوصية، واختبار نشر قبل الإطلاق التجاري.

## English

A mobile-first Egyptian Arabic RTL PWA demo. Local browser storage is not a shared production database. WhatsApp links open a prefilled message for the user to send. Payment options are selections only, invoices are informational, and demo AI is not real. Admin mode has no authentication; do not use this build to accept real customer data or payments until a secure backend and operational controls are implemented and tested.
