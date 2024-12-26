import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Footer Content */}
      <div style={styles.container}>
        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li>
              <Link to="/" style={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/book-appointment" style={styles.link}>
                Book Appointment
              </Link>
            </li>
            <li>
              <Link to="/bmi-history" style={styles.link}>
                BMI History
              </Link>
            </li>
            <li>
              <Link to="/contact" style={styles.link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p style={styles.text}>Email: aksfitness@gmail.com</p>
          <p style={styles.text}>Phone: +91 8788422615</p>
        </div>

        {/* Social Media Links */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} AKS Fitness and Cricket Academy. All rights reserved.
      </div>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "20px 15px",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "0.9rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px 15px",
  },
  column: {
    flex: "1 1 200px",
    minWidth: "200px",
  },
  heading: {
    fontSize: "1rem",
    color: "#f7d486",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    marginBottom: "8px",
    display: "block",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#f7d486",
  },
  text: {
    marginBottom: "10px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    color: "#ecf0f1",
    fontSize: "1.2rem",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  iconHover: {
    color: "#f7d486",
  },
  copyright: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "0.85rem",
    color: "#bdc3c7",
  },
};

export default Footer;
