"use client";

export default function HomeWellness() {
  return (
    <section
      className="wellness-section"
      style={{
        backgroundImage: "url('/wellness-bg.jpg')",
        backgroundSize: "auto 100%",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "0% 50%",
        padding: "3rem 2rem",
        textAlign: "center",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            background: "linear-gradient(90deg, #FFD700, #FFDF70)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Our Vision & Mission
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 1.5rem auto",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ffe8a3";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          At SR Holistic Wellness, we envision a world where self-care is sacred and healing is woven into daily life.
          Our sanctuary blends traditional healing with modern spa therapies to help every guest discover inner
          balance, outer beauty, and complete well-being.
        </p>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ffe8a3";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Our mission is to provide transformative wellness experiences that nurture the mind, body, and spirit
          using personalized treatments, natural products, and compassionate care.
        </p>
      </div>

      {/* Background scroll animation */}
      <style jsx>{`
        .wellness-section {
          animation: scrollBackground 20s linear infinite;
        }

        @keyframes scrollBackground {
          from {
            background-position-x: 0%;
          }
          to {
            background-position-x: -100%;
          }
        }
      `}</style>
    </section>
  );
}
