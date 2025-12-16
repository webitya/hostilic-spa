'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Play, Sparkles, Heart, Leaf, Star, CheckCircle2 } from 'lucide-react'

export default function HomeHero() {
  const router = useRouter()

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section
      className="relative w-full pt-6 lg:pt-10 overflow-hidden bg-[#fffaf5]"
      style={{ minHeight: '90vh' }}
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#f8efe6] rounded-full blur-[60px] lg:blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#fdf1e3] rounded-full blur-[60px] lg:blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[auto] lg:min-h-[80vh]">

          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 lg:space-y-8 mt-4 lg:mt-0"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-4 py-1.5 lg:px-5 lg:py-2 rounded-full border border-[#d6c0a8] shadow-sm">
                <Star className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-[#a47148] text-[#a47148]" />
                <span className="text-xs lg:text-sm text-[#8c6b4a] font-medium tracking-wide">13+ Years of Excellence</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl lg:text-7xl font-serif text-[#2c2018] leading-[1.15] lg:leading-[1.1]">
                Welcome to <br />
                <span className="text-[#a47148] italic relative inline-block mt-1 lg:mt-2">
                  SR Holistic Wellness
                  {/* Decorative underline */}
                  <svg className="absolute -bottom-1.5 lg:-bottom-2 left-0 w-full h-2 lg:h-3 text-[#a47148]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp}>
              <p className="text-base lg:text-lg text-[#5a4a42] leading-relaxed max-w-lg border-l-2 border-[#a47148]/30 pl-4 lg:pl-6">
                A <span className="text-[#a47148] font-semibold">sanctuary</span> where traditional healing meets modern luxury.
                Rejuvenate your body, calm your mind, and awaken your soul with our personalized holistic therapies.
              </p>
            </motion.div>

            {/* Feature Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 lg:gap-3">
              {[
                { icon: Leaf, text: "Natural Therapies" },
                { icon: Sparkles, text: "Luxury Experience" },
                { icon: Heart, text: "Holistic Care" }
              ].map((tag, idx) => (
                <span key={idx} className="inline-flex items-center space-x-1.5 lg:space-x-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white border border-[#e8dfd5] text-[#5a4a42] rounded-full text-xs lg:text-sm font-medium shadow-sm hover:border-[#a47148] transition-colors cursor-default">
                  <tag.icon className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#a47148]" />
                  <span>{tag.text}</span>
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="pt-2 lg:pt-4">
              <button
                onClick={() => router.push('/holistic-therapies')}
                className="group relative inline-flex items-center space-x-3 bg-[#2c2018] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full text-sm lg:text-base font-medium shadow-lg hover:shadow-xl hover:bg-[#423126] transition-all transform hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="tracking-wide">Explore Our Services</span>
                <div className="bg-white/20 rounded-full p-1">
                  <Play className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-white" />
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual / Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Main Container */}
            <div className="relative z-10 bg-white p-2 lg:p-3 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-[#a47148]/10 border border-[#e8dfd5]">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] w-full rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover transform scale-105">
                  <source src="/vid.mp4" type="video/mp4" />
                </video>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                {/* Play Button Center */}
                <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 transition-transform duration-500 group-hover:scale-110">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 lg:w-6 lg:h-6 text-[#a47148] ml-1 fill-[#a47148]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8"
              >
                <div className="bg-white/95 backdrop-blur-xl p-4 lg:p-5 rounded-xl lg:rounded-2xl shadow-lg border border-[#f0e4d4]">
                  <div className="flex gap-3 lg:gap-4 items-center">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#fdf1e3] flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-4 h-4 lg:w-5 lg:h-5 text-[#a47148]" />
                    </div>
                    <div>
                      <p className="text-[#2c2018] font-serif text-sm lg:text-lg italic leading-tight">
                        "Every experience is designed to elevate your body & soul."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-[#a47148] rounded-full opacity-20 blur-xl" // Glow behind
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white p-3 lg:p-4 rounded-2xl shadow-lg border border-[#e8dfd5] hidden sm:block"
            >
              <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-[#a47148]" />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
