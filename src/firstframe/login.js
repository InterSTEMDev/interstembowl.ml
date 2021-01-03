import React from "react"
import "../styles/style.css"
import { LoginSetupContainer } from "../containers/loginsetup"

export class LoginFirstFrame extends React.Component {
    constructor() {
        super()
        this.state = {
         
        }
    }

    render() {
        return (
            <>

                <LoginSetupContainer/> 
            </>
        )
    }
}