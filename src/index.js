import React from "react";
import { render } from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from './App';

if(window.location.pathname.indexOf("github.io") >= 0) {
    render(<HashRouter><App /></HashRouter>, document.getElementById("root"));
} else {
    render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
}
