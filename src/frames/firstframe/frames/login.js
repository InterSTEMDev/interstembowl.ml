import React from "react"
import "../../../styles/style.css"
import { LoginSetupContainer } from "../../../containers/loginsetup"

export default class LoginFirstFrame extends React.Component {
    constructor() {
        super()
        this.state = {
         
        }
    }

    render() {
        return (
            <>
            <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
              <LoginSetupContainer/>     
              			  <p>Thank you for your interest in InterSTEM Bowl! To register and obtain an account, please fill out the form below.</p>
<a href="https://nahn5f40e7j.typeform.com/to/dbH76h3J" target="_blank">https://nahn5f40e7j.typeform.com/to/dbH76h3J</a>   
            </section>
    
            </>
        )
    }
}
