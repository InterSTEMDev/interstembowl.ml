import React from "react"
import { LoginSetupContainer } from "./loginsetup"
import "../styles/style.css" 
import {Route, BrowserRouter as Router} from "react-router-dom" 
import {RootNav} from "../nav/root"
import {RootFirstFrame, ResourcesFirstFrame, LoginFirstFrame} from "../frames/firstframe/index"
import {RootSecondFrame} from "../frames/secondframe/index" 



import logo from "../images/logo.png";

export class LayoutContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            activePage: ''
        }
    }

    render() {
        return (
            <>
            <Router>
            <div className="l-container">
                    <header className="header">
                    <div className="header__title">
                        <img src={logo} />
                        <h1 style={{fontSize: "50px"}}><span>Inter</span><span style={{color:"#f57f93"}}>STEM</span> Bowl</h1>
                    </div>
                </header>
                <nav>
                    <div className="nav-primary" id="myTopnav">
                        <div className="nav-primary__links">
                            <Route path={["/", "/resources", "/login"]} exact component={RootNav}/>
                        </div> 
                    </div>
                </nav>
                <Route path="/" exact component={RootFirstFrame}/>
                <Route path="/resources" exact component={ResourcesFirstFrame}/>
                <Route path="/login" exact component={LoginFirstFrame}/>
       
                <Route path="/" exact component={RootSecondFrame}/>
                
                <footer className="c-footer">
                    <div className="c-footer__links">
                        <a href="https://www.instagram.com/inter.stem/" target="_blank" className="footerText">Instagram</a>
                        <a href="https://discord.com/invite/Y9KSFVZ" target="_blank" className="footerText">Discord</a>
                    </div>
                    <div className="c-footer__copyright footerText">
                        Developed by InterSTEM Tech Team.
                    </div>
                    </footer>
            </div>
            </Router> 


    
            </> 
        )
    }
}