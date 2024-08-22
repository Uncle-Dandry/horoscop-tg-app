import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang)
  };

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${i18n.language === 'ru' && styles.active}`}
        onClick={handleLanguageChange.bind(null, 'ru')}
      >
        {i18n.t('languageSwitcher.ru')}
      </button>

      <button
        className={`${styles.button} ${i18n.language === 'en' && styles.active}`}
        onClick={handleLanguageChange.bind(null, 'en')}
      >
        {i18n.t('languageSwitcher.en')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
