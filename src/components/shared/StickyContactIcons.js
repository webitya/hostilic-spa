// src/components/shared/StickyContactIcons.js

"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

export default function StickyContactIcons() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 9999,
      }}
    >
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/916306366978"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
          textDecoration: "none",
        }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon fontSize="small" />
      </a>

      {/* Call Icon */}
      <a
        href="tel:+916306366978"
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "#007AFF",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
          textDecoration: "none",
        }}
        aria-label="Call Us"
      >
        <CallIcon fontSize="small" />
      </a>
    </div>
  );
}
