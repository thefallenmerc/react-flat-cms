import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";


import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Page from './components/Page';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={props => <Dashboard />} />
                <Route path="/:page" render={props => <Page {...props} />} />
            </Switch>
        );
    }
}