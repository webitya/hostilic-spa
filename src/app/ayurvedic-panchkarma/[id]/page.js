"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, IndianRupee, CheckCircle, Phone, Calendar } from "lucide-react"
import { findAyurvedicTherapyById } from "../../../components/data/ayurvedic-data"

export default function AyurvedicTherapyDetailPage() {
  const [therapy, setTherapy] = useState(null)
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      const foundTherapy = findAyurvedicTherapyById(params.id)
      setTherapy(foundTherapy)
    }
  }, [params.id])

  if (!therapy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-800 mb-4">Therapy Not Found</h1>
          <Link href="/ayurvedic-panchkarma" className="text-green-600 hover:text-green-800">
            ← Back to Ayurvedic Treatments
          </Link>
        </div>
      </div>
    )
  }

  const phoneNumber = "916306366978"
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in the ${therapy.name} therapy. Could you please provide more details or help me book a session?`,
  )
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img src={therapy.image || "/placeholder.svg"} alt={therapy.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-12 w-full">
            <Link
              href="/ayurvedic-panchkarma"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Ayurvedic Treatments
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{therapy.name}</h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {therapy.duration}
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee className="w-5 h-5" />
                {therapy.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">About This Therapy</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{therapy.description}</p>

              {therapy.subPoints && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Treatment Variations:</h3>
                  <ul className="space-y-2">
                    {therapy.subPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Benefits */}
            {therapy.tags && (
              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">Key Benefits</h2>
                <div className="flex flex-wrap gap-3">
                  {therapy.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Book This Therapy</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-green-800">{therapy.duration}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Price</span>
                  <div className="flex items-center gap-1 font-bold text-green-800 text-lg">
                    <IndianRupee className="w-4 h-4" />
                    {therapy.price}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Booking
                </a>

                <Link
                  href="/contact"
                  className="w-full bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </Link>
              </div>

              <p className="text-sm text-gray-600 mt-4 text-center">
                Our expert therapists will ensure your journey is deeply personalized and profoundly rejuvenating.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
