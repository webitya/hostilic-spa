"use client"
import { motion } from "framer-motion"
import { Leaf } from "lucide-react" // Changed to Lucide React icon

export default function AboutValues() {
  return (
    <section
      className="relative overflow-hidden py-10 px-6 md:py-16 lg:py-16 text-center text-[#3A2F24] font-[Segoe UI,Roboto,Helvetica Neue,sans-serif]"
      style={{
        backgroundColor: "#F8F5F0", // Solid light beige background from image
      }}
    >
      

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 font-bold text-[#27545b]">
          {" "}
          {/* Solid dark teal color for title */}
          Our Core Values
        </h2>
      </motion.div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-20">
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
              boxShadow: "0 8px 16px rgba(0,0,0,0.08)", // Subtle shadow on hover
            }}
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg border border-[#E0D9D0] text-center shadow-sm hover:shadow-lg"
          >
            <Leaf className="h-8 w-8 text-[#27545b]" /> {/* Leaf icon from Lucide React, dark teal color */}
            <h3 className="mt-3 mb-2 text-xl font-semibold text-[#27545b]">
              {" "}
              {/* Dark teal for title */}
              {val.title}
            </h3>
            <p className="text-base leading-relaxed text-[#5C5C5C]">
              {" "}
              {/* Soft dark gray/brown for description */}
              {val.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
