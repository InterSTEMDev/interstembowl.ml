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
                <p>At the beginning of each week, five questions covering a range of topics will be posted onto this page. You have until the end of the week (Sunday, 11:59pm PST) to answer the questions to obtain full credit; half credit can be obtained until the end of the month. Fully correct solutions, or those demonstrating substantial thought, are worth 10 points; partial credit will be granted for evidence of effort or partially correct responses. Please submit your responses as a Google Doc to this <a href="https://forms.gle/DoqUWGM2Qun91qjL6" target="_blank">POTD submission form.</a>  </p>          
            </section>
            
             </> 
        )
    }
}