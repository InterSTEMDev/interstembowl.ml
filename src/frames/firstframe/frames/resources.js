import React from "react"
import "../../../styles/style.css"
import { LoginSetupContainer } from "../../../containers/loginsetup"
import firebase from "firebase" 

import calendar from "../../../../src/images/InterSTEMBowlCalendar.png"

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
            <div className="c-paper" style={{paddingBottom:0}}>
              <center><img src={calendar} id="calendar" style={{backgroundColor:"var(--lighter-color)"}}></img></center>
            </div>
            <hr></hr>

            <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
             <h2 className="section-title">Study Resources</h2>
                {this.state.loggedIn == 'no' ? 
                    <>
                    <b><p>NOTICE: If you have not filled out the binding registration form after creating an InterSTEM Bowl account, please do so ASAP <a href="https://docs.google.com/forms/d/e/1FAIpQLScILTXGyAxtIIyi9pYYxr4ddvdH1S9oerO6cQ5SbYjW22B-dQ/viewform" target="_blank">here!</a> Additional competition resources will be attached later this week.</p></b>
                    <a className="resource-btn" href="https://drive.google.com/file/d/16b_T0hV1kze3rblCPp5kWHQfMZmM9VIE/view?usp=sharing" target="_blank">Practice Test 1</a>
                    </>
                : ( 
                    <>
                        <center><p>You must be logged in to access study resources.</p></center>
                    </> 
                )}
            </section>
                       
            </>
        )
    }
}