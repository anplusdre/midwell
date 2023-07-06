import React from 'react';
import styles from '../../../styles/mw.module.css'; // Import CSS module
import midwell from '../../../styles/midwell.module.css'; // Import CSS module

const Exemplar = ({ buttonContent }) => {
  return (
    <div className={styles.examples + ' ' + midwell.rw + ' ' + midwell['rw-16'] + ' ' + midwell['fx-start']}>
      {buttonContent}
    </div>
  );
};

const ExemplarBlue = ({ buttonContent }) => {
  return (
    <div className={styles.examples + ' ' + styles.ButtonDarkThemme + ' ' + midwell.rw + ' ' + midwell['rw-16'] + ' ' + midwell['fx-start'] + ' ' + midwell['top-16'] + ' ' + midwell['btm-16']}>
    {buttonContent}
    </div>
  );
};

export default Exemplar;
