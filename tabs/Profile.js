import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // To handle redirection if needed
import "../style/Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    } else {
      // If no user data is found, redirect to create account page
      navigate("/create-account");
    }
  }, [navigate]);

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-info">
          <h2>Welcome, {user.name}!</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Password:</strong> {user.password}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
