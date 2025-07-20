"use client"
import { motion } from "framer-motion"
import { SpadeIcon, Leaf, Footprints, Hand, Clock, IndianRupee, Sparkles, PhoneIcon as Whatsapp } from "lucide-react"

// Data for Ayurvedic Panchkarma content
const ayurvedicContent = {
  hero: {
    title: "Ayurvedic Panchkarma & Experiences",
    description:
      "Experience the true age-old Ayurvedic therapies in peaceful traditional cottages. These therapies deeply relax and heal the soul and promote self-healing.",
  },
  sections: [], // This array is now empty to remove the specified content
  treatments: [
    {
      name: "ABHYANGAM AYURVEDIC",
      duration: "60 MINTS",
      description:
        "Full body Ayurvedic massage using warm herbal oils. Its long strokes breakdown toxin blockages, relax the body, stimulate the organs, and clear the body’s main circulatory channels",
      price: null,
      icon: Hand,
    },
    {
      name: "SHIRODHARA",
      duration: "60 mints",
      description:
        "It is a luxurious treatment which awakens the mind and lulls the entire body into a state of relaxation. A continuous stream of medicated warm oil is poured onto the forehead. It revitalizes the central nervous system and the mind reaches to a supreme blissful state.",
      price: null,
      icon: Sparkles,
    },
    {
      name: "KIZHI - Hot Bundles Massage",
      duration: "60 MINTS",
      description:
        "Herbal powders are poured into cotton bags, immersed in warm herbal oil and gently padded to the ‘;./ whole body. Helps relax body and muscle tensions, induce sweat and detox, and absorb nourishing powder nutrients",
      price: null,
      icon: Leaf,
    },
    {
      name: "AYURVEDIC POTLI MASSAGE",
      duration: "75 MINTS",
      description:
        "Instant and popular massage focusing on built up stress and muscle tension in all areas around neck and shoulder helps to relieves stress, improve circulation, improve concentration, encourage a quick and good sleep, helps to feel relaxed and calm your mind",
      price: null,
      icon: Hand,
    },
    {
      name: "UDWARTHANANAM- Herbal Detox Therapy",
      duration: "60 mints",
      description:
        "Therapeutic deep tissue massage using herbal powders. It involves upward stroking where the powder is forcibly rubbed on the body to breakdown toxin and fat blocks under the skin while nourishing it with natural detoxifying ingredients",
      price: null,
      icon: SpadeIcon,
    },
    {
      name: "VASTI",
      duration: "45 mins",
      description:
        "Vasti is a typical Ayurvedic treatment in which there is retention of lukewarm, medicated oil on the specific part of the body. Good for Skeletal, muscular, nervous problems. In fact good for all diseases.",
      subPoints: [
        "Shirovasti :- Retention of the oil on Head region",
        "Greeva vasti :- Retention of the oil on neck region",
        "Kadi vasti :- Retention of the oil on lumbar region",
        "Janu vasti :- Retention of the oil on the Knee region.",
      ],
      price: null,
      icon: Footprints,
    },
  ],
}

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
  const phoneNumber = "919693245941" // Your WhatsApp number

  const heroWhatsappMessage = encodeURIComponent(
    "Hello, I'd like to book a session for Ayurvedic Panchkarma. Could you please assist me?",
  )
  const heroWhatsappLink = `https://wa.me/${phoneNumber}?text=${heroWhatsappMessage}`

  const ctaWhatsappMessage = encodeURIComponent(
    "Hello, I'd like to inquire about your Ayurvedic Panchkarma therapies and wellness journey.",
  )
  const ctaWhatsappLink = `https://wa.me/${phoneNumber}?text=${ctaWhatsappMessage}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative pt-20 py-12 md:py-16 lg:py-20 text-center overflow-hidden">
        {/* Background elements for premium feel */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700 drop-shadow-sm">
            {ayurvedicContent.hero.title}
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {ayurvedicContent.hero.description}
          </p>
          <motion.a
            href={heroWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Whatsapp className="w-5 h-5 mr-2" />
            WhatsApp Us to Book
          </motion.a>
        </motion.div>
      </section>

      {/* Ayurvedic Treatments Section (Cards) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700 drop-shadow-sm">
            AYURVEDIC TREATMENT
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {ayurvedicContent.treatments.map((treatment, index) => (
              <AyurvedicTreatmentCard key={index} treatment={treatment} phoneNumber={phoneNumber} />
            ))}
          </motion.div>
        </motion.div>

        {/* Content Sections (now empty) */}
        {ayurvedicContent.sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700 drop-shadow-sm">
              {section.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">{section.content}</p>
            {section.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-4 p-4 bg-white/80 rounded-lg shadow-md border border-gray-100 backdrop-blur-md text-left"
                    >
                      {Icon && <Icon className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </motion.div>
        ))}
      </section>

      {/* Call to Action Section */}
      {/* <section className="bg-amber-700 text-white py-16 text-center">
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
          <a
            href={ctaWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-amber-700 hover:bg-gray-100 px-8 py-3 shadow-lg hover:shadow-xl focus-visible:ring-green-400"
          >
            <Whatsapp className="w-6 h-6 mr-2" />
            WhatsApp Us Today
          </a>
        </motion.div>
      </section> */}
    </div>
  )
}

function AyurvedicTreatmentCard({ treatment, phoneNumber }) {
  const Icon = treatment.icon
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in the ${treatment.name} therapy. Could you please provide more details or help me book a session?`,
  )
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  return (
    <motion.div
      className="bg-white/80 rounded-2xl shadow-lg overflow-hidden border border-gray-100 backdrop-blur-md flex flex-col text-left"
      variants={itemVariants}
    >
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className="w-6 h-6 text-amber-600" />}
          <h3 className="text-xl font-bold text-gray-900">{treatment.name}</h3>
        </div>
        <p className="flex items-center gap-1.5 text-gray-600 text-sm mb-3">
          <Clock className="w-4 h-4 text-amber-500" />
          {treatment.duration}
        </p>
        <div className="text-sm leading-relaxed text-gray-700 mb-4 flex-grow">
          <p>{treatment.description}</p>
          {treatment.subPoints && (
            <ul className="list-disc list-inside mt-2 space-y-1">
              {treatment.subPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-100 pt-3 mt-auto">
          {treatment.price && (
            <div className="flex items-center gap-1.5 text-base font-bold text-amber-700">
              <IndianRupee className="w-3.5 h-3.5" />
              {treatment.price}
            </div>
          )}
          <div className="flex gap-2 w-full sm:w-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 shadow-md hover:shadow-lg flex-1 sm:flex-none"
            >
              <Whatsapp className="w-3.5 h-3.5 mr-1.5" />
              WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-amber-600 hover:bg-amber-700 text-white px-4 py-1.5 shadow-md hover:shadow-lg flex-1 sm:flex-none"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
