'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section
      className="relative w-full"
      style={{
        background: 'linear-gradient(135deg, #fefaf4 0%, #fff 100%)',
        padding: '4rem 1rem',
        marginTop: '5rem',
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#a47148]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5b3e2e]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: '#5b3e2e' }}
          >
            Welcome to{' '}
            <span style={{ color: '#a47148' }}>
              SR Holistic Wellness
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-[#5f5248] leading-relaxed mb-8"
          >
            With over 13 years of experience, SR Holistic Wellness is dedicated
            to creating a sanctuary of relaxation, rejuvenation, and balance.
            We blend ancient healing practices with modern techniques, offering
            personalized treatments to restore harmony to your mind, body, and soul.
          </p>

          {/* Call-to-Actions */}
          <div className="flex flex-wrap gap-4">
            <Link href="https://srholisticwellness.com/about-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full font-medium text-white"
                style={{ backgroundColor: '#a47148', boxShadow: '0 4px 12px rgba(164,113,72,0.3)' }}
              >
                About Us
              </motion.button>
            </Link>

            <Link href="https://srholisticwellness.com/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full font-medium text-white"
                style={{ backgroundColor: '#5b3e2e', boxShadow: '0 4px 12px rgba(91,62,46,0.3)' }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/g6.webp"
            alt="Couple Massage at SR Holistic Wellness"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
