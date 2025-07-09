"use client";

import { useEffect, useState } from "react";

export default function Contactdet() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      style={{
        backgroundImage: "url('/candles.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "82vh",
        padding: "2.5rem 1.5rem",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        color: "#ffffff",
        textAlign: "left",
        backdropFilter: "brightness(0.8)",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.5s ease, opacity 1s ease",
        transform: loaded ? "scale(1)" : "scale(0.95)",
        opacity: loaded ? 1 : 0,
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          color: "#ffd369",
          marginBottom: "1.5rem",
          transition: "color 0.3s ease",
        }}
      >
        Contact Information
      </h2>

      <p style={paragraphStyle}>
        📞 <strong>Phone:</strong> +91 95301 55999
      </p>

      <p style={paragraphStyle}>
        📧 <strong>Email:</strong> srholisticspa@gmail.com
      </p>

      <p style={paragraphStyle}>
        💬 <strong>WhatsApp:</strong> Same as above number
      </p>

      <p style={paragraphStyle}>
        📷 <strong>Instagram:</strong>{" "}
        <a
          href="https://instagram.com/srholisticwellness"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffd369",
            textDecoration: "underline",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#ffd369")}
        >
          @srholisticwellness
        </a>
      </p>
    </section>
  );
}

const paragraphStyle = {
  marginBottom: "0.75rem",
  fontSize: "1rem",
  textShadow: "0 1px 3px rgba(0,0,0,0.6)",
  transition: "color 0.3s ease",
};
