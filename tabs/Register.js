import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Register = () => {
  const { sportId } = useParams();
  const navigate = useNavigate();

  // Dummy sports data
  const sports = [
    { id: 1, name: "Football" },
    { id: 2, name: "Basketball" },
    { id: 3, name: "Tennis" },
    { id: 4, name: "Cricket" },
    { id: 5, name: "Swimming" },
    { id: 6, name: "Badminton" },
  ];

  const coaches = [
    "Coach A",
    "Coach B",
    "Coach C",
    "Coach D",
  ];

  // Find the selected sport based on the sportId parameter
  const selectedSport = sports.find((sport) => sport.id === parseInt(sportId));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    date: "",
    time: "",
    coach: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic (send data to backend or API)
    console.log("Registered for:", selectedSport.name, formData);
    alert(`Successfully registered for ${selectedSport.name}`);
    navigate("/");
  };

  return (
    <div style={styles.container}>
      {selectedSport ? (
        <>
          <h1 style={styles.header}>Register for {selectedSport.name}</h1>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <select
              name="coach"
              value={formData.coach}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select a Coach</option>
              {coaches.map((coach, index) => (
                <option key={index} value={coach}>
                  {coach}
                </option>
              ))}
            </select>
            <button type="submit" style={styles.button}>Register</button>
          </form>
        </>
      ) : (
        <p style={styles.error}>Sport not found. Please select a valid sport.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    background: "#f7f9fc",
    minHeight: "100vh",
  },
  header: {
    fontSize: "2rem",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "10px",
    background: "#ffffff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    marginBottom: "15px",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    background: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  error: {
    color: "#e74c3c",
    fontSize: "1.2rem",
  },
};

export default Register;
