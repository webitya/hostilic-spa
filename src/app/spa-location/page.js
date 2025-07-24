"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react" // Changed from MUI icon to Lucide React

export default function HomeLocation() {
  return (
    <section className="relative overflow-hidden py-12 px-6 md:py-24 lg:py-32 bg-white text-[#3A2F24] font-[Segoe UI,Roboto,Helvetica Neue,sans-serif]">
      {/* Green Gradient Bar at the top */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-[#6B9E40] to-[#27545b] z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        {/* Logo */}
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-[#7b4b1a] mb-4" // Dark brown/orange from image
        >
          Our Hospitality Partnerships
        </motion.h2>
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-center max-w-2xl mx-auto mb-10 text-[#5C5C5C]" // Soft dark gray/brown from image
        >
          SR Holistic Wellness proudly delivers luxury spa experiences within two iconic WelcomHeritage destinations in{" "}
          <span className="font-semibold">Jaisalmer, Rajasthan</span>.
        </motion.p>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mandir Palace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-md border border-[#E0D9D0]" // White background, subtle border
          >
            <Image
              src="/welcomheritage-mandir.jpg"
              alt="WelcomHeritage Mandir Palace"
              width={500}
              height={300}
              className="w-full aspect-video object-cover rounded-md mb-4"
            />
            <h3 className="text-[#27545b] font-semibold text-lg mb-2">
              {" "}
              {/* Dark teal/green from image */}
              Welcome to Heritage Mandir Palace
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-[#5C5C5C]">
              Operating since 2019, this 200‑year‑old heritage palace blends royal splendor with SR Holistic Wellness
              spa therapies for an unforgettable stay.
            </p>
            <a
              href="https://www.google.com/maps?q=WelcomHeritage+Mandir+Palace+Jaisalmer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-700" // Standard blue for links
            >
              <MapPin className="h-4 w-4" /> Jaisalmer, Rajasthan
            </a>
          </motion.div>
          {/* Mohangarh Fort */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-md border border-[#E0D9D0]" // White background, subtle border
          >
            <Image
              src="/welcomeheritage-mohangarh.jpg"
              alt="WelcomHeritage Mohangarh Fort"
              width={500}
              height={300}
              className="w-full aspect-video object-cover rounded-md mb-4"
            />
            <h3 className="text-[#27545b] font-semibold text-lg mb-2">
              {" "}
              {/* Dark teal/green from image */}
              Welcome to Heritage Mohangarh Fort
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-[#5C5C5C]">
              Since 2019, guests at this yellow‑sandstone fort immerse themselves in regal ambience complemented by our
              signature holistic spa rituals.
            </p>
            <a
              href="https://www.google.com/maps?q=WelcomHeritage+Mohangarh+Fort+Jaisalmer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-700" // Standard blue for links
            >
              <MapPin className="h-4 w-4" /> Jaisalmer, Rajasthan
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
