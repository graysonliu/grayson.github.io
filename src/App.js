import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import file_resume from './files/Resume.pdf'
import icon_blog from './images/blog.svg'
import icon_resume from './images/resume.svg'
import icon_email from './images/email.svg'

class ImageTextLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="ImageTextLink"
               href={this.props.href}
               target='_blank'>
                <img className="ImageWithinLink"
                     src={this.props.img}
                     alt={this.props.text}/>
                <span className="VerticalCenterText">
                                {this.props.text}</span>
            </a>);
    }
}

class App extends Component {
    render() {
        return (
            <table className="MainTable">
                <tbody>
                <tr>
                    <td>
                        <ImageTextLink
                            img={icon_blog}
                            href="https://graysonliu.github.io/blog"
                            text="Blog"
                        />
                    </td>
                    <td>
                        <ImageTextLink
                            img={icon_resume}
                            href={file_resume}
                            text="Resume"
                        />
                    </td>
                    <td>
                        <ImageTextLink
                            img={icon_email}
                            href="mailto:liu.zijian@outlook.com"
                            text="Contact"
                        />
                    </td>
                </tr>
                </tbody>
            </table>);
    }
}

export default hot(module)(App);
