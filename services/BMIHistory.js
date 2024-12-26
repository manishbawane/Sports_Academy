import React, { useState } from "react";
import jsPDF from "jspdf";
import "../style/BMHistory.css";

const BMHistory = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    phone: "",
    email: "",
  });
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [history, setHistory] = useState([]);
  const [goal, setGoal] = useState("");
  const [hasProfile, setHasProfile] = useState(false);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      const roundedBMI = calculatedBMI.toFixed(2);

      setBmi(roundedBMI);

      let category = "";
      if (calculatedBMI < 18.5) {
        category = "Underweight";
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        category = "Normal weight";
      } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }

      setBmiCategory(category);

      const newEntry = {
        weight,
        height,
        gender,
        bmi: roundedBMI,
        category,
        medicalHistory,
        goal,
      };

      setHistory((prevHistory) => [newEntry, ...prevHistory]);
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setGender("male");
    setMedicalHistory("");
    setBmi(null);
    setBmiCategory("");
    setGoal("");
  };

  const handleProfileCreation = () => {
    if (
      profile.name &&
      profile.age &&
      profile.bloodGroup &&
      profile.phone &&
      profile.email
    ) {
      setHasProfile(true);
    } else {
      alert("Please fill in all profile details.");
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("BMI Report", 10, 10);
    doc.text(`Name: ${profile.name}`, 10, 20);
    doc.text(`Age: ${profile.age}`, 10, 30);
    doc.text(`Blood Group: ${profile.bloodGroup}`, 10, 40);
    doc.text(`Phone: ${profile.phone}`, 10, 50);
    doc.text(`Email: ${profile.email}`, 10, 60);
    doc.text(`Weight: ${weight} kg`, 10, 70);
    doc.text(`Height: ${height} cm`, 10, 80);
    doc.text(`Gender: ${gender}`, 10, 90);
    doc.text(`BMI: ${bmi}`, 10, 100);
    doc.text(`Category: ${bmiCategory}`, 10, 110);
    if (medicalHistory) doc.text(`Medical History: ${medicalHistory}`, 10, 120);
    if (goal) doc.text(`Goal: ${goal === "gain" ? "Gain Weight" : "Lose Weight"}`, 10, 130);
    doc.save("BMI_Report.pdf");
  };

  return (
    <div className="bmi-history-container">
      {!hasProfile ? (
        <div className="profile-creation-container">
          <h1>Create Your Profile</h1>
          <div className="form-group">
            <label htmlFor="name" className="bmi-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={profile.name}
              onChange={(e) =>
                setProfile((prevProfile) => ({
                  ...prevProfile,
                  name: e.target.value,
                }))
              }
              className="bmi-input"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age" className="bmi-label">
              Age:
            </label>
            <input
              type="number"
              id="age"
              value={profile.age}
              onChange={(e) =>
                setProfile((prevProfile) => ({
                  ...prevProfile,
                  age: e.target.value,
                }))
              }
              className="bmi-input"
              placeholder="Enter your age"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="blood-group" className="bmi-label">
              Blood Group:
            </label>
            <input
              type="text"
              id="blood-group"
              value={profile.bloodGroup}
              onChange={(e) =>
                setProfile((prevProfile) => ({
                  ...prevProfile,
                  bloodGroup: e.target.value,
                }))
              }
              className="bmi-input"
              placeholder="Enter your blood group"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="bmi-label">
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              value={profile.phone}
              onChange={(e) =>
                setProfile((prevProfile) => ({
                  ...prevProfile,
                  phone: e.target.value,
                }))
              }
              className="bmi-input"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="bmi-label">
              Email ID:
            </label>
            <input
              type="email"
              id="email"
              value={profile.email}
              onChange={(e) =>
                setProfile((prevProfile) => ({
                  ...prevProfile,
                  email: e.target.value,
                }))
              }
              className="bmi-input"
              placeholder="Enter your email address"
              required
            />
          </div>
          <button onClick={handleProfileCreation} className="create-profile-button">
            Create Profile
          </button>
        </div>
      ) : (
        <div>
          <h1 className="bmi-heading">BMI Calculator</h1>
          <div className="bmi-form-container">
            <div className="form-group">
              <label htmlFor="weight" className="bmi-label">
                Weight (kg):
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bmi-input"
                placeholder="Enter your weight"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="height" className="bmi-label">
                Height (cm):
              </label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bmi-input"
                placeholder="Enter your height"
                required
              />
            </div>
            <div className="form-group">
              <label className="bmi-label">Gender:</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bmi-select"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-actions">
              <button onClick={calculateBMI} className="calculate-button">
                Calculate BMI
              </button>
              <button onClick={resetForm} className="reset-button">
                Reset
              </button>
            </div>
            {bmi && (
              <div className="bmi-result-container">
                <h2>Your BMI: {bmi}</h2>
                <p>
                  Category: <strong>{bmiCategory}</strong>
                </p>
                <button onClick={downloadPDF} className="download-button">
                  Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="history-section">
        <h2>BMI History</h2>
        {history.length > 0 ? (
          <div className="history-list">
            {history.map((entry, index) => (
              <div key={index} className="history-item">
                <div className="history-item-header">
                  <p>
                    <strong>Weight:</strong> {entry.weight} kg
                  </p>
                  <p>
                    <strong>Height:</strong> {entry.height} cm
                  </p>
                </div>
                <div className="history-item-body">
                  <p>
                    <strong>Gender:</strong>{" "}
                    {entry.gender === "male" ? "Male" : "Female"}
                  </p>
                  <p>
                    <strong>BMI:</strong> {entry.bmi}
                  </p>
                  <p>
                    <strong>Category:</strong> {entry.category}
                  </p>
                  {entry.medicalHistory && (
                    <p>
                      <strong>Medical History:</strong>{" "}
                      {entry.medicalHistory}
                    </p>
                  )}
                  {entry.goal && (
                    <p>
                      <strong>Goal:</strong>{" "}
                      {entry.goal === "gain"
                        ? "Gain Weight"
                        : "Lose Weight"}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No BMI history available. Calculate your BMI to see history!</p>
        )}
      </div>
    </div>
  );
};

export default BMHistory;
