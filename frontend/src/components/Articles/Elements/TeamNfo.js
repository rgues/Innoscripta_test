import React from 'react';
import '../Articles.css';

const TeamNfo = (props) => (
        <div className='articleTeamHeader'>
            <div className='leftArcticle' style={{
                background: `url(/images/teams/${props.team.logo})`
            }}> 
            </div>
            <div className='rightArticle'>
                <div>
                    <span>{props.team.city} {props.team.name}</span>
                </div>
                <div>
                    <strong>
                        W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
                    </strong>
                </div>
            </div>
            
        </div>
    )

export default TeamNfo;