"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { NotebookIcon as Lotus, Clock, IndianRupee, CheckCircle, ChevronDown } from "lucide-react"

import { therapiesData, generateTherapyId } from "../data/therapies-data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function SpaTherapiesPage() {
  const [activeCategory, setActiveCategory] = useState("HOLISTIC THERAPIES") // Initialize with the first category

  return (
    <div className="min-h-screen py-10 bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative pt-20 py-12 md:py-16 lg:py-20 text-center overflow-hidden">
        {/* Background elements for premium feel */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-teal-800 drop-shadow-sm">
            HOLISTIC THERAPIES
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-4 max-w-3xl mx-auto">Relax the Body, Mind, and Soul</p>
          <p className="text-sm md:text-base text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            The art of massage has been practiced for thousands of years, offering holistic benefits that nurture the
            body, mind, and soul. Massage therapy is a scientific manipulation of the soft tissues of the body,
            typically applied using fixed or varying pressure through the hands, fingers, elbows, knees, forearms, or
            specialized tools. With a wide variety of techniques and traditions, massage helps relieve muscle tension,
            enhance blood circulation, promote relaxation, and restore inner balance. Whether you seek stress relief,
            pain management, or pure relaxation, massage is a timeless path to total well-being.
          </p>
          <motion.button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Book Your Session
          </motion.button>
        </motion.div>
      </section>

      {/* Therapies Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Navigation (Tabs for larger screens) */}
        <div className="hidden md:flex justify-center gap-3 mb-8 flex-wrap">
          {therapiesData.map((category) => {
            const Icon = category.icon || Lotus
            return (
              <motion.button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.category
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-white text-gray-800 hover:bg-gray-50 hover:text-teal-600 border border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {category.category}
              </motion.button>
            )
          })}
        </div>

        {/* Category Filter (for smaller screens - Dropdown) */}
        <div className="md:hidden mb-8 relative">
          <div className="relative w-full">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-teal-600 text-base font-medium shadow-sm"
            >
              {therapiesData.map((category) => (
                <option key={category.category} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Therapy Cards Display (visible on all screens, filtered by activeCategory) */}
        <div>
          {therapiesData.map((category, categoryIndex) => {
            if (activeCategory === category.category) {
              return (
                <motion.div
                  key={category.category}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-800 drop-shadow-sm">
                    {category.category}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">{category.description}</p>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {category.items.map((therapy, therapyIndex) => (
                      <TherapyCard
                        key={therapyIndex}
                        therapy={therapy}
                        categoryIndex={categoryIndex}
                        therapyIndex={therapyIndex}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )
            }
            return null
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-800 text-white py-16 text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Wellness Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Book a personalized consultation or explore our packages to find your perfect path to harmony.
          </p>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-teal-600 text-white hover:bg-teal-700 px-8 py-3 shadow-lg hover:shadow-xl focus-visible:ring-teal-600">
            Contact Us Today
          </button>
        </motion.div>
      </section>
    </div>
  )
}

function TherapyCard({ therapy, categoryIndex, therapyIndex }) {
  const therapyId = generateTherapyId(therapy.name)

  return (
    <motion.div
      className="relative w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
      variants={itemVariants}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/holistic-therapies/${therapyId}`} className="block">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-500"></div>

        {/* Therapy Image */}
        <div className="relative w-full h-40 overflow-hidden">
          <img
            src={therapy.image || "/wellness-bg.jpg?height=200&width=300&query=spa therapy"}
            alt={therapy.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-white/20">
            <p className="flex items-center gap-1 text-xs font-semibold text-teal-700">
              <IndianRupee className="w-3 h-3 text-teal-500" />
              {therapy.price}
            </p>
          </div>
        </div>

        <div className="p-4 flex flex-col">
          {/* Card Header */}
          <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-teal-700 transition-colors duration-300">
            {therapy.name}
          </h3>
          <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
            <Clock className="w-3 h-3 text-teal-400" />
            <span>{therapy.duration}</span>
          </div>

          <p className="text-xs leading-relaxed text-gray-600 mb-3 line-clamp-2">
            {therapy.description.substring(0, 120)}...
          </p>

          {therapy.tags && therapy.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {therapy.tags.slice(0, 2).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="flex items-center gap-1 text-xs font-medium bg-teal-25 text-teal-600 px-2 py-0.5 rounded-full border border-teal-100"
                >
                  <CheckCircle className="w-2.5 h-2.5 text-teal-400" />
                  {tag}
                </span>
              ))}
              {therapy.tags.length > 2 && (
                <span className="text-xs text-gray-400 px-2 py-0.5">+{therapy.tags.length - 2} more</span>
              )}
            </div>
          )}

          <div className="mt-auto pt-1">
            <div className="text-xs text-gray-400 group-hover:text-teal-500 transition-colors duration-300 text-center">
              Click to view details →
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
