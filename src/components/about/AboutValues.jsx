"use client";

import { motion } from "framer-motion";
import SpaIcon from "@mui/icons-material/Spa";

export default function AboutValues() {
  return (
    <section
      className="about-values-section relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #FF69B4, #FFD700)",
        backgroundSize: "400% 400%",
        padding: "3rem 1.5rem",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        color: "#604235",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "2rem",
            background: "linear-gradient(to right, #FFD700, #df865b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          Our Core Values
        </h2>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {[
          {
            title: "Compassion",
            desc: "We treat every guest with care, empathy, and heartfelt service.",
          },
          {
            title: "Authenticity",
            desc: "We blend ancient wisdom with modern therapies rooted in genuine healing traditions.",
          },
          {
            title: "Excellence",
            desc: "We strive for the highest standards in wellness experiences and personalized service.",
          },
          {
            title: "Sustainability",
            desc: "We believe in mindful living — using natural products and nurturing the environment.",
          },
        ].map((val, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 16px rgba(223, 134, 91, 0.3)",
            }}
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "#fff8e1",
              padding: "1.5rem",
              borderRadius: "10px",
              border: "1px solid #df865b40",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <SpaIcon style={{ fontSize: "2rem", color: "#df865b" }} />
            <h3
              style={{
                marginTop: "0.75rem",
                marginBottom: "0.5rem",
                color: "#27545b",
                fontWeight: "600",
              }}
            >
              {val.title}
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
              {val.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Background animation */}
      <style jsx>{`
        @keyframes animatedGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .about-values-section {
          animation: animatedGradient 20s ease infinite alternate;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 1.6rem !important;
          }
          p {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
}
