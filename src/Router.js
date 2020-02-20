import { Switch, Route } from 'react-router-dom';
import React from 'react';

import GetYourLifeInOrder from "./pages/codeofconduct/Get_your_life_in_order.jsx";
import SmartworkOverHardwork from "./pages/codeofconduct/Smartwork_over_hardwork.jsx";
import StopChasingGirls from "./pages/codeofconduct/Stop_Chasing_Girls.jsx";
import TreatYourselfLikeAKING from "./pages/codeofconduct/Treat_yourself_like_a_KING.jsx";
import EmptyWidget from "./pages/dart/flutter/others/empty_widget.jsx";
import AddCustomServiceWorker from "./pages/javascript/react/add_custom_service_worker.jsx";
import AddGlobalEventListener from "./pages/javascript/react/add_global_event_listener.jsx";
import ConfigureTailwind from "./pages/javascript/react/configure_tailwind.jsx";
import IntegrateOnesignalSdk from "./pages/javascript/react/integrate_onesignal_sdk.jsx";
import SettingRedirectionProgrammatically from "./pages/javascript/react/setting_redirection_programmatically.jsx";
import UsingReduxSimplest from "./pages/javascript/react/using_redux_simplest.jsx";
import AddCorsHeader from "./pages/node/core/add_cors_header.jsx";
import CreateTypescriptScaffolding from "./pages/node/express/create_typescript_scaffolding.jsx";
import TypescriptBasedValidator from "./pages/node/express/typescript_based_validator.jsx";
import AccessingSomething from "./pages/php/laravel/accessing_something.jsx";
import AddingNewCustomRouteFile from "./pages/php/laravel/adding_new_custom_route_file.jsx";
import AllowingCors from "./pages/php/laravel/allowing_cors.jsx";
import AuthenticationWithLaravel from "./pages/php/laravel/authentication_with_laravel.jsx";
import CreateNewProject from "./pages/php/laravel/create_new_project.jsx";
import JsonResponseOn404 from "./pages/php/laravel/json_response_on_404.jsx";
import SettingCustomHeaders from "./pages/php/laravel/setting_custom_headers.jsx";
import HtaccessForSpa from "./pages/servers/apache/htaccess_for_spa.jsx";
import RedirectToHttps from "./pages/servers/apache/redirect_to_https.jsx";
import MakeAPwa from "./pages/Web/html/make_a_pwa.jsx";
import HandleOnlineOfflineEvent from "./pages/Web/Javascript/handle_online_offline_event.jsx";
import RequestMediaPermissions from "./pages/Web/Javascript/request_media_permissions.jsx";
import About from "./pages/XYZs/about.jsx";

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
				<Route path={"/codeofconduct/get-your-life-in-order"} component={GetYourLifeInOrder} />
				<Route path={"/codeofconduct/smartwork-over-hardwork"} component={SmartworkOverHardwork} />
				<Route path={"/codeofconduct/stop-chasing-girls"} component={StopChasingGirls} />
				<Route path={"/codeofconduct/treat-yourself-like-a-king"} component={TreatYourselfLikeAKING} />
				<Route path={"/dart/flutter/others/empty-widget"} component={EmptyWidget} />
				<Route path={"/javascript/react/add-custom-service-worker"} component={AddCustomServiceWorker} />
				<Route path={"/javascript/react/add-global-event-listener"} component={AddGlobalEventListener} />
				<Route path={"/javascript/react/configure-tailwind"} component={ConfigureTailwind} />
				<Route path={"/javascript/react/integrate-onesignal-sdk"} component={IntegrateOnesignalSdk} />
				<Route path={"/javascript/react/setting-redirection-programmatically"} component={SettingRedirectionProgrammatically} />
				<Route path={"/javascript/react/using-redux-simplest"} component={UsingReduxSimplest} />
				<Route path={"/node/core/add-cors-header"} component={AddCorsHeader} />
				<Route path={"/node/express/create-typescript-scaffolding"} component={CreateTypescriptScaffolding} />
				<Route path={"/node/express/typescript-based-validator"} component={TypescriptBasedValidator} />
				<Route path={"/php/laravel/accessing-something"} component={AccessingSomething} />
				<Route path={"/php/laravel/adding-new-custom-route-file"} component={AddingNewCustomRouteFile} />
				<Route path={"/php/laravel/allowing-cors"} component={AllowingCors} />
				<Route path={"/php/laravel/authentication-with-laravel"} component={AuthenticationWithLaravel} />
				<Route path={"/php/laravel/create-new-project"} component={CreateNewProject} />
				<Route path={"/php/laravel/json-response-on-404"} component={JsonResponseOn404} />
				<Route path={"/php/laravel/setting-custom-headers"} component={SettingCustomHeaders} />
				<Route path={"/servers/apache/htaccess-for-spa"} component={HtaccessForSpa} />
				<Route path={"/servers/apache/redirect-to-https"} component={RedirectToHttps} />
				<Route path={"/web/html/make-a-pwa"} component={MakeAPwa} />
				<Route path={"/web/javascript/handle-online-offline-event"} component={HandleOnlineOfflineEvent} />
				<Route path={"/web/javascript/request-media-permissions"} component={RequestMediaPermissions} />
				<Route path={"/xyzs/about"} component={About} />
            </Switch>
        );
    }
}