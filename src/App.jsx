import React, {Component} from "react";
import "./App.css";
import file_resume from './files/Resume.pdf'
import icon_blog from './images/blog.svg'
import icon_resume from './images/resume.svg'
import icon_email from './images/email.svg'
import icon_github from './images/github.svg'
import icon_linkedin from './images/linkedin.svg'
import img_thinking from './images/thinking.svg'


class ImageLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='image-link'>
                <a href={this.props.href}
                   target={this.props.noNewTab ? '_self' : '_blank'}>
                    <img src={this.props.img}
                         alt=''
                         className={this.props.rotating ? 'rotating-img' : ''}
                         onMouseOver={this.props.onMouseOverImage}
                         onMouseLeave={this.props.onMouseLeaveImage}/>
                </a>
            </div>);
    }
}

class ImageLinkWithText extends Component {
    constructor(props) {
        super(props);
        this.state = {text_visible: false}
        this.handleOnMouseOverImage = this.handleOnMouseOverImage.bind(this);
        this.handleOnMouseLeaveImage = this.handleOnMouseLeaveImage.bind(this);
    }

    handleOnMouseOverImage() {
        this.setState({text_visible: true});
    }

    handleOnMouseLeaveImage() {
        this.setState({text_visible: false})
    }

    render() {
        return (
            <div className='main-table-image-link'>
                <ImageLink
                    href={this.props.href}
                    img={this.props.img}
                    onMouseOverImage={this.handleOnMouseOverImage}
                    onMouseLeaveImage={this.handleOnMouseLeaveImage}/>
                <span style={{opacity: this.state.text_visible ? 1 : 0}}>
                    {this.props.text || ''}</span>
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
            <div className={this.props.style + ' github-workflow-badge'}>
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
            <div className="App">
                <div className='top-image-link'>
                    <ImageLink img={img_thinking}
                               href=''
                               rotating={true}
                               noNewTab={true}/>
                </div>
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
