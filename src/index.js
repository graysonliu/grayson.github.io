import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import gtag_html from "./gtag.html"

function component() {
    const element = document.createElement('div');
    element.id = 'root'
    return element;
}

document.body.appendChild(component());
// add google analytics gtag
document.head.insertAdjacentHTML('beforeend', gtag_html);
ReactDOM.render(<App/>, document.getElementById("root"));
