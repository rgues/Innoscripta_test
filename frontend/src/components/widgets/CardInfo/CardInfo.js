import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './CardInfo.css';

function CardInfo(props) {

    const teamName = (teams,team) => {
        let teamData = null;
        teamData = teams.find(item => item.id === team);
        return teamData ? teamData.name : null;
    }

    return (
        <div className='cardNfo'>
            <span className='teamName'>
                {teamName(props.teams,props.team)} 
            </span>
            <span className='date'>
                <FontAwesomeIcon icon={faClock} name='faClock' />
                {props.date}
            </span>
        </div>
    );
}

export default CardInfo;