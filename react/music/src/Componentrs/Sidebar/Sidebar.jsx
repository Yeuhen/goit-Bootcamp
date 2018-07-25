import React from 'react';
import './Sidebar.css';
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'

const Sidebar = () => {
    return (
        <aside className='aside'>
            <Logo/>
            <Menu menu={[
                {text: 'Main', link: '#', submenu: false},
                {text: 'Intresting', link: '#', submenu: true},
                {text: 'Favourite', link: '#', submenu: true},
                {text: 'Playlist', link: '#', submenu: false},
                {text: 'Pay', link: '#', submenu: false},
            ]}/>
        </aside>
    )
};

export default Sidebar;