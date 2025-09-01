"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, IndianRupee, CheckCircle, Phone, Calendar, MapPin, Star } from "lucide-react"

import { findTherapyById } from "../../../components/data/therapies-data"

export default function TherapyDetailPage() {
  const [therapy, setTherapy] = useState(null)
  const [category, setCategory] = useState("")
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      const result = findTherapyById(params.id)
      if (result) {
        setTherapy(result.therapy)
        setCategory(result.category)
      }
    }
  }, [params.id])

  if (!therapy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading therapy details...</p>
        </div>
      </div>
    )
  }

  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in the ${therapy.name} therapy. Could you please provide more details or help me book a session?`,
  )
  const whatsappLink = `https://wa.me/916306366978?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={therapy.image || "/wellness-bg.jpg?height=400&width=800&query=spa therapy"}
          alt={therapy.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Back Button */}
        <Link
          href="/holistic-therapies"
          className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Therapies
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{therapy.name}</h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{therapy.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-5 h-5" />
                  <span className="font-bold text-xl">{therapy.price}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Therapy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">{therapy.description}</p>
              </div>

              {/* Benefits */}
              {therapy.tags && therapy.tags.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {therapy.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200"
                      >
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky top-6"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Your Session</h3>

                {/* Pricing */}
                <div className="bg-teal-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Session Price</span>
                    <div className="flex items-center gap-1 text-2xl font-bold text-teal-800">
                      <IndianRupee className="w-6 h-6" />
                      {therapy.price}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{therapy.duration}</span>
                  </div>
                </div>

                {/* Contact Options */}
                <div className="space-y-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    Book via WhatsApp
                  </a>

        

               
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Professional therapists</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Premium organic products</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
