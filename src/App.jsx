import React, {Component} from "react";
import "./App.scss";
import file_resume from './files/Resume.pdf'
import icon_blog from './images/blog.svg'
import icon_resume from './images/resume.svg'
import icon_email from './images/email.svg'
import icon_github from './images/github.svg'
import icon_linkedin from './images/linkedin.svg'
import logo_thinking from './images/thinking.svg'


class ImageLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='image-link'>
                <a href={this.props.href || '#'}
                   target={this.props.target || '_blank'}
                >
                    <img src={this.props.img}
                         alt={this.props.alt || ''}
                    />
                </a>
            </div>);
    }
}

class MyLogo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.style ?
                `my-logo ${this.props.style}` :
                'my-logo'}>
                <ImageLink
                    target='_self'
                    img={logo_thinking}
                />
            </div>
        );
    }

}

class ImageLinkWithText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-table-image-link'>
                <ImageLink
                    href={this.props.href}
                    img={this.props.img}
                />
                <div>
                    <span>{this.props.text || ''}</span>
                </div>
            </div>);
    }
}

class MainTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-table">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <ImageLinkWithText
                                img={icon_blog}
                                href="https://graysonliu.github.io/blog"
                                text="Blog"
                            />
                        </td>
                        <td>
                            <ImageLinkWithText
                                img={icon_resume}
                                href={file_resume}
                                text="Resume"
                            />
                        </td>
                        <td>
                            <ImageLinkWithText
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

class BottomImageLinkTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bottom-image-link-table">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <div className='bottom-image-link'>
                                <ImageLink
                                    href="https://github.com/graysonliu"
                                    img={icon_github}/>
                            </div>
                        </td>
                        <td>
                            <div className='bottom-image-link'>
                                <ImageLink
                                    href="https://www.linkedin.com/in/liu-zijian"
                                    img={icon_linkedin}/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

class GithubWorkflowBadge extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.style ?
                `github-workflow-badge ${this.props.style}` :
                'github-workflow-badge'}>
                <ImageLink
                    href={this.props.repo}
                    img={this.props.badge}/>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="app">
                <MyLogo style='my-logo-header'/>
                <MainTable/>
                <BottomImageLinkTable/>
                <GithubWorkflowBadge
                    style="right-bottom-corner"
                    repo="https://github.com/graysonliu/graysonliu.github.io"
                    badge="https://github.com/graysonliu/graysonliu.github.io/workflows/build/badge.svg"
                />
            </div>);
    }
}

export default App;
