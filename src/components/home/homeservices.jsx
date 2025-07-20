"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react"; // elegant icon (requires lucide-react)

export default function HomeWellnessServices() {
  return (
    <section
      style={{
        backgroundImage: "url('/parallax-bg.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
        padding: "3rem 1rem",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        color: "#604235",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.65) 30%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <img
            src="/logo.jpg"
            alt="SR Holistic Wellness Logo"
            className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg object-cover"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-[#7b4b1a] mb-4"
        >
          Our Hospitality Partnerships
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          SR Holistic Wellness proudly delivers luxury spa experiences within two iconic WelcomHeritage
          destinations in <span className="font-semibold">Jaisalmer, Rajasthan</span>.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mandir Palace */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img
              src="/welcomheritage-mandir.jpg"
              alt="WelcomHeritage Mandir Palace"
              className="w-full aspect-video object-cover rounded-md mb-4"
            />
            <h3 className="text-[#27545b] font-semibold text-lg mb-2">
              WelcomHeritage Mandir Palace
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Operating since 2019, this 200‑year‑old heritage palace blends royal
              splendor with SR Holistic Wellness spa therapies for an unforgettable stay.
            </p>
            <a
              href="https://www.google.com/maps?q=WelcomHeritage+Mandir+Palace+Jaisalmer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline decoration-2 underline-offset-4 transition-all"
            >
              <MapPin className="w-4 h-4" /> View on Map
            </a>
          </motion.div>

          {/* Mohangarh Fort */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img
              src="/welcomeheritage-mohangarh.jpg"
              alt="WelcomHeritage Mohangarh Fort"
              className="w-full aspect-video object-cover rounded-md mb-4"
            />
            <h3 className="text-[#27545b] font-semibold text-lg mb-2">
              WelcomHeritage Mohangarh Fort
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Since 2019, guests at this yellow‑sandstone fort immerse themselves
              in regal ambience complemented by our signature holistic spa rituals.
            </p>
            <a
              href="https://www.google.com/maps?q=WelcomHeritage+Mohangarh+Fort+Jaisalmer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline decoration-2 underline-offset-4 transition-all"
            >
              <MapPin className="w-4 h-4" /> View on Map
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
