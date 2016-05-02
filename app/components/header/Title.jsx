import React from 'react';
import styles from '../../styles/main.css';

function Title(props) {
  return (
    <div className={styles.title}>
      <div className={styles.leftTitle}/>
      <div className={styles.titleText}>Golf Course Finder</div>
      <div className={styles.rightTitle}/>
    </div>
  );
}

export default Title
