import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import file_resume from './files/Resume.pdf'
import icon_blog from './images/blog.svg'
import icon_resume from './images/resume.svg'
import icon_email from './images/email.svg'
import icon_github from './images/github.svg'
import icon_linkedin from './images/linkedin.svg'

class ImageTextLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ImageTextLink">
                <a href={this.props.href}
                   target='_blank'>
                    <img
                        src={this.props.img}
                        alt={this.props.text}/>
                    <span>{this.props.text}</span>
                </a>
            </div>);
    }
}

class MainTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MainTable">
                <table>
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
                </table>
            </div>);
    }
}

class BottomImageLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="BottomImageLink">
                <a href={this.props.href}
                   target='_blank'>
                    <img src={this.props.img} alt=""/>
                </a>
            </div>
        );
    }

}

class BottomImageLinkTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="BottomImageLinkTable">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <BottomImageLink
                                href="https://github.com/graysonliu"
                                img={icon_github}/>
                        </td>
                        <td>
                            <BottomImageLink
                                href="https://www.linkedin.com/in/liu-zijian/"
                                img={icon_linkedin}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

class App extends Component {
    render() {
        return (
            <div className="App">
                <MainTable/>
                <BottomImageLinkTable/>
            </div>);
    }
}

export default hot(module)(App);
