/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Modal.css'

const Modal = (props) => {
  console.log(props);
  // state = {};
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <p className={styles.close} onClick={close}>&#120;</p>

        </div>
      </div>
    );
};

export default Modal;
