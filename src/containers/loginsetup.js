import React, { useEffect, useState } from "react"
import fire from "../fire"
import { LoginElementContainer } from "./loginelement"
import firebase from "firebase"
import { LoggedIn } from "./loggedin"




export function LoginSetupContainer() {

    var currentUser = ''; 

    const [user, setUser] = useState(localStorage.getItem("user"));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail(''); 
        setPassword(''); 
    }

    const clearErrors = () => {
        setEmailError('');
    }

    const handleLogin = () => {
        clearErrors(); 
        // clearInputs();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case "auth/invalid-email": 
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError("Email not found")
                        break;
                    case "auth/wrong-password":
                        setPasswordError("Wrong password")
                        break; 
                }
            })
    }

    const handleSignup = () => {
        clearErrors()
        // clearInputs();
        console.log(username);
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then (function(data) {
                console.log('uid', data.user.uid);
                firebase.database().ref('users/' + data.user.uid).set({
                    id: data.user.uid,
                    username: username,
                    email: email 
                })
            })
            .catch(err => {
                    console.log("error occured")
                    switch(err.code) {
                        case "auth/email-already-in-use":
                        case "auth/invalid-email":
                            setEmailError("Invalid email"); 
                            break;
                        case "auth/weak-password": 
                            setPasswordError("Weak password");   
                            break; 
                    }
            })
    }
    
    const handleLogout = () => {
        fire.auth().signOut();
        localStorage.clear()
        localStorage.setItem("user", ""); 
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs()
                setUser(user)
                localStorage.setItem("user", user)
                console.log(username);
                console.log(user.uid);
                
            } else {
                setUser(""); 
            }
        })
        
    }

    useEffect(() => {
        authListener(); 
    }, []) 
    

    if (user) {
        return (
            <>
                          <LoggedIn username={currentUser} handleLogout={handleLogout}/>
            </>
        )
    }
    else {
        return (
            <>
                <LoginElementContainer
                   email={email}
                   setEmail={setEmail}
                   password={password}
                   setPassword={setPassword}
                   username={username}
                   setUsername={setUsername}
                   handleLogin={handleLogin}
                   handleSignup={handleSignup}
                   hasAccount={hasAccount}
                   setHasAccount={setHasAccount}
                   emailError={emailError}
                   passwordError={passwordError} 
                />

            </>
        )
    }

}  
