import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo'>
                <h2>Online Shop</h2>
            </div>
            <div className='navigation'>
                <Link to={'/'}>Home</Link>
                <Link to={'/order'}>Order</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    );
};

export default Header;