import React from "react"
import "../../../styles/style.css"
import aopsLogo from "../../../images/aops-logo.svg"

export default class RootFirstFrame extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <>
            
            <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
                <p>InterSTEM Bowl is a unique STEM competition that allows students to showcase their creativity and test their knowledge in a variety of STEM fields. Over $1000 in cash prizes will be split between 15+ winners. <a href="https://nahn5f40e7j.typeform.com/to/dbH76h3J">Registriation </a> (also on login page) for InterSTEM Bowl is currently open. The competition will be held in late March with the following categories: </p>
                <p>  - Quiz category: a science bowl-like exam on subjects such as biology, chemistry, physics, math, and computer science</p>
                <p>  - Video category: a video submission on a designated prompt graded on content and delivery</p>
                <p>  - Writing category: an article submission on a designated prompt graded on content, writing style, and topic adherence</p> 
                
            </section>
            <hr></hr>

            <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0" style={{paddingTop: 0}}>
                <h2 className="section-title">Our Sponsors</h2>
                <div className="sponsors-container">
                  <div className="sponsor">
                    <img src={aopsLogo}></img>
                  </div>  
                </div>                
            </section>
            
             </> 
        )
    }
}