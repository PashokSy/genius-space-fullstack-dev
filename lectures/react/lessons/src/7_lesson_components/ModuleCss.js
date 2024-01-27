import React from 'react';
import styles from './Css.module.css';

export const ModuleCss = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Module Styles Example</h1>
      <p>This is an example of using CSS modules in React</p>
    </div>
  );
};
