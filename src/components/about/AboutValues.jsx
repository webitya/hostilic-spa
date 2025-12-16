"use client"

import { motion } from "framer-motion"
import { Leaf } from "lucide-react"

export default function AboutValues() {
  const values = [
    {
      title: "100% Plant-Based Natural Essential Oils",
      desc: "Pure, premium botanical essential oils derived entirely from plants, completely free of synthetic additives, preservatives, or chemicals. These high-quality oils provide natural aroma, nourishment, and holistic benefits, enhancing every treatment with gentle, nature-inspired wellness.",
      image: "/images/core-values/essential-oils.png",
    },
    {
      title: "Professional, Skilled Spa Therapist",
      desc: "Highly trained and experienced spa therapists dedicated to delivering exceptional care, personalized treatments, and a deeply relaxing wellness experience.",
      image: "/images/core-values/spa-therapist.png",
    },
    {
      title: "100% Cold-Pressed Carrier Oil",
      desc: "Pure, nutrient-rich carrier oil extracted through gentle cold-pressing to preserve its natural vitamins, aroma, and skin-nourishing benefits. Ideal for massages, aromatherapy, and skincare treatments.",
      image: "/images/core-values/carrier-oil.png",
    },
    {
      title: "Quality Natural Beauty Products",
      desc: "Premium, nature-based beauty products crafted with pure ingredients for safe, effective, and nourishing skincare. Designed to elevate every treatment with exceptional quality and gentle, holistic care.",
      image: "/images/core-values/natural-products.png",
    },
    {
      title: "Commitment to Hygiene",
      desc: "We uphold the highest standards of cleanliness and sanitation to ensure a safe, comfortable, and worry-free experience. All tools, linens, and treatment spaces are thoroughly sterilized and maintained with strict hygiene protocols for your complete peace of mind.",
      image: "/images/core-values/hygiene.png",
    },
    {
      title: "Researched Therapies",
      desc: "Treatments developed with care, rooted in traditional wisdom, and enhanced by modern wellness insights. Each therapy is thoughtfully crafted to deliver safe, effective, and deeply relaxing results.",
      image: "/images/core-values/researched-therapies.png",
    },
    {
      title: "Certified Therapists",
      desc: "Our therapists are fully certified and trained to deliver safe, effective, and expertly guided treatments, ensuring you receive the highest standard of care and relaxation.",
      image: "/images/core-values/certified-therapist.jpg",
    },
  ]

  return (
    <section className="relative py-16 px-4 lg:py-24 bg-[#F9F7F5] font-[Segoe UI,Roboto,Helvetica Neue,sans-serif]">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#27545b] mb-4 font-serif">
          Our Core Values
        </h2>
        <p className="max-w-2xl mx-auto text-[#5C5C5C] text-lg leading-relaxed">
          Guiding principles that shape every experience at SR Holistic Wellness.
        </p>
      </motion.div>

      {/* Values Grid - Compact gap-4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1400px] mx-auto px-2">
        {values.map((val, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${val.image})` }}
            />

            {/* Premium Vertical Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end items-center text-center text-white pb-8">
              {/* Title - Moves up slightly */}
              <h3 className="text-xl font-serif font-medium mb-3 transform transition-transform duration-500 group-hover:-translate-y-2 drop-shadow-md tracking-wide">
                {val.title}
              </h3>

              {/* Gold Separator Line */}
              <div className="w-12 h-[2px] bg-[#a47148] mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />

              {/* Description - Physics-based slide up */}
              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]">
                <p className="text-sm leading-relaxed font-light text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {val.desc}
                </p>
              </div>
            </div>

            {/* Border Effect - Gold animated border */}
            <div className="absolute inset-0 border-[1px] border-[#a47148]/0 group-hover:border-[#a47148]/80 rounded-xl transition-colors duration-500 pointer-events-none" />
            <div className="absolute inset-4 border-[0.5px] border-white/0 group-hover:border-white/20 rounded-lg transition-colors duration-700 delay-100 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
