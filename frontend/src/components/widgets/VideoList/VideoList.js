import React, { Component } from 'react';
import './VideoList.css';
import axios from 'axios';
import { API_END_POINT_DEV } from '../../../config';
import Button from '../Button/Button';
import VideosTemplate from './VideosTemplate';

class VideoList extends Component {

    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentDidMount() {
        this.request(this.state.start,this.state.end);
    }

    request = (start, end) => {
        if (this.state.teams.length < 1) {
            axios.get(`${API_END_POINT_DEV}/teams`).then((response) => {
                this.setState({
                    teams: response.data
                })
            });
        }

        axios.get(`${API_END_POINT_DEV}/videos?_start=${start}&_end=${end}`).then((response) => {
            this.setState({
                videos: [...this.state.videos,...response.data],
                start,
                end
            })
        });
    }

    renderVideos = () => {
        let template = null;
        switch(this.props.type) {
            case ('card') :
                template = <VideosTemplate data={this.state.videos} teams={this.state.teams} />
                break;
            default:
                template = null;

        }

        return template;
    }

    loadmore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end,end);
    }

    renderButton = () => {
        return this.props.loadmore ?
            <Button type="loadmore" cta="Load More Videos" loadMore={() => this.loadmore()} />
            : <Button type="link" cta="More videos" linkTo="/videos" />;
    }

    renderTitle = () => {
        return this.props.title ?
            <h3>
                <strong>Kamensoft</strong> Videos
            </h3>
            : null;
    }

    render() {
        
        return (
            <div className='videoList_wrapper'>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        );
    }
}

export default VideoList;