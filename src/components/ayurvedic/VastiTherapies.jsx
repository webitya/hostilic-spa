"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, IndianRupee, CheckCircle, Leaf } from "lucide-react"
import { ayurvedicTreatments, generateAyurvedicId } from "../data/ayurvedic-data"

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

export default function AyurvedicPanchkarmaPage() {
  if (!ayurvedicTreatments || !Array.isArray(ayurvedicTreatments)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-800 mb-4">Loading Ayurvedic Treatments...</h1>
          <p className="text-gray-600">Please wait while we load the treatment data.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50">
      <motion.section
        className="px-6 pt-28 pb-16 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">Ayurvedic Panchkarma</h1>
            <Leaf className="w-8 h-8 text-green-600" />
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Experience the true age-old Ayurvedic therapies in peaceful traditional cottages. These therapies deeply
            relax and heal the soul and promote self-healing.
          </motion.p>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          AYURVEDIC TREATMENTS
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ayurvedicTreatments && ayurvedicTreatments.length > 0 ? (
            ayurvedicTreatments.map((treatment, index) => <AyurvedicTreatmentCard key={index} treatment={treatment} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No treatments available at the moment.</p>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  )
}

function AyurvedicTreatmentCard({ treatment }) {
  if (!treatment || !treatment.name) {
    return null
  }

  const therapyId = generateAyurvedicId(treatment.name)

  return (
    <motion.div className="group cursor-pointer h-full" variants={itemVariants}>
      <Link href={`/ayurvedic-panchkarma/${therapyId}`} className="block h-full">
        <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden h-full flex flex-col">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-amber-400"></div>

          <div className="relative w-full h-56 overflow-hidden">
            <img
              src={
                treatment.image ||
                `/placeholder.svg?height=224&width=300&query=${encodeURIComponent(treatment.name + " ayurvedic therapy") || "/placeholder.svg"}`
              }
              alt={treatment.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-green-800 mb-1.5 line-clamp-1">{treatment.name}</h3>

            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="font-medium">{treatment.duration}</span>
            </div>

            <p className="text-sm text-gray-700 mb-3 line-clamp-2 leading-relaxed">{treatment.description}</p>

            {treatment.tags && (
              <div className="flex flex-wrap gap-2 mb-3">
                {treatment.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="flex items-center gap-1.5 text-xs font-medium bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-100"
                  >
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {tag}
                  </span>
                ))}
                {treatment.tags.length > 2 && (
                  <span className="text-xs text-gray-400 px-3 py-1.5 font-medium">
                    +{treatment.tags.length - 2} more
                  </span>
                )}
              </div>
            )}

            <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
              <div className="flex items-center gap-1 text-lg font-bold text-green-800">
                <IndianRupee className="w-4 h-4" />
                {treatment.price}
              </div>
              <span className="text-sm text-gray-400 font-medium">View Details →</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
