/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Btn.css';

const Button =({type, text, onclick}) => <button type = {type} onClick={onclick} className={styles.btn}>{text}</button>;

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

Button.defaultProps ={
  type: null,
  onclick: () => null,
};

export default Button;
