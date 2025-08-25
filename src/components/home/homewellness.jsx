"use client"

import { motion } from "framer-motion"

export default function HomeWellness() {
  return (
    <div className="bg-gradient-to-br from-stone-50 via-[#f9faf8] to-[#f9f8fc] overflow-hidden">
      {/* Full-Width Hero Section */}
      <section className="w-full py-12 md:py-16">
        <div className="w-full px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-light text-[#6b8471] mb-3"
            >
              Our Story
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-0.5 bg-[#b8ccbc] mx-auto rounded-full"
            />
          </div>

          {/* Story Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.25 } },
            }}
            className="mx-auto space-y-6 text-left"
          >
            {[
              "At SR Holistic Wellness, we believe that true luxury lies in authenticity, purity, and deep healing. Founded with a vision to redefine wellness, our sanctuary blends timeless holistic traditions with the elegance of modern care—delivering an experience that nourishes both body and soul.",
              "From the moment you enter SR, you are enveloped in a world of serenity, where every detail is designed with intention. Our therapies are rooted in ancient healing practices and carried out by highly trained, professional therapists who honor the individual needs of each guest.",
              "We use only the finest 100% pure, natural essential oils and premium plant-based beauty products, handcrafted or curated to ensure they meet the highest standards of purity, sustainability, and efficacy. Each ingredient we use tells a story—of nature, healing, and uncompromising quality.",
              "SR Holistic Wellness is more than a spa—it's a destination for those seeking deeper connection, authentic transformation, and radiant natural beauty. Whether you're here for healing, relaxation, or renewal, our commitment remains the same: luxury with purpose, care with integrity, and wellness that is truly holistic.",
            ].map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-stone-600 leading-relaxed font-light"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
