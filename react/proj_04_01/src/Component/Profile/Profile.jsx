//rpfc
import React from 'react';
import Modal from '../Modal/Modal';

const Profile = ({close,id}) => {
    return (
        <div>
            <Modal close={close} id = {id}>
                <h2>Profile</h2>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Age'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='Coutry'/>
                <input type="text" placeholder='Coutry'/>
                <input type="text" placeholder='City'/>
                <input type="email" placeholder='Mail'/>
            </Modal>
        </div>
    )
        ;
};


export default Profile;
