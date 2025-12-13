"use client";

import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
        padding: "4rem 1rem",
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
            "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.95) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Logo & Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <img
              src="/logo1.png"
              alt="SR Holistic Wellness Logo"
              className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg object-cover"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-semibold text-[#7b4b1a] mb-4"
          >
            Our Hospitality Partnerships
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-center max-w-2xl mx-auto"
          >
            SR Holistic Wellness proudly delivers luxury spa experiences within two iconic WelcomHeritage
            destinations in <span className="font-semibold">Jaisalmer, Rajasthan</span>.
          </motion.p>
        </div>

        {/* Vertical List Layout */}
        <div className="flex flex-col gap-12">
          {/* Mandir Palace */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#f0d9b5] group"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Side - Left */}
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img
                  src="/welcomheritage-mandir.jpg"
                  alt="WelcomHeritage Mandir Palace"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Content Side - Right */}
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-serif text-[#7b4b1a] mb-3">
                  WelcomHeritage Mandir Palace
                </h3>
                <div className="w-16 h-1 bg-[#dcb688] mb-4" />

                <p className="text-[#604235] leading-relaxed mb-6">
                  Operating since 2019, this 200‑year‑old heritage palace blends royal
                  splendor with SR Holistic Wellness spa therapies for an unforgettable stay.
                  Experience regal hospitality combined with our signature calmness.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href="https://www.google.com/maps?q=WelcomHeritage+Mandir+Palace+Jaisalmer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#7b4b1a] hover:text-[#a47148] transition-colors"
                  >
                    <LocationOnIcon style={{ fontSize: 20 }} /> Jaisalmer, Rajasthan
                  </a>

                  <Link
                    href="/spa-location"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#a47148] hover:translate-x-1 transition-all"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mohangarh Fort */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#f0d9b5] group"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Side - Left */}
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img
                  src="/welcomeheritage-mohangarh.jpg"
                  alt="WelcomHeritage Mohangarh Fort"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Content Side - Right */}
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-serif text-[#7b4b1a] mb-3">
                  WelcomHeritage Mohangarh Fort
                </h3>
                <div className="w-16 h-1 bg-[#dcb688] mb-4" />

                <p className="text-[#604235] leading-relaxed mb-6">
                  Since 2019, guests at this yellow‑sandstone fort immerse themselves
                  in regal ambience complemented by our signature holistic spa rituals.
                  A perfect desert sanctuary for mind, body, and soul.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href="https://www.google.com/maps?q=WelcomHeritage+Mohangarh+Fort+Jaisalmer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#7b4b1a] hover:text-[#a47148] transition-colors"
                  >
                    <LocationOnIcon style={{ fontSize: 20 }} /> Jaisalmer, Rajasthan
                  </a>

                  <Link
                    href="/spa-location"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#a47148] hover:translate-x-1 transition-all"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
