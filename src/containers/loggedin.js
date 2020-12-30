import React, {useEffect, useState} from "react"
import firebase from "firebase"


export function LoggedIn (props) {
    const {handleLogout} = props
    const [username, setUsername] = useState(''); 
    const [welcome, setWelcome] = useState(''); 
    const [uid, setUid] = useState(''); 
    const [email, setEmail] = useState(''); 

    useEffect(() => {
 
    
        firebase.auth().onAuthStateChanged(function(user){
                firebase.database().ref('users/' + user.uid).on('value', snapshot => {
                    setUsername(snapshot.val().username);
                    setUid(user.uid); 
                    setEmail(user.email); 
                    setWelcome('Welcome, '); 
                })
        });
        

    }, [])

    return (
        
           <>
           <div>
            <p>{welcome}</p>
            <h1>{username}</h1>
            <br></br>
            <p>{email}</p>
            <p>{uid}</p>
        <br></br>
                    <button className="showMe" onClick={handleLogout}>Logout</button>
            </div>
           </>
    )
}