import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from 'assets/locales/en/translation.json';
import translationRU from 'assets/locales/ru/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
