import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
    let template = null;
    switch (props.type) {
        case ('loadmore'):
            template = (
                <div className='blue_btn' onClick={props.loadMore}>
                    {props.cta}
                </div>
            )
        break;
        case ('link'):
            template = (
                <Link className='blue_btn' to={props.linkTo}>
                    {props.cta}
                </Link>
            )
        break;
        default:
            template = null;
    }
    return template;
}

export default Button;