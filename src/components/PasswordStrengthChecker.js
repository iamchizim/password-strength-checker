import React from "react";
import { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    handleStrengthChange(event.target.value)
  };
  const handleStrengthChange = (password) => {
    if (password.length <= 3) {
      setStrength("Weak");
    } else if (password.length >= 4 && password.length <= 7) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  return (
    <section>
      <h1>Password-Strength Checker</h1>
      <input type="password" placeholder="Enter password" value={password} onChange={handleInputChange} />
      <p>{strength}</p>
    </section>
  );
};

export default PasswordStrengthChecker;
