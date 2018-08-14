//rpfc
import React from 'react';
import Modal from '../Modal/Modal';

const Order = ({close,id}) => {
    return (
        <div>
            <Modal close={close} id = {id}>
                <h2>Order</h2>
                <input type="text" placeholder="Amount"/>
                <input type="text" placeholder="Color"/>
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="Phone"/>
                <input type="email" placeholder="Mail"/>
            </Modal>
        </div>
    )
        ;
};


export default Order;
