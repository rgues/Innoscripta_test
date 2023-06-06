import React from 'react';
import './sideNavitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileText, faPlay, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SideNavitems = () => {

    const items = [
        {
            type: 'option',
            icon: faHome,
            text: 'Home',
            link: '/'
        },
        {
            type: 'option',
            icon: faFileText,
            text: 'News',
            link: '/news'
        },
        {
            type: 'option',
            icon: faPlay,
            text: 'Videos',
            link: '/videos'
        }
        ,
        {
            type: 'option',
            icon: faSignIn,
            text: 'Sign In',
            link: '/login'
        },
        {
            type: 'option',
            icon: faSignOut,
            text: 'Sign Out',
            link: '/logout'
        }
    ];

    const showItems = () => {
        return items.map((item, i) => {
            return (<div key={i} className={item.type}>
                <Link to={item.link} >
                    <FontAwesomeIcon icon={item.icon} name={item.text} />
                    {item.text}
                </Link>
            </div>)
        });
    }

    return (
        <div>
            {showItems()}
        </div>
    );
}

export default SideNavitems;