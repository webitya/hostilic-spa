"use client";

import { useEffect, useState } from "react";

const features = [
  {
    title: "End-to-End Spa Management",
    description:
      "From staffing, training, and marketing to guest services and operations — we handle it all for seamless functionality and top-tier guest satisfaction.",
  },
  {
    title: "Customized Wellness Solutions",
    description:
      "We design bespoke wellness programs tailored to your brand identity, guest demographics, and operational goals.",
  },
  {
    title: "Diverse Wellness Expertise",
    description:
      "Access to a wide range of services including massages, Ayurveda, facials, salon services, and wedding makeovers.",
  },
  {
    title: "In-House Training Academy",
    description:
      "We ensure your spa is staffed with certified, well-trained therapists ready to deliver a consistently high-quality experience.",
  },
  {
    title: "Revenue Growth Strategies",
    description:
      "Leverage our data-driven pricing, upselling techniques, and marketing plans to increase traffic and maximize profitability.",
  },
  {
    title: "Trusted Hospitality Partnerships",
    description:
      "We work with top hospitality brands like Taj, ITC, Radisson, Ramada, and Hilton, ensuring best-in-class service and operational standards.",
  },
  {
    title: "Dedicated Corporate Support",
    description:
      "Our backend team ensures smooth operations and strategic alignment with your wellness goals — freeing you to focus on guest experience.",
  },
  {
    title: "Spa Audits & Quality Control",
    description:
      "We conduct professional spa audits and implement quality control systems to maintain high service standards and consistent guest experience.",
  },
  {
    title: "Post-Launch Growth Support",
    description:
      "Continuous post-launch audits, training refreshers, and strategy updates to ensure your spa evolves and stays competitive.",
  },
];

export default function PartnerWithUsHolisticTherapiesPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#3e2712",
        padding: "10rem 1.5rem 3rem",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        color: "#ffffff",
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          color: "#ffd369",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Partnership Opportunities
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 2rem",
          color: "#ffffff",
        }}
      >
        Join hands with India’s fastest-growing spa management brand—SR Holistic Wellness Solutions.
        We collaborate with hotels, resorts, and wellness spaces to co-create unmatched spa experiences.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#5c3d2c",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: "#ffffff",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3 style={{ color: "#ffd369", marginBottom: "0.5rem" }}>{item.title}</h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{item.description}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <p style={{ fontWeight: "bold", color: "#ffd369", fontSize: "1.05rem" }}>
          Partner with us to craft signature spa journeys your guests will never forget.
        </p>
      </div>
    </section>
  );
}
