import React from 'react';
import styles from './uiUX.module.css';

export default function UiUx() {
  const SquareLayout = () => {
    return (
      <div className={styles.container}>
        <div className={styles.squareTop}></div>
        <div className={styles.middleContainer}>
          <div className={styles.squareMiddle}></div>
          <div className={styles.squareMiddle}></div>
          
        </div>
        <div className={styles.squareBottom}></div>
      </div>
    );
  };

  return (
    <div>
      <SquareLayout />
    </div>
  );
}



