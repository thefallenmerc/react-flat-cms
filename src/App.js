import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";


import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Page from './components/Page';

import endpoints from './config/endpoints';

import { transformRoute } from './config/helpers';
import Loader from './components/Loader';

export default function App() {
    const [routeList, setRouteInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(endpoints.content).then(response => response.json())
            .then(response => {
                setRouteInfo(response.flat.map(route => transformRoute(route)));
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        isLoading ? <Loader /> :
            <Switch>
                <Route exact path="/" render={props => <Dashboard routeList={routeList} />} />
                <Route path="/:page" render={props => <Page {...props} routeList={routeList} />} />
            </Switch>
    );
}