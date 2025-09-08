"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, IndianRupee, CheckCircle, ArrowLeft } from "lucide-react"
import { therapiesData } from "../../../components/data/therapies-data"

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

function findCategoryBySlug(slug) {
  return therapiesData.find(
    (category) =>
      category.category
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-") === slug,
  )
}

export default function CategoryPage() {
  const [category, setCategory] = useState(null)
  const params = useParams()

  useEffect(() => {
    if (params.category) {
      const foundCategory = findCategoryBySlug(params.category)
      setCategory(foundCategory)
    }
  }, [params.category])

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading category...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-2 bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative pt-20 py-12 md:py-16 lg:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Back Button */}
        <Link
          href="/therapies"
          className="absolute top-28 left-6 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg z-10"
        >
          <ArrowLeft className="w-4 h-4" />
          All Therapies
        </Link>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-teal-800 drop-shadow-sm mb-4">
            {category.category}
          </h1>
        </motion.div>
      </section>

      {/* Therapies Section */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {category.items.map((therapy, therapyIndex) => (
            <TherapyCard key={therapyIndex} therapy={therapy} categorySlug={params.category} />
          ))}
        </motion.div>
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

function TherapyCard({ therapy, categorySlug }) {
  const therapyId = therapy.id

  return (
    <motion.div
      className="relative w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
      variants={itemVariants}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/therapies/${categorySlug}/${therapyId}`} className="block">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-500"></div>

        <div className="relative w-full h-40 overflow-hidden">
          <img src={therapy.image || "/placeholder.svg"} alt={therapy.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-white/20">
            <p className="flex items-center gap-1 text-xs font-semibold text-teal-700">
              <IndianRupee className="w-3 h-3 text-teal-500" />
              {therapy.price}
            </p>
          </div>
        </div>

        <div className="p-4 flex flex-col">
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

          {therapy.bestFor && therapy.bestFor.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {therapy.bestFor.slice(0, 2).map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 text-xs font-medium bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full border border-teal-100"
                >
                  <CheckCircle className="w-2.5 h-2.5 text-teal-400" />
                  {item}
                </span>
              ))}
              {therapy.bestFor.length > 2 && (
                <span className="text-xs text-gray-400 px-2 py-0.5">+{therapy.bestFor.length - 2} more</span>
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
