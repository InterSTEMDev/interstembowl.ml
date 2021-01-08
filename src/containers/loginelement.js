import React, { useState } from "react"
import { LoginElement } from "../components/index" 
import "../styles/style.css" 


export function LoginElementContainer(props) {
    const {
        email, 
        setEmail, 
        password,
        setPassword,
        username,
        setUsername, 
        handleLogin, 
        handleSignup,
        hasAccount, 
        setHasAccount,
        emailError, 
        passwordError
    } = props; 

    return (
        <>
            <LoginElement.Label>Email</LoginElement.Label>
        
                    <input 
                        type="text" 
                        autoFocus 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                
                <LoginElement.Label>Password</LoginElement.Label>
               
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

             {!hasAccount ? (
                 <></>
             ) : (
                 <><LoginElement.Label>Username</LoginElement.Label>
                 <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
            />  </>

             )}

                <br></br><br></br>

                <LoginElement.ButtonContainer width="100%" >
                    <div className="btnContainer">                          
                        <button className="authButton" onClick={handleLogin}>Sign In</button>                        
                        <button className="authButton"><a href="https://nahn5f40e7j.typeform.com/to/dbH76h3J" target="_blank">Sign Up</a></button>                                     
                    </div>
                </LoginElement.ButtonContainer>
                <p className="errorMsg">{emailError}</p>
                <p className="errorMsg">{passwordError}</p>
                {/* 
                <LoginElement.ButtonContainer width="100%" >
                    <div className="btnContainer">
                        {!hasAccount ? (
                            <>
                                <button className="authButton" onClick={handleLogin}>Sign In</button>
                                <p className="errorMsg">{emailError}</p>
                                <p className="errorMsg">{passwordError}</p>
                                <p className="signP">
                                <span className="signSpan" onClick={() => { setHasAccount(!hasAccount);}}>Sign up</span></p>
                            </>
                        ) : (
                            <>
                                <button className="authButton" onClick={handleSignup}>Sign Up</button>
                                <p className="errorMsg">{passwordError}</p>
                                <p className="errorMsg">{emailError}</p>
                                <p className="signP">
                                <span className="signSpan" onClick={() => { setHasAccount(!hasAccount);}}>Sign In</span></p>
                            </>
                        )}
                    </div>
                </LoginElement.ButtonContainer>
                        */} 
                
        </>
    )
}