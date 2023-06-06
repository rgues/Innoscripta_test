import React from 'react';
import './VideoList.css';
import VideosTemplate from './VideosTemplate';

const VideosRelated = (props) =>  (
        <div className='relatedWrapper'>
            <VideosTemplate teams={props.teams} data={props.data} />  
        </div>
    );


export default VideosRelated;