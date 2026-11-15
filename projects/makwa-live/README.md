# ماكوا لايف | Makwa Live

واجهة PWA تجريبية لخدمة غسيل وكي مصرية. الواجهة باللهجة المصرية الحديثة، RTL بالكامل، وتدعم الهاتف والوضع الفاتح/الداكن. البيانات والصور المرفوعة محلية وتجريبية فقط.

## التشغيل

يتطلب Node.js 18+:

```bash
npm install
npm run dev
```

ثم افتح رابط Vite المحلي. للبناء: `npm run build`، وللمعاينة: `npm run preview`.

## أهم الوظائف

- تبويبات الرئيسية والعروض والطلب وطلباتي والشكاوى، مع وضع الإدارة.
- إضافة/حذف قطع وحساب خصومات الكمية وتطبيق عروض المنشورات.
- قصص بعرض كامل، إعجاب ومشاركة، تقدير تجريبي للصور، وإنشاء طلب وشكوى.
- تحديث مراحل الطلب، إجابات إدارية للشكاوى، وتخصيص نسب الخصم.
- حفظ البيانات محليًا عبر `localStorage` وإمكانية تثبيت PWA مع تخزين أساسي دون اتصال.

## English

A mobile-first Egyptian Arabic RTL laundry-service PWA demo. It includes interactive Home, Offers, Order, Orders, Complaints, and Admin views. Demo state is saved in browser `localStorage`; image estimation and complaint classification are simulations, not real AI or server-backed services.
