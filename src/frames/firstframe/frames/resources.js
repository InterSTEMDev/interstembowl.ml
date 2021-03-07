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
            {this.state.loggedIn == 'yes' ? 
                    <>
                    <b><p>If you have not filled out the binding registration form after creating an InterSTEM Bowl account, please do so ASAP <a href="https://docs.google.com/forms/d/e/1FAIpQLScILTXGyAxtIIyi9pYYxr4ddvdH1S9oerO6cQ5SbYjW22B-dQ/viewform" target="_blank">here!</a></p></b>
                    <p>Additional resources will be attached later this weekend.</p>
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