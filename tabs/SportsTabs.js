import React, { useState } from "react";
import sportsData from "./SportsData"; // Import sports data
import "../style/SportsTabs.css"; // Import CSS

const SportsTabs = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab

  // Handle tab click
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // Get the active sport data
  const activeSport = sportsData.find((sport) => sport.id === activeTab);

  return (
    <div className="sports-tabs-container">
      {/* Tabs */}
      <div className="tabs">
        {sportsData.map((sport) => (
          <div
            key={sport.id}
            className={`tab ${activeTab === sport.id ? "active" : ""}`}
            onClick={() => handleTabClick(sport.id)}
          >
            {sport.name}
          </div>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="tab-content">
        <div className="sport-details">
          <img
            src={activeSport.imageUrl}
            alt={activeSport.name}
            className="sport-image"
          />
          <h3 className="sport-name">{activeSport.name}</h3>
          <p className="sport-description">{activeSport.description}</p>
          <p>
            <strong>Difficulty:</strong> {activeSport.difficulty}
          </p>
          <p>
            <strong>Benefits:</strong>
          </p>
          <ul className="sport-benefits">
            {activeSport.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SportsTabs;
