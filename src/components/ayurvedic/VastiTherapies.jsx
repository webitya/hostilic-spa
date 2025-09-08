"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, IndianRupee, CheckCircle, Leaf } from "lucide-react"
import { ayurvedicTreatments, generateAyurvedicId } from "../data/ayurvedic-data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
          <h1 className="text-xl font-semibold text-green-800 mb-2">Loading Ayurvedic Treatments...</h1>
          <p className="text-gray-500">Please wait while we prepare your wellness journey.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.section
        className="px-6 pt-28 pb-20 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Leaf className="w-8 h-8 text-green-600 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 tracking-tight">
              Ayurvedic Panchkarma
            </h1>
            <Leaf className="w-8 h-8 text-green-600 animate-bounce delay-200" />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Experience the wisdom of Ayurveda in serene, natural settings.  
            Our Panchkarma therapies cleanse, heal, and rejuvenate — restoring harmony to body, mind, and spirit.
          </motion.p>
        </div>
      </motion.section>

      {/* Treatments Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ayurvedic Treatments
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ayurvedicTreatments && ayurvedicTreatments.length > 0 ? (
            ayurvedicTreatments.map((treatment, i) => (
              <AyurvedicTreatmentCard key={i} treatment={treatment} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No treatments available at the moment.
            </div>
          )}
        </motion.div>
      </section>
    </div>
  )
}

function AyurvedicTreatmentCard({ treatment }) {
  if (!treatment?.name) return null
  const therapyId = generateAyurvedicId(treatment.name)

  return (
    <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} className="h-full">
      <Link href={`/ayurvedic-panchkarma/${therapyId}`} className="block h-full">
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-green-100 overflow-hidden flex flex-col h-full transition">
          {/* Image */}
          <div className="relative w-full h-52 shrink-0">
            <img
              src={
                treatment.image ||
                `/placeholder.svg?height=208&width=300&query=${encodeURIComponent(treatment.name)}`
              }
              alt={treatment.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-semibold text-green-800 mb-1">{treatment.name}</h3>

            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <Clock className="w-4 h-4 text-green-500" />
              <span>{treatment.duration}</span>
            </div>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{treatment.description}</p>

            {treatment.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {treatment.tags.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-xs font-medium bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-100"
                  >
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {tag}
                  </span>
                ))}
                {treatment.tags.length > 2 && (
                  <span className="text-xs text-gray-400">+{treatment.tags.length - 2} more</span>
                )}
              </div>
            )}

            {/* Price & CTA */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1 text-green-700 font-semibold">
                <IndianRupee className="w-4 h-4" />
                {treatment.price}
              </div>
              <span className="text-sm text-green-600 font-medium">View Details →</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
