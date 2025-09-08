"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { therapiesData, generateCategorySlug } from "../../components/data/therapies-data"

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

export default function AllTherapiesPage() {
  return (
    <div className="min-h-screen  bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-20 lg:pt-20 text-center overflow-hidden">
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
            ALL THERAPIES
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-4 max-w-3xl mx-auto">Comprehensive Wellness Solutions</p>
          <p className="text-sm md:text-base text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our complete range of therapeutic treatments designed to nurture your body, mind, and soul. From
            traditional massage therapies to ancient healing practices, discover the perfect treatment for your wellness
            journey.
          </p>
        </motion.div>
      </section>

      {/* Categories Overview Section */}
      <section className="max-w-7xl mx-auto px-6 py-7">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {therapiesData.map((category, index) => {
            const categorySlug = generateCategorySlug(category.category)
            return <CategoryCard key={index} category={category} categorySlug={categorySlug} />
          })}
        </motion.div>
      </section>
    </div>
  )
}

function CategoryCard({ category, categorySlug }) {
  return (
    <motion.div
      className="relative w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
      variants={itemVariants}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/therapies/${categorySlug}`} className="block">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-500"></div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">
            {category.category}
          </h3>

          <p className="text-sm leading-relaxed text-gray-600 mb-4">{category.description}</p>

          {/* Key Benefits */}
          {category.keytags && category.keytags.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Key Benefits:</h4>
              <div className="space-y-1">
                {category.keytags.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Therapy Count */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">
              {category.items.length} {category.items.length === 1 ? "Therapy" : "Therapies"}
            </span>
            <div className="text-sm text-teal-600 group-hover:text-teal-700 transition-colors duration-300 font-medium">
              Explore Category →
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
