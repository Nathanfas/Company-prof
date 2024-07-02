import React, { useState } from 'react';
import './header.css';
import LogoIMG from '../../assets/image/Logo.jpeg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='header' id='header'>
            <nav className="navbar">
                <div className="logo">
                    <a href='/'> <img src={LogoIMG} alt="Logo" /></a>
                </div>
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#customers">Customers</a></li>
                    <li><a href="#footer">Contact Us</a></li>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
