import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from 'assets/locales/en/translation.json';
import translationRU from 'assets/locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

const getLocale = (locale: string) => {
  return locale.includes('ru') ? 'ru' : 'en';
}

const getInitialLanguage = () => {
  const localStorageLang = localStorage.getItem('locale');
  if (localStorageLang) return getLocale(localStorageLang);
  const userLang = navigator.language || 'en';
  return getLocale(userLang);
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
