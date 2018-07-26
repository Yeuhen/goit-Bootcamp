import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({type,text,onclick}) => <button type={type} className={styles.btn} onClick={onclick}>{text}</button>;


Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

Button.defaultProps = {
  type: null,
  onclick: ()=> null,
};


export default Button;