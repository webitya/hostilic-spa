'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#fefaf4',
        padding: '1rem 1rem 1rem',
        marginTop: '5rem',
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        <motion.h1
          transition={{ duration: 0.3 }}
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.2rem)',
            marginBottom: '1.5rem',
            fontWeight: 700,
            color: '#5b3e2e',
            lineHeight: '1.2',
          }}
        >
          Welcome to{' '}
          <span style={{ color: '#a47148' }}>
            SR Holistic Wellness
          </span>
        </motion.h1>

        <motion.p
          transition={{ duration: 0.3 }}
          style={{
            fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#5f5248',
          }}
        >
          With over 13 years of experience, SR Holistic Wellness is dedicated to
          creating a sanctuary of relaxation, rejuvenation, and balance. We blend
          ancient healing practices with modern wellness techniques, offering
          personalized treatments in serene environments to restore harmony to your
          mind, body, and soul.
        </motion.p>
      </motion.div>
    </section>
  )
}
