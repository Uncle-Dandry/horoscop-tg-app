import {
  type FC,
  useState,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

import { API_URL } from 'constants/main';

import {
  GlassSpinner,
  Horoscope,
  LanguageSwitcher,
  ZodiacDetails,
} from 'components';

import './i18n';

import styles from './App.module.css';

const App: FC = () => {
  const { i18n } = useTranslation();

  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const userLang = navigator.language || 'en';
      i18n.changeLanguage(userLang.includes('ru') ? 'ru' : 'en');
    },
    [i18n],
  );

  useEffect(
    () => {
      (async () => {
        if (selectedZodiac) {
          setLoading(true);

          try {
            const response = await fetch(`${API_URL}/get_horoscope/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                selectedZodiac,
                language: i18n.language === 'ru'
                  ? 'original'
                  : 'translated',
                period: 'today',
              }),
            });
      
            const data = await response.json();
            setDescription(data.horoscope[selectedZodiac] || data.horoscope);
          } catch (error) {
            console.error('Error fetching horoscope data:', error);
          } finally {
            setLoading(false);
          }
        }
      })();
    },
    [i18n.language, selectedZodiac],
  );

  const handleSelectZodiac = (sign: string) => {
    setSelectedZodiac(sign);
  };

  const handleBack = () => {
    setSelectedZodiac(null);
    setDescription(null);
    // window.history.back();
  };

  return (
    <div className={styles.app}>
      <LanguageSwitcher />
      
      {loading ? (
        <GlassSpinner />
      ) : (
        !description || !selectedZodiac ? (
          <Horoscope onSelect={handleSelectZodiac} />
        ) : (
          <ZodiacDetails
            sign={selectedZodiac}
            description={description}
            onBack={handleBack}
          />
        )
      )}
    </div>
  );
}

export default App;
