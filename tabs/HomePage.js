import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../style/HomePage.css";

// Branch locations
const locations = [
  {
    id: 1,
    name: "Main Branch",
    lat: 40.712776,
    lng: -74.005974, // New York
    description: "Our flagship branch, located in downtown New York.",
  },
  {
    id: 2,
    name: "West Branch",
    lat: 34.052235,
    lng: -118.243683, // Los Angeles
    description: "A smaller branch serving the west coast in Los Angeles.",
  },
  {
    id: 3,
    name: "East Branch",
    lat: 41.878113,
    lng: -87.629799, // Chicago
    description: "An important hub for the midwest region in Chicago.",
  },
];

// Map styling
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Center the map to the USA
const center = {
  lat: 39.8283, // Central USA
  lng: -98.5795,
};

const HomePage = () => {
  const [showMap, setShowMap] = useState(false); // State to toggle map visibility
  const [selectedBranch, setSelectedBranch] = useState(null);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <video
          className="hero-video"
          src="src/assets/aks.mp4" // Update this path based on your assets folder
          autoPlay
          loop
          muted
        />
        <div className="hero-overlay">
          <h1>Welcome to AKS Fitness & Sports Academy</h1>
          <p>Explore our locations, coaches, and sports programs.</p>
          <button onClick={toggleMap} className="map-button">
            {showMap ? "Hide Branch Locations" : "View Branch Locations on Map"}
          </button>
        </div>
      </div>

      {/* Map Section */}
      {showMap && (
        <div className="map-container">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={4}
            >
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={{ lat: location.lat, lng: location.lng }}
                  onClick={() => setSelectedBranch(location)}
                />
              ))}

              {selectedBranch && (
                <InfoWindow
                  position={{
                    lat: selectedBranch.lat,
                    lng: selectedBranch.lng,
                  }}
                  onCloseClick={() => setSelectedBranch(null)}
                >
                  <div>
                    <h3>{selectedBranch.name}</h3>
                    <p>{selectedBranch.description}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      )}
    </div>
  );
};

export default HomePage;
