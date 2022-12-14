import React from 'react';
import '../css/Header.css';

const Header = props => (
    <header className='header'>{props.children}</header>
);

export default Header;