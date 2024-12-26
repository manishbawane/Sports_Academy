// src/components/OnlineMeeting.js

import React, { useState } from "react";
import Jitsi from "react-jitsi";
import "../style/OnlineMeeting.css"; // Add a separate CSS file for styling

const OnlineMeeting = () => {
  const [roomName, setRoomName] = useState("");
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);

  // Handle start meeting
  const handleStartMeeting = () => {
    if (roomName) {
      setIsMeetingStarted(true);
    } else {
      alert("Please enter a room name!");
    }
  };

  // Handle end meeting
  const handleEndMeeting = () => {
    setIsMeetingStarted(false);
    setRoomName("");
  };

  return (
    <div className="online-meeting-container">
      {!isMeetingStarted ? (
        <div className="start-meeting-section">
          <h2>Start a New Meeting</h2>
          <input
            type="text"
            className="room-name-input"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Enter a room name"
          />
          <button className="start-meeting-button" onClick={handleStartMeeting}>
            Start Meeting
          </button>
        </div>
      ) : (
        <div className="meeting-room">
          {/* Sidebar for participant list or other controls */}
          <div className="sidebar">
            <h3>Participants</h3>
            <ul>
              <li>You</li>
              {/* Dynamically add participants here */}
            </ul>
          </div>

          {/* Main meeting screen */}
          <div className="meeting-screen">
            <h2>Meeting Room: {roomName}</h2>
            <Jitsi
              roomName={roomName}
              config={{
                prejoinPageEnabled: false,
                defaultLanguage: "en",
                toolbarButtons: [
                  "microphone",
                  "camera",
                  "fullscreen",
                  "hangup",
                ],
              }}
              interfaceConfig={{
                filmStripOnly: false,
                SHOW_JITSI_WATERMARK: false,
                SHOW_WATERMARK_FOR_GUESTS: false,
                TOOLBAR_BUTTONS: [
                  "microphone",
                  "camera",
                  "fullscreen",
                  "hangup",
                ],
              }}
            />
          </div>

          {/* Footer for meeting controls */}
          <div className="meeting-controls">
            <button className="end-meeting-button" onClick={handleEndMeeting}>
              End Meeting
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineMeeting;
