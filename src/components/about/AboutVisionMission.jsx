"use client";

import { motion } from "framer-motion";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function AboutVisionMission() {
  return (
    <section
      className="vision-animated-bg"
      style={{
        padding: "3rem 1.5rem",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        textAlign: "center",
        color: "#604235",
        backgroundSize: "200% 200%",
        backgroundImage:
          "linear-gradient(135deg, #f3e2d3, #dfb78b, #b77e56, #7b4b1a)",
        animation: "moveBackground 18s ease-in-out infinite",
      }}
    >
      {/* Title with gradient yellowish color */}
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2rem",
          marginBottom: "2.5rem",
          fontWeight: 700,
          background: "linear-gradient(90deg, #FFD700, #FFF8DC)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Vision & Mission
      </motion.h2>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#fff5d1", // Yellowish background
            borderRadius: "12px",
            padding: "2rem",
            flex: "1 1 300px",
            textAlign: "center",
            border: "1px solid #df865b50",
          }}
        >
          <VisibilityIcon
            style={{
              fontSize: "2.2rem",
              color: "#df865b",
              marginBottom: "0.75rem",
            }}
          />
          <h3
            style={{
              color: "#27545b",
              fontSize: "1.25rem",
              marginBottom: "0.75rem",
              fontWeight: 600,
            }}
          >
            Vision
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            To be a sanctuary where healing meets luxury, and every guest
            discovers their path to inner balance, outer beauty, and complete
            well-being.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#fff5d1", // Yellowish background
            borderRadius: "12px",
            padding: "2rem",
            flex: "1 1 300px",
            textAlign: "center",
            border: "1px solid #df865b50",
          }}
        >
          <FavoriteBorderIcon
            style={{
              fontSize: "2.2rem",
              color: "#df865b",
              marginBottom: "0.75rem",
            }}
          />
          <h3
            style={{
              color: "#27545b",
              fontSize: "1.25rem",
              marginBottom: "0.75rem",
              fontWeight: 600,
            }}
          >
            Mission
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            To provide transformative spa and wellness experiences that nurture
            the mind, body, and spirit through personalized treatments, natural
            products, and compassionate service.
          </p>
        </motion.div>
      </div>

      {/* Background Animation */}
      <style jsx>{`
        @keyframes moveBackground {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
