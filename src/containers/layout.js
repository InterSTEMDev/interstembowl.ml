import React from "react"
import { LoginSetupContainer } from "./loginsetup"
import "../styles/style.css" 
import {Route, BrowserRouter as Router} from "react-router-dom" 
import {RootNav} from "../nav/root"
import {MathFirstFrame} from "../firstframe/math"
import {RootFirstFrame} from "../firstframe/root"
import {PhysicsFirstFrame} from "../firstframe/physics" 
import {LoginFirstFrame} from "../firstframe/login" 

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
                        <h1 style={{fontSize: "50px"}}>InterSTEM Bowl & POTD</h1>
                    </div>
                </header>
                <nav>
                    <div className="nav-primary" id="myTopnav">
                        <div className="nav-primary__links">
                            <Route path={["/", "/math", "/physics", "/login"]} exact component={RootNav}/>
                        </div> 
                    </div>
                </nav>
                <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">

                        
                            <Route path="/" exact component={RootFirstFrame}/>
                            <Route path="/math" exact component={MathFirstFrame}/>
                            <Route path="/physics" exact component={PhysicsFirstFrame}/>
                            <Route path="/login" exact component={LoginFirstFrame}/>
                </section>
                <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </section>

                <footer className="c-footer">
                    <div className="c-footer__links">
                        <a href="https://www.instagram.com/cyberstartusa/" target="_blank" className="h-link-emphasis-light">Instagram</a>
                        <a href="https://twitter.com/cyberstartusa" target="_blank" className="h-link-emphasis-light">Twitter</a>
                    </div>
                    <div className="c-footer__copyright">
                        Developed by InterSTEM Tech Team.
                    </div>
                    </footer>
            </div>
            </Router> 


    
            </> 
        )
    }
}