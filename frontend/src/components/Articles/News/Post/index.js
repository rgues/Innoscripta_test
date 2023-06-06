import React, { Component } from 'react';
import axios from 'axios';
import { API_END_POINT_DEV } from '../../../../config';
import '../../Articles.css';
import Header from './header';

class NewsArticle extends Component {

    state = {
        article: [],
        team: []
    }

    componentDidMount() {
        // 
        axios.get(`${API_END_POINT_DEV}/articles?id=${3}`)
            .then(response => {
                let article = response.data[0];
                axios.get(`${API_END_POINT_DEV}/teams?id=${article.team}`)
                .then(response => {
                    this.setState({
                        team : response.data,
                        article                 
                    })
                })
            })
    }

    render() {
        const article = this.state.article;
        const team = this.state.team;
        return (
            <div className='articleWrapper'>
                <Header
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />

                <div className='articleBody'>
                        <h1>{ article.title }</h1>
                        <div className='articleImage' 
                            style={{
                                background:`url(/images/articles/${article.image})`
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
}

export default NewsArticle;