import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../style/CreateAccount.css"; // Add styles for the page

const CreateAccount = () => {
  const navigate = useNavigate(); // Use navigate to redirect
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data in localStorage (could be in a backend for real-world apps)
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to profile page after account creation
    navigate("/profile");
  };

  return (
    <div className="create-account-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit} className="create-account-form">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
