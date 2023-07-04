// CSSModulesWrapper.js
import React from 'react';
import styles from './mw.module.css';

const CSSModulesWrapper = (Component) => {
  return (props) => {
    return <Component {...props} cssModules={styles} />;
  };
};

export default CSSModulesWrapper;
