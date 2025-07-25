"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  NotebookIcon as Lotus,
  Leaf,
  Footprints,
  Hand,
  Clock,
  IndianRupee,
  Sparkles,
  Phone,
  CheckCircle,
  Flame,
  Dumbbell,
} from "lucide-react";


// Data for Ayurvedic Panchkarma content
const ayurvedicContent = {
  hero: {
    title: "Ayurvedic Panchkarma & Experiences",
    description:
      "Experience the true age-old Ayurvedic therapies in peaceful traditional cottages. These therapies deeply relax and heal the soul and promote self-healing.",
  },
  treatments: [
  {
    name: "SHIRODHARA",
    duration: "60 Minutes",
    description:
      "It is a luxurious treatment which awakens the mind and lulls the entire body into a state of relaxation. A continuous stream of medicated warm oil is poured onto the forehead. It revitalizes the central nervous system and the mind reaches to a supreme blissful state.",
    price: "3200 INR",
    icon: Sparkles,
    tags: ["MIND RELAXATION", "NERVOUS SYSTEM", "BLISSFUL STATE"],
    image: "/demo.jpeg?height=200&width=300",
  },
  {
    name: "KIZHI - Hot Bundles Massage",
    duration: "60 Minutes",
    description:
      "Herbal powders are poured into cotton bags, immersed in warm herbal oil and gently padded to the whole body. Helps relax body and muscle tensions, induce sweat and detox, and absorb nourishing powder nutrients",
    price: "3000 INR",
    icon: Leaf,
    tags: ["HERBAL BUNDLES", "MUSCLE RELAXATION", "DETOX"],
    image: "/demo.jpeg?height=200&width=300",
  },
  {
    name: "AYURVEDIC POTLI MASSAGE",
    duration: "75 Minutes",
    description:
      "Instant and popular massage focusing on built up stress and muscle tension in all areas around neck and shoulder helps to relieves stress, improve circulation, improve concentration, encourage a quick and good sleep, helps to feel relaxed and calm your mind",
    price: "3500 INR",
    icon: Hand,
    tags: ["STRESS RELIEF", "CIRCULATION", "NECK & SHOULDER"],
    image: "/demo.jpeg?height=200&width=300",
  },
  {
    name: "UDWARTHANANAM - Herbal Detox Therapy",
    duration: "60 Minutes",
    description:
      "Therapeutic deep tissue massage using herbal powders. It involves upward stroking where the powder is forcibly rubbed on the body to breakdown toxin and fat blocks under the skin while nourishing it with natural detoxifying ingredients",
    price: "2900 INR",
    icon: Lotus,
    tags: ["DEEP TISSUE", "HERBAL POWDER", "DETOX"],
    image: "/demo.jpeg?height=200&width=300",
  },
  {
    name: "VASTI",
    duration: "30 mins",
    description:
      "Vasti is a typical Ayurvedic treatment in which there is retention of lukewarm, medicated oil on the specific part of the body. Good for Skeletal, muscular, nervous problems. In fact good for all diseases.",
    subPoints: [
      "Shirovasti :- Retention of the oil on Head region",
      "Greeva vasti :- Retention of the oil on neck region",
      "Kadi vasti :- Retention of the oil on lumbar region",
      "Janu vasti :- Retention of the oil on the Knee region.",
    ],
    price: "2000 INR",
    icon: Footprints,
    tags: ["OIL RETENTION", "SKELETAL HEALTH", "NERVOUS SYSTEM"],
    image: "/demo.jpeg?height=200&width=300",
  },
  // {
  //   name: "HOT STONE THERAPY",
  //   duration: "75 Minutes",
  //   description:
  //     "Heated volcanic stones are strategically placed on the body to deeply relax muscles, improve blood flow, and melt away stress. Ideal for those seeking warmth, deep relaxation, and balance of energy.",
  //   price: "3600 INR",
  //   icon: Flame, // You may replace with any icon you prefer for heat/energy
  //   tags: ["HEAT THERAPY", "MUSCLE RELAXATION", "STRESS RELIEF"],
  //   image: "/demo.jpeg?height=200&width=300",
  // },
  // {
  //   name: "DEEP TISSUE THERAPY",
  //   duration: "60 Minutes",
  //   description:
  //     "Focused massage technique targeting deeper muscle layers and connective tissues to relieve chronic pain, stiffness, and tension. Especially beneficial for athletes and people with physically demanding routines.",
  //   price: "3100 INR",
  //   icon: Dumbbell, // You can use a muscle icon or similar
  //   tags: ["CHRONIC PAIN", "DEEP PRESSURE", "TENSION RELIEF"],
  //   image: "/demo.jpeg?height=200&width=300",
  // },
]

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
  const phoneNumber = "916306366978" // Your WhatsApp number
  const heroWhatsappMessage = encodeURIComponent(
    "Hello, I'd like to book a session for Ayurvedic Panchkarma. Could you please assist me?",
  )
  const heroWhatsappLink = `https://wa.me/${phoneNumber}?text=${heroWhatsappMessage}`
  const ctaWhatsappMessage = encodeURIComponent(
    "Hello, I'd like to inquire about your Ayurvedic Panchkarma therapies and wellness journey.",
  )
  const ctaWhatsappLink = `https://wa.me/${phoneNumber}?text=${ctaWhatsappMessage}`

  return (
    <div className="min-h-screen bg-[#FDF8F3] font-sans text-[#3A2F24]">
      {/* Hero Section */}
     

      {/* Ayurvedic Treatments Section (Cards) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#27545b] drop-shadow-sm">AYURVEDIC TREATMENTS</h2>
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
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#27545b] text-white py-16 text-center">
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
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#82B24A] hover:bg-[#719E40] text-white px-8 py-3 shadow-lg hover:shadow-xl focus-visible:ring-[#719E40]"
          >
            <Phone className="w-6 h-6 mr-2" />
            WhatsApp Us Today
          </a>
        </motion.div>
      </section>
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
      className="bg-white/90 rounded-2xl shadow-lg overflow-hidden border border-[#E0D9D0] backdrop-blur-sm flex flex-col text-left h-full" // Added h-full for consistent height
      variants={itemVariants}
    >
      {treatment.image && (
        <div className="relative w-full h-36 overflow-hidden">
          <Image
            src={treatment.image || "/demo.jpeg"}
            alt={treatment.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className="w-6 h-6 text-[#82B24A]" />} {/* Icon color updated */}
          <h3 className="text-xl font-bold text-[#27545b]">{treatment.name}</h3>
        </div>
        <p className="flex items-center gap-1.5 text-[#5C5C5C] text-sm mb-3">
          <Clock className="w-4 h-4 text-[#82B24A]" />
          {treatment.duration}
        </p>
        <div className="text-sm leading-relaxed text-[#5C5C5C] mb-4 flex-grow overflow-y-auto custom-scrollbar">
          <p>{treatment.description}</p>
          {treatment.subPoints && (
            <ul className="list-disc list-inside mt-2 space-y-1">
              {treatment.subPoints.map((point, index) => (
                <li key={index} className="font-semibold">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
        {treatment.tags && treatment.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
            {treatment.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="flex items-center gap-1 text-[10px] font-medium bg-[#FDF8F3] text-[#27545b] px-2 py-0.5 rounded-full border border-[#D4C7B8]"
              >
                <CheckCircle className="w-2.5 h-2.5 text-[#82B24A]" />
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-100 pt-3 mt-auto">
          {treatment.price && (
            <div className="flex items-center gap-1.5 text-base font-bold text-[#27545b]">
              <IndianRupee className="w-4 h-4 text-[#82B24A]" />
              {treatment.price}
            </div>
          )}
          <div className="flex gap-2 w-full sm:w-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#25D366] hover:bg-[#1DA851] text-white px-3 py-1.5 shadow-md hover:shadow-lg flex-1 sm:flex-none"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719E40] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#82B24A] hover:bg-[#719E40] text-white px-4 py-1.5 shadow-md hover:shadow-lg flex-1 sm:flex-none"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      {/* Custom Scrollbar for overflow-y-auto */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        /* Blob animation for hero section */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </motion.div>
  )
}
