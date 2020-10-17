import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


function createTitle(title) {
    const element = document.createElement('title');
    element.innerText = title || "Zijian Liu";
    return element;
}

function component() {
    const element = document.createElement('div');
    element.id = 'root';
    return element;
}

document.head.appendChild(createTitle())
document.body.appendChild(component());
ReactDOM.render(<App/>, document.getElementById("root"));