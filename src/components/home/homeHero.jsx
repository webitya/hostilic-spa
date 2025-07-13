"use client";

import { useRouter } from "next/navigation";

export default function HomeHero() {
  const router = useRouter();

  return (
    <section
      style={{
        background: "#FAF7F2",
        padding: "5rem 1rem 4rem",
        marginTop: "5rem",
        color: "#3e2712",
        borderRadius: "24px",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* LEFT TEXT */}
        <div style={{ flex: "1 1 500px", padding: "0 1rem" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              marginBottom: "1.5rem",
              lineHeight: 1.3,
              fontWeight: 700,
              color: "#3e2712",
            }}
          >
            Welcome to{" "}
            <span
              style={{
                color: "#CBA135",
                fontWeight: 800,
              }}
            >
              SR Holistic Wellness
            </span>
          </h1>

          <p
            style={{
              maxWidth: "720px",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#5C3D2E",
              marginBottom: "2.5rem",
            }}
          >
            SR Holistic Wellness is a sanctuary where healing meets luxury. With over 13 years of experience,
            we offer personalized therapies blending traditional healing with modern care to rejuvenate your
            body, calm your mind, and awaken your soul.
          </p>

          <button
            onClick={() => router.push("/holistic-therapies")}
            style={{
              backgroundColor: "#88B04B",
              color: "#ffffff",
              border: "none",
              padding: "0.85rem 2rem",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
            }}
          >
            Explore Our Services →
          </button>
        </div>

        {/* RIGHT VIDEO & QUOTE */}
        <div style={{ flex: "1 1 450px", padding: "0 1rem" }}>
          <div
            style={{
              position: "relative",
              maxWidth: "100%",
              height: "480px",
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/nature.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                right: "1rem",
                padding: "1rem 1.2rem",
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#3e2712",
                  marginBottom: "0.5rem",
                  lineHeight: 1.4,
                }}
              >
                “Discover the Power of Holistic Living”
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "#5C3D2E",
                  lineHeight: 1.6,
                }}
              >
                Every experience is designed to elevate your body, enlighten your mind, and awaken your soul.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
