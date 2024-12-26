import React, { useState } from "react";
import "../style/CoachesTabs.css"; // Ensure updated styles are applied
import JobApplicationForm from "./JobApplicationForm";

// Import coach photos from the assets folder
// import AmitPhoto from "";
import ShwetaPhoto from "../assets/Shweta.jpg";
import ShubhamPhoto from "../assets/shubham.jpg";
import AniketPhoto from "../assets/Aniket.jpg";

const CoachesTabs = () => {
  const [activeCoach, setActiveCoach] = useState(null);
  const [isJobApplicationVisible, setIsJobApplicationVisible] = useState(false);

  const coaches = [
    {
      id: 1,
      name: "Amit Kadam",
      experience: "21 years of coaching Cricket at various levels.",
      qualifications: "Certified Cricket Coach (A-Level), Fitness Trainer, Physiotherapist & Rehabilitation.",
      bio: "Amit Kadam has worked with both professional and amateur Cricket teams and has helped many players improve their technical and tactical skills. He also served India for 5/6 years.",
      // photo: AmitPhoto, // Use imported photo
    },
    {
      id: 2,
      name: "Shweta Kadam",
      experience: "10 years of coaching Cricket and Badminton, specializing in strategy and teamwork.",
      qualifications: "Certified Cricket Coach, Master's in Sports Psychology, Dietician.",
      bio: "Shweta uses her background in sports psychology to motivate and guide athletes.",
      photo: ShwetaPhoto, // Use imported photo
    },
    {
      id: 3,
      name: "Shubham Gaikwad",
      experience: "4 years of Cricket, Basketball, Swimming, and Fitness coaching.",
      qualifications: "Professional Instructor, Certified Personal Trainer.",
      bio: "Shubham is known for his patient coaching style and technical expertise.",
      photo: ShubhamPhoto, // Use imported photo
    },
    {
      id: 4,
      name: "Aniket Pawar",
      experience: "5 years of Tennis, Cricket, and Football coaching.",
      qualifications: "Professional Tennis Instructor, Certified Trainer.",
      bio: "Aniket builds strong mental and physical abilities in his athletes.",
      photo: AniketPhoto, // Use imported photo
    },
  ];

  const handleCoachClick = (coach) => {
    setActiveCoach(coach);
  };

  const handleApplyForJob = () => {
    setIsJobApplicationVisible(true);
  };

  return (
    <div className="coaches-section">
      <h2 className="section-header">Our Expert Coaches</h2>

      <div className="coaches-grid">
        {coaches.map((coach) => (
          <div
            key={coach.id}
            className={`coach-card ${
              activeCoach && activeCoach.id === coach.id ? "active-card" : ""
            }`}
            onClick={() => handleCoachClick(coach)}
          >
            <img src={coach.photo} alt={coach.name} className="coach-photo" />
            <h3 className="coach-name">{coach.name}</h3>
            <p className="coach-experience">{coach.experience}</p>
          </div>
        ))}
      </div>

      {activeCoach && (
        <div className="coach-details-container">
          <h3>{activeCoach.name}</h3>
          <img
            src={activeCoach.photo}
            alt={activeCoach.name}
            className="details-photo"
          />
          <p>
            <strong>Experience:</strong> {activeCoach.experience}
          </p>
          <p>
            <strong>Qualifications:</strong> {activeCoach.qualifications}
          </p>
          <p>
            <strong>Bio:</strong> {activeCoach.bio}
          </p>
          <button className="apply-btn" onClick={handleApplyForJob}>
            Apply for Coaching Job
          </button>
        </div>
      )}

      {isJobApplicationVisible && <JobApplicationForm />}
    </div>
  );
};

export default CoachesTabs;
