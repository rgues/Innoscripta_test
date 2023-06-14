import React from 'react';
import axios from 'axios';
import { API_END_POINT_DEV } from '../../../../config';
import '../../Articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideoList/VideosRelated';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const VideoArticle = (props) => {


    let { id } = useParams();
    const [article, setArticle] = useState([]);
    const [team, setTeam] = useState([]);
    const [teams, setTeams] = useState([]);
    const [related, setRelated] = useState([]);


    useEffect(() => {
        axios.get(`${API_END_POINT_DEV}/videos?id=${parseInt(id)}`)
            .then(response => {
                let article = response.data[0];

                axios.get(`${API_END_POINT_DEV}/teams?id=${article.team}`)
                    .then(response => {
                        setTeam(response.data);
                        setArticle(article)
                        getRelated();
                    })
            })
    }, []);

    const getRelated = () => {
        axios.get(`${API_END_POINT_DEV}/teams`)
            .then(response => {
                let teams = response.data;
                axios.get(`${API_END_POINT_DEV}/videos?q=${team.length > 0 ?team[0].city : ''}&_limit=3`)
                    .then(response => {

                        setRelated(response.data);
                        setTeams(teams)

                    })
            })
    }


    return (
        <div>
            <Header teamData={team[0]} />
            <div className='videoWrapper'>
                <h1>{article.title}</h1>
                <iframe title='videoplayer' width="100%" height="300px" src={`https://www.youtube.com/embed/${article.url}`}>

                </iframe>

            </div>

            <VideosRelated teams={teams} data={related} />
        </div>
    );

}

export default VideoArticle;