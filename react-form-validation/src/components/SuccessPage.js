import React from "react";
import { useLocation } from "react-router-dom";
import "./Form.css";

function SuccessPage() {
  const location = useLocation();

  const data = location.state;

  return (
    <div className="container">
      <div className="success-box">
        <h2>Form Submitted Successfully</h2>

        <p><strong>First Name:</strong> {data.firstName}</p>
        <p><strong>Last Name:</strong> {data.lastName}</p>
        <p><strong>Username:</strong> {data.username}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.countryCode} {data.phone}</p>
        <p><strong>Country:</strong> {data.country}</p>
        <p><strong>City:</strong> {data.city}</p>
        <p><strong>PAN:</strong> {data.pan}</p>
        <p><strong>Aadhaar:</strong> {data.aadhaar}</p>
      </div>
    </div>
  );
}

export default SuccessPage;