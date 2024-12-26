import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./tabs/Home";
import Register from "./tabs/Register";
import CreateAccount from "./tabs/CreateAccount";
import BookAppointment from "./services/BookAppointment";
import BMIHistory from "./services/BMIHistory";
import Payment from "./services/Payment";
import Footer from "./components/Footer"; // Import the Footer component
import Profile from "./tabs/Profile";
import SportsTabs from "./tabs/SportsTabs";
import PaymentReceipt from "./tabs/PaymentReceipt";
import Map from "./tabs/Map";
import HomePage from "./tabs/HomePage";
import OnlineMeeting from "./services/OnlineMeeting";
import Chatbot from "react-chatbot-kit";
import CoachesTabs from "./tabs/CoachesTabs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/:sportId"
         element={<Register />} />
        <Route path="/create-account" 
        element={<CreateAccount />} />
        <Route path="/book-appointment" 
        element={<BookAppointment />} />
        <Route path="/bmi-history" 
        element={<BMIHistory />} />
        <Route path="/payment" 
        element={<Payment />} />
        <Route path="/profile" 
        element={<Profile />} />
        <Route path="/sportstabs"
         element={<SportsTabs />} />
        <Route path="/payment-receipt"
         element={<PaymentReceipt />} />
        <Route path="/locations"
         element={<Map />} />
        <Route path="/homepage" 
        element={<HomePage />} />
        <Route path="/onlinemeeting" 
        element={<OnlineMeeting />} />
        <Route path="/chatbot"
         element={<Chatbot />} />
        <Route path="/coachestabs"
         element={<CoachesTabs />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
