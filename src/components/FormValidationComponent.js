import React from "react";
import { useState } from "react";

const FormValidationComponent = () =>{
    const [username, setUsername] = useState('')
    const[ password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [submissionStatus, setSubmissionStatus] = useState(false)

    const handleUsernameChange = (event) =>{
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }
    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const userNameCheck =() =>{
        
    }

    return(
        <section>
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsernameChange}/>
            <label>Password</label>
            <input type="text" value={password} onChange={handlePasswordChange}/>
            <label>Email</label>
            <input type="text" value={email} onChange={handleEmailChange}/>
        </section>
    )
}

export default FormValidationComponent;