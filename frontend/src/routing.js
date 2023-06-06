import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import { Home } from './components/Home/Home';

import { Login } from './components/Login';
import { Register } from './components/Register';
 
import NewsArticle from './components/Articles/News/Post/index';

import { NotFound } from './components/NotFound';
import VideoArticle from './components/Articles/Videos/Video';
import NewsMain from './components/Articles/News/Main';
import VideosMain from './components/Articles/Videos/Main';


class Router extends Component {

    render() {
        return (
            <Layout>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/news" element={<NewsMain/>} />
                    <Route path="/articles/:id" exact element={<NewsArticle />} />
                    <Route path="/videos/:id" exact element={<VideoArticle/>} />
                    <Route path="/videos" exact element={<VideosMain/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        );
    }
}

export default Router;