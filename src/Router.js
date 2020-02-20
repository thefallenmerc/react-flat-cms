import { Switch, Route } from 'react-router-dom';
import React from 'react';

import FourOFour from './components/FourOFour';

import Readme from "./pages/ReactFlat/readme.jsx";

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
				<Route path={"/reactflat/readme"} component={Readme} />
                <Route path="/:page" render={props => <FourOFour />} />
            </Switch>
        );
    }
}