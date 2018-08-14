//rpfc
import React from 'react';
import Modal from '../Modal/Modal';

const Registration = ({close,id}) => {
    return (
        <div>
            <Modal close={close} id={id}>
                <h2>Registration</h2>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Mail"/>
                <input type="password" placeholder="Password"/>
            </Modal>
        </div>
    )
        ;
};


export default Registration;
