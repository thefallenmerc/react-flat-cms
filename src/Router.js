import { Switch, Route } from 'react-router-dom';
import React from 'react';

import FourOFour from './components/FourOFour';

import JavascriptCoreHelloWorld from "./pages/javascript/core/hello_world.jsx";
import PhpCoreHelloWorld from "./pages/php/core/hello_world.jsx";
import ReactFlatReadme from "./pages/ReactFlat/readme.jsx";

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
				<Route path={"/javascript/core/hello-world"} component={JavascriptCoreHelloWorld} />
				<Route path={"/php/core/hello-world"} component={PhpCoreHelloWorld} />
				<Route path={"/reactflat/readme"} component={ReactFlatReadme} />
                <Route path="/:page" render={props => <FourOFour />} />
            </Switch>
        );
    }
}