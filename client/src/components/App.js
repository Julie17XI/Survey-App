import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
    componentDidMount () {
        this.props.fetchUser();
    }
    render () {
     return (
            <div className="container">
                <div>
                    <BrowserRouter>
                        <Header />
                        <div><Route exact path="/" component={Landing} /></div>
                        <div><Route exact path="/surveys" component={Dashboard} /></div>
                        <div><Route path="/surveys/new" component={SurveyNew} /></div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
};

export default connect(null, actions)(App);