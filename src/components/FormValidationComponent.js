import React from "react";
import { useState, useEffect } from "react";

const FormValidationComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [result, setResult] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    validateUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const validateUsername = (username) => {
    let error = "";
    if (username.length < 6) {
      error = "Username must be at least 6 characters long.";
      setUsernameError(error);
    } else {
      setUsernameError("");
    }
  };

  const validatePassword = (password) => {
    const errorsMessages = [];
    const validationRules = [
      {
        rule: (pw) => pw.length >= 8,
        message: "Password must be at least 8 characters long.",
      },
      {
        rule: (pw) => /[A-Z]/.test(pw),
        message: "Password must contain at least one uppercase letter.",
      },
      {
        rule: (pw) => /[a-z]/.test(pw),
        message: "Password must contain at least one lowercase letter.",
      },
      {
        rule: (pw) => /\d/.test(pw),
        message: "Password must contain at least one number.",
      },
      {
        rule: (pw) => /[!@$#%^&*]/.test(pw),
        message: "Password must contain at least one special character.",
      },
    ];
    validationRules.forEach(({ rule, message }) => {
      if (!rule(password)) {
        setPasswordError(true);
        errorsMessages.push(message);
      }
    });
    setPasswordError(errorsMessages.join(" "));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Email is not in correct format");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!usernameError && !passwordError && !emailError) {
      setSubmissionStatus(true);
      alert("Form Submitted successfully!");
    } else {
      setSubmissionStatus(false);
    }
  };

  useEffect (() =>{
    const displayFormDetails = () => {
      if (submissionStatus === true) {
        setResult([username, password, email]);
      }
    };
    displayFormDetails()
  },[submissionStatus]) 

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
        <label>Password</label>
        <input type="text" value={password} onChange={handlePasswordChange} />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailChange} />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <button type="submit">Submit</button>
        <div>{result}</div>
      </form>
    </section>
  );
};

export default FormValidationComponent;