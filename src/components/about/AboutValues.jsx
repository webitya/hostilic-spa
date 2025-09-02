"use client"

import { motion } from "framer-motion"
import { Leaf } from "lucide-react"

export default function AboutValues() {
  const values = [
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
  ]

  return (
    <section
      className="relative overflow-hidden py-16 px-6 lg:py-20 text-center font-[Segoe UI,Roboto,Helvetica Neue,sans-serif]"
      style={{
        background: "linear-gradient(135deg, #F8F5F0 0%, #fff 100%)",
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-[-5%] w-40 h-40 bg-[#27545b]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[-5%] w-56 h-56 bg-[#a47148]/10 rounded-full blur-3xl" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold text-[#27545b]">
          Our Core Values
        </h2>
        <p className="max-w-2xl mx-auto text-[#5C5C5C] text-lg leading-relaxed mb-12">
          Guiding principles that shape every experience at SR Holistic Wellness.
        </p>
      </motion.div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-20">
        {values.map((val, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
            }}
            className="bg-white p-8 rounded-2xl border border-[#E0D9D0] text-center shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex justify-center items-center w-14 h-14 mx-auto bg-[#27545b]/10 rounded-full mb-4">
              <Leaf className="h-7 w-7 text-[#27545b]" />
            </div>
            <h3 className="text-xl font-semibold text-[#27545b] mb-2">
              {val.title}
            </h3>
            <p className="text-base leading-relaxed text-[#5C5C5C]">
              {val.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
