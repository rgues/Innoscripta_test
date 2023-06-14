import React from 'react';
import axios from 'axios';
import { API_END_POINT_DEV } from '../../../../config';
import '../../Articles.css';
import Header from './header';

import {  useEffect, useState } from 'react';
import { useParams } from 'react-router';

const NewsArticle = (props) => {

    let { id } = useParams();
    const [article,setArticle]= useState([]);
    const [team,setTeam]= useState([]);
    
    useEffect(() => {      
        axios.get(`${API_END_POINT_DEV}/articles?id=${parseInt(id)}`)
            .then(response => {
                let article = response.data[0];
                axios.get(`${API_END_POINT_DEV}/teams?id=${article.team}`)
                    .then(response => {
                        setArticle(article);
                        setTeam(response.data);
                    })
            })
        //Runs on the first render
        
      }, []); //And any time any dependency value changes if we set props, article, team
    
        return (
            <div className='articleWrapper'>
                <Header
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />

                <div className='articleBody'>
                    <h1>{article.title}</h1>
                    <div className='articleImage'
                        style={{
                            background: `url(/images/articles/${article.image})`
                        }}
                    >
                    </div>
                    <div className='articleText'>
                        {article.body}
                    </div>
                </div>
            </div>
        )
}

export default NewsArticle;