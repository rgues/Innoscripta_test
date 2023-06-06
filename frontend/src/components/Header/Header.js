import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideNavigation from '../SideNavigation/SideNavigation';


const Header = (props) => {

    const navBars = () => (
        <div className='Bars'>
            <FontAwesomeIcon icon={faBars} name='bars'
            onClick = { props.onOpenNav}
            style={{
                color: '#dfdfdf',
                padding: '10px',
                cursor: 'pointer'
            }} />
        </div>
    );

    const logo = () => (
        <Link to="/" className='logo'>
            <img src="/images/nba_logo.png" alt="NBA logo" />
        </Link>
    );

    return (
        <header className='header'>
            <SideNavigation {...props} />
            <div className='headerOpt' >
                {navBars()}
                {logo()}
            </div>
        </header>
    );
};
export default Header;