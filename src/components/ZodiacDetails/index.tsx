import { useTranslation } from 'react-i18next';

import type { HoroscopePeriod } from 'types/main';

import styles from './ZodiacDetails.module.css';

interface ZodiacDetailsProps {
  sign: string,
  period: HoroscopePeriod,
  description: string,
  onBack: () => void;
}

const ZodiacDetails = ({
  sign,
  period,
  description,
  onBack,
}: ZodiacDetailsProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.details}>
      <h2 className={styles.title}>
        {t(sign)}
      </h2>

      <p className={styles.period}>
        {`${t('periodLabel')}: ${t(`periodSwitcher.${period}`)}`}
      </p>

      <p className={styles.description}>
        {description}
      </p>

      <button
        className={styles.button}
        onClick={onBack}
      >
        {t('button_back')}
      </button>
    </div>
  );
};

export default ZodiacDetails;
