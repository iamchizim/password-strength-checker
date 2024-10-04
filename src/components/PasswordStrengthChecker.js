import React, { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    handleStrengthChange(event.target.value);
  };

  const handleStrengthChange = (password) => {
    if (password.length <= 3) {
      setStrength("weak");
    } else if (password.length >= 4 && password.length <= 7) {
      setStrength("medium");
    } else {
      setStrength("strong");
    }
  };

  return (
    <section>
      <h1>Password Strength Checker</h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleInputChange}
      />
      <p className={strength}>{strength.charAt(0).toUpperCase() + strength.slice(1)}</p>
    </section>
  );
};

export default PasswordStrengthChecker;

