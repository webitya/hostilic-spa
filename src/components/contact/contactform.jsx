"use client";

import { useState, useEffect } from "react";

export default function CONTACTFORM() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      style={{
        background: "linear-gradient(to bottom right, #fff5ec, #ffe6d9)",
        padding: "3rem 1.5rem",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        color: "#604235",
        maxWidth: "480px",
        marginLeft: "2rem", // Align form to the left
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: "opacity 1s ease-in-out",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          color: "#f0b429", // Yellowish heading color
          marginBottom: "2rem",
          textAlign: "left",
        }}
      >
        Contact Us
      </h2>

      {submitted ? (
        <p style={{ textAlign: "left", fontSize: "1.1rem", color: "#27545b" }}>
          Thank you for submitting! We'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label>Message</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
            ></textarea>
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#c45634")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#df865b")
            }
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  fontSize: "1rem",
  marginTop: "0.25rem",
  borderRadius: "10px",
  border: "1px solid #ccc",
  outline: "none",
  transition: "border 0.3s ease",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
};

const buttonStyle = {
  backgroundColor: "#df865b",
  color: "#ffffff",
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "1rem",
  width: "100%",
  transition: "background-color 0.3s ease",
};
