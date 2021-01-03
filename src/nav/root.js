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
        else if (window.location.href.endsWith("math")) {
            this.setState({activeClass: "math"})
        }
        else if (window.location.href.endsWith("physics")) {
            this.setState({activeClass: "physics"})
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
                    <a className={this.state.activeClass == "" ? "is-active" : ""} id="" onClick={this.handleRedirect}>POTD</a>   
                </li>
                <li>
                    <a className={this.state.activeClass == "math" ? "is-active" : ""} id="math" onClick={this.handleRedirect}>Math</a>   
                </li>
                <li>
                    <a className={this.state.activeClass == "physics" ? "is-active" : ""} id="physics" onClick={this.handleRedirect}>Physics</a>   
                </li>
                <li>
                    <a className={this.state.activeClass == "login" ? "is-active" : ""} id="login" onClick={this.handleRedirect}>Login</a>   
                </li>
            </ul>
            </>
        )
    }
}