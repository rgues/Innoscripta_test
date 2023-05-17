import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import  { CURRENT_YEAR } from '../../config';

const Footer = () => {

    return (
        <div className='footer'>
            <Link to="/" className='logo'>
            <img src="/images/logo/kamensoft.png" alt="KamenSoft Technologies logo" />
            </Link>
            <div className='copyright'>
                @KamenSoft Tech {CURRENT_YEAR} All rights reserved
            </div>
        </div>
    );
};

export default Footer;