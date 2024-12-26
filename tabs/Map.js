import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../style/Map.css";

// Example locations (latitude and longitude for various branches)
const locations = [
  {
    id: 1,
    name: "Main Branch",
    lat: 40.712776,
    lng: -74.005974, // New York
    description: "Our flagship branch, located in downtown.",
  },
  {
    id: 2,
    name: "West Branch",
    lat: 34.052235,
    lng: -118.243683, // Los Angeles
    description: "A smaller branch serving the west coast.",
  },
  {
    id: 3,
    name: "East Branch",
    lat: 41.878113,
    lng: -87.629799, // Chicago
    description: "An important hub for the midwest region.",
  },
];

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 39.8283, // Center of the USA
  lng: -98.5795,
};

const Map = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  return (
    <div className="map-container">
      <h2>Our Branch Locations</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
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
  );
};

export default Map;
