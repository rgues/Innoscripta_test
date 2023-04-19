import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ListArticle } from './components/Article/ListArticle';
import { NewArticle } from './components/Article/NewArticle';
import { EditArticle } from './components/Article/EditArticle';
import { NotFound } from './components/NotFound';
import Layout from './hoc/Layout/Layout';



class Router extends Component {

    render() {
        return (
            <Layout>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/article" exact element={<ListArticle />} />
                    <Route path="/article/new" element={<NewArticle />} />
                    <Route path="/article/edit" element={<EditArticle />} />
                    <Route element={<NotFound />} />
                </Routes>
            </Layout>
        );
    }
}

export default Router;