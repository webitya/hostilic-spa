"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Heart, Leaf, Zap, Droplets } from "lucide-react"
import { therapiesData, generateCategorySlug } from "../data/therapies-data"

export default function HomePage() {
  const categoryIcons = {
    "HOLISTIC THERAPIES": { icon: Heart, color: "bg-rose-100 text-rose-600" },
    "BODY SCRUBS & WRAPS": { icon: Sparkles, color: "bg-purple-100 text-purple-600" },
    "FOOT CARE": { icon: Leaf, color: "bg-green-100 text-green-600" },
    "INSTANT INDULGENCE": { icon: Zap, color: "bg-yellow-100 text-yellow-600" },
    "FACIAL / FACE CARE": { icon: Droplets, color: "bg-blue-100 text-blue-600" },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-teal-800">Welcome to Wellness Spa</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover holistic healing and rejuvenation through our comprehensive range of therapeutic treatments and
            wellness services.
          </p>
          <Link
            href="/therapies"
            className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Therapies
          </Link>
        </motion.div>
      </section>

      {/* Categories Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Our Therapy Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {therapiesData.map((category, index) => {
            const categorySlug = generateCategorySlug(category.category)
            const iconData = categoryIcons[category.category] || { icon: Heart, color: "bg-teal-100 text-teal-600" }
            const IconComponent = iconData.icon

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/therapies/${categorySlug}`} className="block group">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 group-hover:border-teal-200 h-full">
                    <div className={`w-12 h-12 rounded-lg ${iconData.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-700 leading-tight">
                      {category.category}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{category.description}</p>
                    <div className="text-xs text-gray-500">
                      {category.items.length} {category.items.length === 1 ? "therapy" : "therapies"}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
