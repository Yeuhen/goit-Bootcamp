/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './Component/Modal/Modal';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.App__header}>
          <img src={logo} className={styles.App__logo} alt="logo" />
          <h1 className={styles.App__title}>Welcome to React</h1>
        </header>
        <button className={styles.btn} name='Registration'>Registration</button>
        <button className={styles.btn} name='Profile'>Profile</button>
        <button className={styles.btn} name='Order'>Order</button>
        <Modal/>

      </div>
    );
  }
}

export default App;
