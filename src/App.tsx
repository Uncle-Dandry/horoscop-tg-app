import {
  useState,
  useMemo
} from 'react';
import { useTranslation } from 'react-i18next';

import type { HoroscopePeriod } from 'types/main';
import { generateHoroscope } from 'utils/generateHoroscope';

import {
  Horoscope,
  LanguageSwitcher,
  PeriodSwitcher,
  ZodiacDetails,
} from 'components';

import './i18n';

import styles from './App.module.css';

const App = () => {
  const { i18n } = useTranslation();

  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);
  const [period, setPeriod] = useState<HoroscopePeriod>('daily');

  const description = useMemo(() => {
    if (!selectedZodiac) return null;

    let nextDescription = null;

    try {
      nextDescription = generateHoroscope({
        sign: selectedZodiac,
        language: i18n.language,
        period,
      })
    } catch (error) {
      console.error('Error generating horoscope data:', error);
      nextDescription = i18n.language.includes('ru')
        ? 'Произошла ошибка при генерации гороскопа.'
        : 'An error occurred while generating the horoscope.';
    }

    return nextDescription;
  }, [selectedZodiac, i18n.language, period]);

  const handleSelectZodiac = (sign: string) => {
    setSelectedZodiac(sign);
  };

  const handleBack = () => {
    setSelectedZodiac(null);
  };

  return (
    <main className={styles.app}>
      <div className={styles.switchers}>
        <LanguageSwitcher />
        <PeriodSwitcher
          period={period}
          onChange={setPeriod}
        />
      </div>

      {!description || !selectedZodiac ? (
        <Horoscope onSelect={handleSelectZodiac} />
      ) : (
        <ZodiacDetails
          sign={selectedZodiac}
          period={period}
          description={description}
          onBack={handleBack}
        />
      )}
    </main>
  );
}

export default App;
