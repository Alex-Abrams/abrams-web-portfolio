import React from 'react';
import styles from './uiUX.module.css';

export default function UiUx() {
  const SquareLayout = () => {
    return (
      <div className={styles.container}>
        <div className={styles.row1}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
        </div>
        <div className={styles.row2}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
        </div>
        <div className={styles.row3}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <SquareLayout />
    </div>
  );
}




