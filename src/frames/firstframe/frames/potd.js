import React from "react"
import "../../../styles/style.css"

export default class PotdFirstFrame extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <>
            <section className="c-paper intro c-paper--no-border-radius-bottom h-mb-0">
                <center><p>The POTD series has been temporarily discontinued. Thank you to everyone who has participated!</p></center>
            </section>
             </> 
        )
    }
}