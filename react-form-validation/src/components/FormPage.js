import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function FormPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    countryCode: "+91",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
        if (!value) error = "First Name is required";
        break;

      case "lastName":
        if (!value) error = "Last Name is required";
        break;

      case "username":
        if (!value) error = "Username is required";
        break;

      case "email":
        if (!/\S+@\S+\.\S+/.test(value))
          error = "Enter valid email";
        break;

      case "password":
        if (value.length < 6)
          error = "Password must be at least 6 characters";
        break;

      case "phone":
        if (!/^[0-9]{10}$/.test(value))
          error = "Phone number must be 10 digits";
        break;

      case "country":
        if (!value) error = "Country is required";
        break;

      case "city":
        if (!value) error = "City is required";
        break;

      case "pan":
        if (!/[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(value))
          error = "Invalid PAN format";
        break;

      case "aadhaar":
        if (!/^[0-9]{12}$/.test(value))
          error = "Aadhaar must be 12 digits";
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.username &&
      formData.email &&
      formData.password &&
      formData.phone &&
      formData.country &&
      formData.city &&
      formData.pan &&
      formData.aadhaar &&
      Object.values(errors).every((err) => err === "")
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/success", {
      state: formData,
    });
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>React Registration Form</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errors.password && <p>{errors.password}</p>}

        <div className="phone-box">
          <input
            type="text"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="code"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />
        </div>

        {errors.phone && <p>{errors.phone}</p>}

        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
        />
        {errors.country && <p>{errors.country}</p>}

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        {errors.city && <p>{errors.city}</p>}

        <input
          type="text"
          name="pan"
          placeholder="PAN Number"
          onChange={handleChange}
        />
        {errors.pan && <p>{errors.pan}</p>}

        <input
          type="text"
          name="aadhaar"
          placeholder="Aadhaar Number"
          onChange={handleChange}
        />
        {errors.aadhaar && <p>{errors.aadhaar}</p>}

        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;