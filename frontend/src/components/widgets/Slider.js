import React, { Component } from 'react';
import axios from 'axios';
import { API_END_POINT_DEV } from '../../config';
import SliderTemplates from './SliderTemplates';

class Slider extends Component {

    state = {
        news: []
    }

    componentDidMount() {

        axios.get(`${API_END_POINT_DEV}/articles?_start=0&_end=3`).then(response => {
            this.setState({
                news : response.data
            });
        });

    }

    render() {
        return (
           <SliderTemplates data = { this.state.news } type = "featured" />
        );
    }
}

export default Slider;