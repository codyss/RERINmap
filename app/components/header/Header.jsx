import React from 'react';
import Title from './Title.jsx';
import styles from '../../styles/main.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <Title />
    </div>
  );
}

export default Header
