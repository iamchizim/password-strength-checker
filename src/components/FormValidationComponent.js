import React from "react";
import { useState } from "react";

const FormValidationComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateUsername = (username) => {
    if (username.length < 6) {
      setUsernameError(true);
    }
  };
  const validatePassword = (password) => {
    const errors = [];
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
        errors.push(message);
      }
    });
  };
  const validateEmail = () => {
    
  }
  return (
    <section>
      <label>Username</label>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <label>Password</label>
      <input type="text" value={password} onChange={handlePasswordChange} />
      <label>Email</label>
      <input type="text" value={email} onChange={handleEmailChange} />
    </section>
  );
};

export default FormValidationComponent;
