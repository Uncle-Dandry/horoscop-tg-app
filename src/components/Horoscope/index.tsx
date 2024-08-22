import type { FC } from 'react';

import { ZODIACS } from 'constants/main';

import { ZodiacCard } from './_components';

import styles from './Horoscope.module.css';

interface HoroscopeProps {
  onSelect: (sign: string) => void;
}

const Horoscope: FC<HoroscopeProps> = ({
  onSelect,
}) => {
  return (
    <div className={styles.list}>
      {ZODIACS.map(({
        sign,
        ...rest
      }) => (
        <ZodiacCard
          {...rest}
          key={sign}
          sign={sign}
          dateRange={`${sign}-range`}
          onClick={onSelect.bind(null, sign)}
        />
      ))}
    </div>
  );
};

export default Horoscope;
