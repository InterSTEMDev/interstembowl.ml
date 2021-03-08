import React from "react"
import { LoginSetupContainer } from "./loginsetup"
import "../styles/style.css" 
import {Route, BrowserRouter as Router} from "react-router-dom" 
import {RootNav} from "../nav/root"
import {RootFirstFrame, PotdFirstFrame, ResourcesFirstFrame, LoginFirstFrame} from "../frames/firstframe/index"
import {PotdSecondFrame} from "../frames/secondframe/index" 
import {collapseNav} from "../nav/script"



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
            {/* <head>
              <link rel="shortcut icon" type="image/png" href="{{ site.baseurl }}/images/logo.png"/>
            </head> */}
            <Router>
            <div className="l-container">
							<section class="banner">
                  <header className="header">
                    <div className="header__title">
                        <img src={logo}/>
                        <h1 style={{fontSize: "50px"}}><span>Inter</span><span style={{color:"#f57f93"}}>STEM</span> Bowl</h1>
                    </div>
                  </header>
                <nav>
                  <div className="nav-primary-collapse">
                        <div className="collapse-btn" onClick={collapseNav} style={{display: "none"}}>
                            <svg viewBox="0 0 100 80" width="40" height="40">
                                <rect width="100" height="20"></rect>
                                <rect y="30" width="100" height="20"></rect>
                                <rect y="60" width="100" height="20"></rect>
                            </svg>
                        </div>
                        <div className="nav-primary" id="myTopnav">
                            <div className="nav-primary__links">
                                <Route path={["/", "/potd", "/resources", "/login"]} exact component={RootNav}/>
                            </div> 
                        </div>
                    </div>
                </nav>
							</section>
							
                <Route path="/" exact component={RootFirstFrame}/>
                <Route path="/potd" exact component={PotdFirstFrame}/>
                <Route path="/potd" exact component={PotdSecondFrame}/>
                <Route path="/resources" exact component={ResourcesFirstFrame}/>
                <Route path="/login" exact component={LoginFirstFrame}/>          
            </div>
            <footer className="c-footer">
                  <div className="c-footer__links">
                      <a href="https://www.instagram.com/inter.stem/" target="_blank" className="footerText">Instagram</a>
                      <a href="https://discord.com/invite/Y9KSFVZ" target="_blank" className="footerText">Discord</a>
                  </div>
                  <div className="c-footer__copyright footerText">
                      Developed by InterSTEM Tech Team.
                  </div>
                </footer> 
          </Router> 


    
            </> 
        )
    }
}