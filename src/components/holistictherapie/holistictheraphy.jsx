"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Heart, Leaf, Zap, Droplets, ArrowRight, Star } from "lucide-react"
import { therapiesData, generateCategorySlug } from "../data/therapies-data"

export default function HomePage() {
  const categoryIcons = {
    "HOLISTIC THERAPIES": { icon: Heart, color: "bg-teal-100 text-teal-600", image: "/holistic-therapy-hero.jpg" },
    "BODY SCRUBS & WRAPS": { icon: Sparkles, color: "bg-orange-100 text-orange-600", image: "/body-scrub-spa.jpg" },
    "FOOT CARE": { icon: Leaf, color: "bg-green-100 text-green-600", image: "/foot-massage-spa.jpg" },
    "INSTANT INDULGENCE": { icon: Zap, color: "bg-purple-100 text-purple-600", image: "/instant-indulgence-spa.jpg" },
    "FACIAL / FACE CARE": { icon: Droplets, color: "bg-blue-100 text-blue-600", image: "/facial-care-spa.jpg" },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img src="/spa-hero-background.jpg" alt="Luxury spa environment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium">Premium Wellness Experience</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Revitalize Your
            <span className="text-orange-400"> Spirit</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pretty leading-relaxed opacity-90">
            Discover holistic healing and rejuvenation through our comprehensive range of therapeutic treatments and
            luxury wellness services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/therapies"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore All Therapies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#categories"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/20 transition-all duration-300"
            >
              View Categories
            </Link>
          </div>
        </motion.div>
      </section>

      <section id="categories" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 text-balance">Our Therapy Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Choose from our carefully curated selection of wellness treatments designed to restore balance and vitality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapiesData.map((category, index) => {
            const categorySlug = generateCategorySlug(category.category)
            const iconData = categoryIcons[category.category] || {
              icon: Heart,
              color: "bg-teal-100 text-teal-600",
              image: "/default-therapy.jpg",
            }
            const IconComponent = iconData.icon

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Link href={`/therapies/${categorySlug}`} className="block h-full">
                  {/* Card Image */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={iconData.image || "/placeholder.svg"}
                        alt={category.category}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Icon Badge */}
                      <div
                        className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${iconData.color} flex items-center justify-center backdrop-blur-sm`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Therapy Count Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {category.items.length} {category.items.length === 1 ? "therapy" : "therapies"}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                          {category.category}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed text-pretty">{category.description}</p>

                        {/* Popular Therapies Preview */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {category.items.slice(0, 2).map((therapy, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {therapy.name}
                            </span>
                          ))}
                          {category.items.length > 2 && (
                            <span className="text-xs text-teal-600 font-medium">+{category.items.length - 2} more</span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-teal-600 group-hover:text-orange-500 transition-colors">
                          Explore Category
                        </span>
                        <ArrowRight className="w-4 h-4 text-teal-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Most Popular Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience our most sought-after therapies loved by our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {therapiesData.slice(0, 3).map((category, index) => {
              const popularTherapy = category.items[0]
              const categorySlug = generateCategorySlug(category.category)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/therapies/${categorySlug}/${popularTherapy.id}`}
                    className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group border border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-8 h-8 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                          {popularTherapy.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{popularTherapy.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-teal-600">₹{popularTherapy.price}</span>
                          <span className="text-xs text-gray-500">{popularTherapy.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
