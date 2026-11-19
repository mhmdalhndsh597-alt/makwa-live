
## 2026-11-19 — نشر التطبيق على الإنترنت

- فُحصت إعدادات GitHub: المستودع عام، وGitHub Pages مفعّل، والرابط المستهدف هو `https://mhmdalhndsh597-alt.github.io/makwa-live/`.
- تبيّن أن سير العمل الموجود كان يبني الموقع كـJekyll من جذر المستودع، لذلك لم يكن يلتقط الواجهة التي بنيتها داخل `public/`.
- استُبدل سير العمل بنفس المسار ليستخدم `actions/upload-pages-artifact` لرفع `public/` ثم `actions/deploy-pages` لنشره على GitHub Pages.
- أُضيف `public/.nojekyll` حتى تُخدم الملفات الثابتة كما هي.
- بعد رفع التعديل ستُراقب دورة Actions الجديدة، ثم يُختبر الرابط العام وملفات `index.html` و`/api/health` (مسار الصحة يعمل في الحاوية فقط وليس ضمن Pages).
