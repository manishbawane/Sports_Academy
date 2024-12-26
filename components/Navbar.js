import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/AKS Logo.png"; // Replace with the correct logo path.

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav style={styles.navbar}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="Logo" style={styles.logo} />
          </Link>
        </div>

        {/* Links for Desktop View */}
        <ul style={styles.navLinksDesktop}>
          {navItems.map((item, index) => (
            <li key={index} style={styles.navItemDesktop}>
              <Link to={item.path} style={styles.navLinkDesktop}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu Icon for Mobile View */}
        <div style={styles.menuIcon} onClick={toggleMenu}>
          <div style={styles.menuLine}></div>
          <div style={styles.menuLine}></div>
          <div style={styles.menuLine}></div>
        </div>
      </nav>

      {/* Full-Screen Overlay Menu */}
      {isMenuOpen && (
        <motion.div
          style={styles.overlayMenu}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.ul style={styles.overlayList}>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
                }}
                transition={{ duration: 0.3 }}
                style={styles.overlayItem}
                onClick={toggleMenu} // Close menu on link click
              >
                <Link to={item.path} style={styles.overlayLink}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Search Bar in Menu */}
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchInput}
            />
            <button style={styles.searchButton}>Search</button>
          </div>

          {/* Close Button */}
          <motion.button
            onClick={toggleMenu}
            style={styles.closeButton}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            Close
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

// Navigation Items Array
const navItems = [
  { name: "Home", path: "/" },
  { name: "Book Appointment", path: "/book-appointment" },
  { name: "BMI History", path: "/bmi-history" },
  { name: "Payment", path: "/payment" },
  // { name: "Map", path: "/locations" },
  { name: "Meeting", path: "/onlinemeeting" },
  { name: "Contact", path: "/contact" },
  // { name: "About", path: "/about" },
];

// Styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    background: "#f7d486",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    height: "50px",
    cursor: "pointer",
  },
  navLinksDesktop: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  navItemDesktop: {
    fontSize: "1rem",
  },
  navLinkDesktop: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  menuIcon: {
    display: "none",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "20px",
    cursor: "pointer",
  },
  menuLine: {
    width: "25px",
    height: "3px",
    background: "#333",
    borderRadius: "5px",
  },
  overlayMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#2c3e50",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  overlayList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "center",
  },
  overlayItem: {
    marginBottom: "20px",
  },
  overlayLink: {
    color: "#f7d486",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    transition: "all 0.3s ease-in-out",
  },
  searchContainer: {
    marginTop: "30px",
    display: "flex",
    gap: "10px",
  },
  searchInput: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    width: "200px",
  },
  searchButton: {
    padding: "10px 20px",
    backgroundColor: "#f7d486",
    color: "#333",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    textTransform: "uppercase",
  },
};

export default Navbar;
