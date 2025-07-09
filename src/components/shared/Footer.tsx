"use client";

import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const titleStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    display: "inline-block",
    borderBottom: "2px solid #FFD700", // Yellow underline
    paddingBottom: "4px",
    background: "linear-gradient(to right, #FFD700, #FF69B4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "2.5rem 1.5rem",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "6rem", // increased gap
        }}
      >
        {/* Section 1: About */}
        <div style={{ flex: "1 1 350px" }}>
          <h3 style={titleStyle}>SR Holistic Wellness</h3>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
            SR Holistic Wellness is your gateway to a harmonious life. We provide
            a sustainable and personalized experience through a blend of ancient
            healing practices and modern wellness therapies. Our mission is to
            help you find balance and rejuvenation by aligning your body, mind,
            and spirit.
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <FacebookIcon style={{ fontSize: 28 }} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <InstagramIcon style={{ fontSize: 28 }} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <LinkedInIcon style={{ fontSize: 28 }} />
            </a>
          </div>
        </div>

        {/* Section 2: Pages */}
        <div style={{ flex: "0 1 180px" }}>
          <h4 style={titleStyle}>Pages</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>
              <Link href="/">
                <span style={{ color: "#fff" }}>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span style={{ color: "#fff" }}>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span style={{ color: "#fff" }}>Services</span>
              </Link>
            </li>
            <li>
              <Link href="/partnership">
                <span style={{ color: "#fff" }}>Partnership</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span style={{ color: "#fff" }}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div style={{ flex: "0 1 200px" }}>
          <h4 style={titleStyle}>Contact</h4>
          <p style={{ margin: "0.5rem 0" }}>Phone: +91-9876543210</p>
          <p style={{ margin: "0.5rem 0" }}>Email: info@srwellness.com</p>
          <p style={{ margin: "0.5rem 0" }}>Location: Mumbai, India</p>
        </div>
      </div>

      <hr style={{ margin: "2rem 0", borderColor: "#444" }} />
      <p style={{ textAlign: "center", fontSize: "0.9rem", color: "#ccc" }}>
        © {new Date().getFullYear()} SR Holistic Wellness. All rights reserved.
      </p>
    </footer>
  );
}
