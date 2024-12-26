import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CoachesTabs from "./CoachesTabs";
import "../style/HomePage.css";

const Home = () => {
  const sports = [
    { id: 1, name: "Football", icon: "⚽" },
    { id: 2, name: "Basketball", icon: "🏀" },
    { id: 3, name: "Tennis", icon: "🎾" },
    { id: 4, name: "Cricket", icon: "🏏" },
    { id: 5, name: "Swimming", icon: "🏊" },
    { id: 6, name: "Badminton", icon: "🏸" },
  ];

  const media = { type: "video", src: require("../assets/aks.mp4") }; // Ensure the path is correct

  return (
    <div className="page-container">
      {/* Hero Section - Single Video */}
      <div className="video-container">
        {media.type === "video" && (
          <video
            className="video-player"
            src={media.src}
            autoPlay
            loop
            muted
            controls
          />
        )}
      </div>

      {/* Coaches Section */}
      <section className="section-container coaches-section">
        <CoachesTabs />
      </section>

      {/* Sports Explore Section */}
      <section className="section-container sports-section">
        <h2 className="section-header">Explore Sports</h2>
        <div className="sports-grid">
          {sports.map((sport) => (
            <motion.div
              key={sport.id}
              className="sport-card"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="sport-icon">{sport.icon}</div>
              <h3 className="sport-name">{sport.name}</h3>
              <Link to={`/register/${sport.id}`} className="register-button">
                Register Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-container gallery-section">
        <h2 className="section-header">Our Achievements</h2>
        <div className="gallery-grid">
          {/* Add placeholder images */}
          <motion.div
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/600x400?text=Achievement+1"
              alt="Achievement 1"
              className="gallery-image"
            />
          </motion.div>
          <motion.div
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/600x400?text=Achievement+2"
              alt="Achievement 2"
              className="gallery-image"
            />
          </motion.div>
          <motion.div
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/600x400?text=Achievement+3"
              alt="Achievement 3"
              className="gallery-image"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} AKS Fitness & Cricket Academy. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
