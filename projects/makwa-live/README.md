# ماكوا لايف | Makwa Live

تطبيق ويب تقدّمي تجريبي لخدمة غسيل وكي مصرية، بواجهة عربية RTL. الواجهة تحفظ حالة الطلبات والمنشورات والقصص والشكاوى والإعدادات على الجهاز باستخدام `localStorage`.

## التشغيل

يتطلب Node.js 18+:

```bash
npm install
npm run dev
```

لبناء نسخة الإنتاج والتحقق منها: `npm run build`، ثم `npm run preview` لمعاينتها.

## بيانات واتساب

رقم واتساب الرسمي غير مضمّن عمدًا. افتح **وضع الإدارة** وأضف الرقم بصيغته الدولية، أرقام فقط (مثل `201XXXXXXXXX`). رابط واتساب يفتح رسالة جاهزة؛ التطبيق لا يرسل الرسائل نيابةً عن العميل. يجب على العميل الضغط على إرسال. شكوى الصورة تُرفق يدويًا في المحادثة بعد فتح واتساب.

## الفواتير والمدفوعات

الفاتورة ملخص محلي غير ضريبي، تعرض القطع والخصم ورسوم التوصيل وطريقة الدفع. خيارات الدفع الظاهرة اختيارية وليست بوابة دفع أو تحققًا من تحويل فعلي. رسوم التوصيل الافتراضية ٢٥ ج.م ويمكن تعديلها من الإدارة.

## PWA وحدود الإنتاج

ملف manifest وأيقونة SVG وService Worker يوفّرون تثبيتًا وتخزينًا أساسيًا للواجهة. نشر التطبيق يتطلب HTTPS. التثبيت على iOS يتم عبر Safari > مشاركة > إضافة إلى الشاشة الرئيسية؛ دعم أيقونات SVG قد يختلف باختلاف إصدار النظام. البيانات محلية لهذا المتصفح والجهاز فقط وليست مزامنة بين الأجهزة أو خدمة نسخ احتياطي. رفع الصور محلي، والتقدير وتصنيف الشكاوى تجريبيان. لا يوجد خادم إنتاج أو مصادقة أو دفع إلكتروني، لذلك يلزم تطوير هذه الأجزاء ومراجعتها قبل استقبال بيانات أو طلبات حقيقية.

## English

A local-first Egyptian Arabic RTL laundry PWA demo. Orders, stories, offers, complaints, and settings persist in browser localStorage. WhatsApp requires the real business number to be configured in Admin; users review and send the generated message themselves. Invoices are informational only, payment methods are selections rather than payment processing, and demo AI is not real. Deploy over HTTPS for service-worker/PWA support.
