import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import styles from './ZodiacDetails.module.css';

interface ZodiacDetailsProps {
  sign: string,
  description: string,
  onBack: any;
}

const ZodiacDetails: FC<ZodiacDetailsProps> = ({
  sign,
  description,
  onBack,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.details}>
      <h2 className={styles.title}>
        {t(sign)}
      </h2>

      <p className={styles.description}>
        {description}
      </p>

      <button
        className={styles.button}
        onClick={onBack}
      >
        Назад
      </button>
    </div>
  );
};

export default ZodiacDetails;
