import { type FC } from 'react';

import styles from './GlassSpinner.module.css';

const GlassSpinner: FC = () => (
  <div className={styles.spinnerContainer}>
    <svg className={styles.glassSpinner} viewBox="0 0 50 50">
      <circle
        className={styles.path}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#333"
        strokeWidth="5"
      />
    </svg>
  </div>
);

export default GlassSpinner;
