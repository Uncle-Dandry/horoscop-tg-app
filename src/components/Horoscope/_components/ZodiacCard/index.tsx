import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ZodiacCard.module.css';

interface ZodiacCardProps {
  sign: string,
  dateRange: string,
  iconSrc: string,
  onClick: () => void;
}

const ZodiacCard: FC<ZodiacCardProps> = ({
  sign,
  dateRange,
  iconSrc,
  onClick,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={styles.card}
      onClick={onClick}
    >
      <img
        className={styles.icon}
        src={iconSrc}
        alt={`${sign} icon`}
      />

      <h3 className={styles.signName}>
        {t(sign)}
      </h3>

      <p className={styles.dateRange}>
        {t(dateRange)}
      </p>
    </div>
  );
};

export default ZodiacCard;
