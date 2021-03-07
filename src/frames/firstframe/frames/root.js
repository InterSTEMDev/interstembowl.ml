import React from "react"
import "../../../styles/style.css"

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
                <p>InterSTEM Bowl is a unique STEM competition that allows students to showcase their creativity and test their knowledge in a variety of STEM fields. The competition will be held in late March with the follow categories: </p>
                <p>  - Quiz category: a science bowl-like exam on subjects such as biology, chemistry, physics, mathematics, and computer science</p>
                <p>  - Video category: a video submission on a designated prompt graded on content and delivery</p>
                <p>  - Writing category: an article submission on a designated prompt graded on content, writing style, and topic</p> 
                
            </section>
            
             </> 
        )
    }
}