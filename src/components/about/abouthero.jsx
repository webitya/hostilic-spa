"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      className="about-hero relative overflow-hidden"
      style={{
        backgroundImage: "url('/aboutimage.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 50%",
        padding: "4rem 2rem",
        marginTop: "5rem", // ⬅️ Added margin to prevent overlap with fixed navbar
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "820px",
          margin: "0 auto",
        }}
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: "clamp(2rem, 6vw, 2.8rem)",
            marginBottom: "1rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Welcome to{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #FFD700, #FF69B4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            SR Holistic Wellness
          </span>
        </motion.h1>

        <motion.p
          whileHover={{ scale: 1.02, color: "#ffefd2" }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
            lineHeight: "1.6",
            maxWidth: "700px",
            margin: "0 auto",
            cursor: "pointer",
          }}
        >
          With over 13 years of experience, SR Holistic Wellness is dedicated to
          creating a sanctuary of relaxation, rejuvenation, and balance. We blend
          ancient healing practices with modern wellness techniques, offering
          personalized treatments in serene environments to restore harmony to your
          mind, body, and soul.
        </motion.p>
      </motion.div>

      {/* Background animation */}
      <style jsx>{`
        @keyframes bgPan {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .about-hero {
          animation: bgPan 40s linear infinite alternate;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
