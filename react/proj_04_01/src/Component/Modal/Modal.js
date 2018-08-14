/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import './Modal.css'

const Modal = ({close, children, id}) => {
  // console.log(props);
  // state = {};
    return (
      <div className='overlay' onClick={close} id ={id}>
        <div className='modal'>
          <p className='close' onClick={close} id = {id}>&#120;</p>
            {children}
        </div>
      </div>
    );
};

export default Modal;
