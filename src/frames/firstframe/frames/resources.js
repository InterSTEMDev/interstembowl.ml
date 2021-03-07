import React from "react"
import "../../../styles/style.css"
import { LoginSetupContainer } from "../../../containers/loginsetup"
import firebase from "firebase" 

export default class ResourcesFirstFrame extends React.Component {
    constructor() {
        super()
        this.state = {
            loggedIn: ''
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log('hello'); 
              this.setState({loggedIn: 'yes'})
            } else {
                this.setState({loggedIn: 'no'})
            }
          }.bind(this));
          
    }

    render() {
       
        
        return (
            <>
            <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
            {this.state.loggedIn == 'no' ? 
                    <>
                    <p>Please come back later for sample tests and a study list!</p>
                    </>
                : ( 
                    <>
                        <p>You must be logged in to access the content.</p>
                    </> 
                )}
            </section>
            </>
        )
    }
}