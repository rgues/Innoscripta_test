import React, { Component } from 'react';
import axios from 'axios';
import { API_END_POINT_DEV } from '../../../../config';
import '../../Articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideoList/VideosRelated';

class VideoArticle extends Component {

    state = {
        article:[],
        team:[],
        teams:[],
        related:[]
    }


    componentDidMount() {
        axios.get(`${API_END_POINT_DEV}/videos?id=${1}`)
            .then(response => {
                let article = response.data[0];

                axios.get(`${API_END_POINT_DEV}/teams?id=${article.team}`)
                    .then(response => {

                        this.setState({
                            team: response.data,
                            article
                        })

                        this.getRelated();
                    })
            })
    }

    getRelated = () => {
        axios.get(`${API_END_POINT_DEV}/teams`)
        .then(response => {
                let teams = response.data;

                axios.get(`${API_END_POINT_DEV}/videos?q=${this.state.team[0].city}&_limit=3`)
                .then(response => {

                    this.setState({
                        related: response.data,
                        teams
                    })
                       
                })
        })
    }


    render() {

        const article = this.state.article;
        const team = this.state.team;

        return (
            <div>
                <Header teamData={team[0]} />
                <div className='videoWrapper'>
                    <h1>{article.title}</h1>
                    <iframe title='videoplayer' width="100%" height="300px" src={`https://www.youtube.com/embed/${article.url}`}>

                    </iframe>

                </div>

                <VideosRelated teams={this.state.teams} data={this.state.related} />
            </div>
        );
    }
}

export default VideoArticle;