/*eslint-disable*/
import React from 'react';
import logo from '../Logo/Logo.png';
import styles from './Header.css';
import LinesList from '../LinesList/LinesList';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo"/>
      <h1 className={styles.title}>ToDo List</h1>
      <LinesList/>
    </header>
  )
};

export default Header;
