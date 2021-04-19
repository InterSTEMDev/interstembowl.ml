import React from "react"
import "../styles/style.css"

export class RootNav extends React.Component {
    constructor() {
        super()
        this.state = {
            activeClass: ""
        }
    }

    handleRedirect = (e) => {
        this.props.history.push('/' + e.target.id); 
        this.setState({activeClass: e.target.id}) 
    }

    componentDidMount() {
        if (window.location.href.endsWith("/")) {
            this.setState({activeClass: ""})
        }
        else if (window.location.href.endsWith("resources")) {
            this.setState({activeClass: "resources"})
        }
        else if (window.location.href.endsWith("pastexams")) {
          this.setState({activeClass: "pastexams"})
      }
        else if (window.location.href.endsWith("login")) {
            this.setState({activeClass: "login"})
        }
    }

    render() {
        return (
            <>
            <ul>
                <li>
                    <a className={this.state.activeClass === "" ? "is-active" : ""} id="" onClick={this.handleRedirect}>About</a>   
                </li>
                <li>
                    <a className={this.state.activeClass === "potd" ? "is-active" : ""} id="potd" onClick={this.handleRedirect}>POTD</a>   
                </li>
                <li>
                    <a className={this.state.activeClass === "resources" ? "is-active" : ""} id="resources" onClick={this.handleRedirect}>Resources</a>   
                </li>
                <li>
                    <a className={this.state.activeClass === "pastexams" ? "is-active" : ""} id="pastexams" onClick={this.handleRedirect}>Past Exams</a>   
                </li>
                <li>
                    <a className={this.state.activeClass === "login" ? "is-active" : ""} id="login" onClick={this.handleRedirect}>Login</a>   
                </li>
            </ul>
            </>
        )
    }
}