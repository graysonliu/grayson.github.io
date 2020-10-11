import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Resume from './Resume.pdf'

class SingleLineLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                <a href={this.props.href}
                   target='_blank'
                   className="SingleLineLink">
                    {this.props.text}
                </a>
            </p>);
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <SingleLineLink
                    href="https://graysonliu.github.io/blog"
                    text="Blog"
                />
                <SingleLineLink
                    href={Resume}
                    text="Resume"
                />
            </div>
        );
    }
}

export default hot(module)(App);
