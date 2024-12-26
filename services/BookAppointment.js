import React, { useState } from "react";
import sportsAndCoaches from "../services/sportsAndCoaches"; // Import sports and coaches data

import "../style/BookAppointment.css"; // Add custom styles for the page

const BookAppointment = () => {
  const [profileCreated, setProfileCreated] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [selectedSport, setSelectedSport] = useState("");
  const [selectedCoaches, setSelectedCoaches] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");
  const [description, setDescription] = useState("");
  const [availableCoaches, setAvailableCoaches] = useState([]);

  // Handle profile creation
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setProfileCreated(true);
  };

  // Handle sport selection and dynamically update coaches
  const handleSportChange = (e) => {
    const sport = e.target.value;
    setSelectedSport(sport);

    // Find coaches for the selected sport
    const sportData = sportsAndCoaches.find((s) => s.sport === sport);
    if (sportData) {
      setAvailableCoaches(sportData.coaches);
    } else {
      setAvailableCoaches([]); // Reset if no sport is selected
    }
  };

  // Handle coach selection (multiple selection allowed)
  const handleCoachSelection = (e) => {
    const { options } = e.target;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedCoaches(selected);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked for ${selectedSport} with ${selectedCoaches.join(", ")} on ${appointmentDate} at ${appointmentTime}\nReason: ${appointmentReason}\nDescription: ${description}`
    );
  };

  return (
    <div className="book-appointment-container">
      <h2>Book Your Appointment</h2>

      {!profileCreated ? (
        <form onSubmit={handleProfileSubmit} className="profile-form">
          <h3>Create Your Profile</h3>

          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Create Profile
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="book-appointment-form">
          <h3>Book Your Appointment</h3>

          {/* Sport Selection */}
          <div className="form-group">
            <label>Select Sport:</label>
            <select value={selectedSport} onChange={handleSportChange} required>
              <option value="">--Select Sport--</option>
              {sportsAndCoaches.map((sport, index) => (
                <option key={index} value={sport.sport}>
                  {sport.sport}
                </option>
              ))}
            </select>
          </div>

          {/* Coach Selection */}
          {selectedSport && (
            <div className="form-group">
              <label>Select Coaches/Trainers:</label>
              <select
                multiple
                value={selectedCoaches}
                onChange={handleCoachSelection}
                required
              >
                {availableCoaches.map((coach) => (
                  <option key={coach.id} value={coach.name}>
                    {coach.name} ({coach.experience})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Appointment Date */}
          <div className="form-group">
            <label>Select Appointment Date:</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>

          {/* Appointment Time */}
          <div className="form-group">
            <label>Select Appointment Time:</label>
            <input
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
          </div>

          {/* Appointment Reason */}
          <div className="form-group">
            <label>Reason for Appointment:</label>
            <select
              value={appointmentReason}
              onChange={(e) => setAppointmentReason(e.target.value)}
              required
            >
              <option value="">--Select Reason--</option>
              <option value="Training">Training</option>
              <option value="Skill Assessment">Skill Assessment</option>
              <option value="Consultation">Consultation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Appointment Description */}
          <div className="form-group">
            <label>Additional Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide any additional details for the appointment..."
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
