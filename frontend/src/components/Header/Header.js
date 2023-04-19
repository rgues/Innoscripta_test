import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const navBars = () => (
    <div className='Bars'>
     <FontAwesomeIcon icon={faBars}  name='bars' style={{
            color:'#dfdfdf',
            padding:'10px',
            cursor:'pointer'
        }} />
    </div>
);

const logo = () => (
        <Link to="/" className='logo'>
             <img src="/images/logo/innoscripta.avif" alt="Innoscripta logo" />
        </Link> 
);

const Header = () => {
    return (
        <header className='header'>
            <div className='headerOpt'>
                { navBars() }
               { logo() }
            </div>
        </header>
    );
};

export default Header;