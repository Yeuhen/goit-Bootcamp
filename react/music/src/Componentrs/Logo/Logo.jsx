import React from 'react';
import './Logo.css';
import Logotype from './Logo.png'

const Logo = () => {
    return (
        <a href="#"  className="logo">
            <img src={Logotype} alt="Logo"/>
        </a>
    );
};

export default Logo;