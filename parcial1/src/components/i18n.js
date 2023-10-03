// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Idioma predeterminado
    debug: true,
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false, // No es necesario escapar HTML
    },
  });

export default i18n;
