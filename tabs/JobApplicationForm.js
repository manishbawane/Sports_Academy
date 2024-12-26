import React, { useState } from "react";
import "../style/JobApplicationForm.css"; // Import form styling

const JobApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");
  const [requirenment, setRequire] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission by sending data to an API or server
    console.log({ name, email, resume, message });

    // Show submission confirmation message
    setIsSubmitted(true);
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div className="job-application-form">
      {isSubmitted ? (
        <div className="confirmation-message">
          <h3>Your application has been submitted successfully!</h3>
          <p>
            Thank you for applying for the coaching position. We will get back
            to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Apply for a Coaching Job</h3>

          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* <label htmlFor="resume">Phone</label> */}
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Number"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
          {/* <label htmlFor="resume">Resume</label> */}
          <input
            type="file"
            id="resume"
            name="resume"
            placeholder="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />

          <label htmlFor="message">Add Some Description of Yourself!</label>
          <textarea
            id="message"
              name="message"
              placeholder="Description:"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">Submit Application</button>
        </form>
      )}
    </div>
  );
};

export default JobApplicationForm;
