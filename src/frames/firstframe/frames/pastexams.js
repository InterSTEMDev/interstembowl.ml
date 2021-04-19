import React from "react"
import "../../../styles/style.css"
import results from "../../../images/Spring2021Results.png"

export default class PastExamsFirstFrame extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <>
            <section className="c-paper colored-bg intro c-paper--no-border-radius-bottom h-mb-0">
              <h2 className="section-title">Released Exams</h2>
                <div className="btnContainer">
                  <a
                    className="resource-btn"
                    href="https://drive.google.com/file/d/16b_T0hV1kze3rblCPp5kWHQfMZmM9VIE/view?usp=sharing"
                    target="_blank"
                  >
                    Practice Test
                  </a>
                  <a className="resource-btn" href="https://drive.google.com/drive/folders/1BWgAbulOpklEqCjkUh4oLUiK4HIrPec_?usp=sharing" target="_blank">Spring 2021 InterSTEM Bowl Exams</a>
                </div>
            </section>
            <section className="c-paper c-paper--no-border-radius-bottom h-mb-0">
              <center>
                <img src={results} style={{width: "70%"}}></img>
              </center>
            </section>
             </> 
        )
    }
}