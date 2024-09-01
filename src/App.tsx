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

          const url = `${API_URL}/get_horoscope/${selectedZodiac}/today/general/${
            i18n.language === 'ru'
              ? 'en'
              : 'en'
          }`;

          try {
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': '0be3be10e5msh3a847340d14f34ep1a783ejsn730260106265',
                'x-rapidapi-host': 'horoscopes-ai.p.rapidapi.com'
              },
            });
      
            const data = await response.json();
            setDescription(data.general[0] || data.general);
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
