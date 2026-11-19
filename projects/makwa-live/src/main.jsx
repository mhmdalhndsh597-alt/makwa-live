import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// نقطة تشغيل React وعرض خيار التثبيت | React entry point and install affordance
function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState(null);
  const [installed, setInstalled] = useState(false);
  const isAppleMobile = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;

  useEffect(() => {
    const capture = event => { event.preventDefault(); setInstallEvent(event); };
    const done = () => { setInstalled(true); setInstallEvent(null); };
    window.addEventListener('beforeinstallprompt', capture);
    window.addEventListener('appinstalled', done);
    return () => {
      window.removeEventListener('beforeinstallprompt', capture);
      window.removeEventListener('appinstalled', done);
    };
  }, []);

  if (installed || (!installEvent && !isAppleMobile)) return null;
  async function install() {
    if (!installEvent) {
      window.alert('لتثبيت التطبيق على iPhone أو iPad: اضغط مشاركة في Safari ثم «إضافة إلى الشاشة الرئيسية».');
      return;
    }
    await installEvent.prompt();
    const result = await installEvent.userChoice;
    if (result?.outcome === 'accepted') setInstalled(true);
    setInstallEvent(null);
  }
  return <button className="pwa-install" onClick={install} aria-label="تثبيت تطبيق ماكوا لايف">＋ ثبّت ماكوا لايف</button>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /><InstallPrompt /></React.StrictMode>);

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' })
    .then(registration => registration.update())
    .catch(error => console.error('تعذر تسجيل وضع عدم الاتصال', error)));
}
