import { useTranslation } from 'react-i18next';

import type { HoroscopePeriod } from 'types/main';

import styles from './PeriodSwitcher.module.css';

interface PeriodSwitcherProps {
  period: HoroscopePeriod;
  onChange: (period: HoroscopePeriod) => void;
}

const PeriodSwitcher = ({
  period,
  onChange,
}: PeriodSwitcherProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${period === 'daily' ? styles.active : ''}`}
        onClick={onChange.bind(null, 'daily')}
      >
        {t('periodSwitcher.daily')}
      </button>

      <button
        className={`${styles.button} ${period === 'weekly' ? styles.active : ''}`}
        onClick={onChange.bind(null, 'weekly')}
      >
        {t('periodSwitcher.weekly')}
      </button>
    </div>
  );
};

export default PeriodSwitcher;
