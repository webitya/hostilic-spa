"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  NotebookIcon as Lotus,
  Leaf,
  Footprints,
  Hand,
  Clock,
  IndianRupee,
  CheckCircle,
  Sparkles,
  Phone,
  ArrowLeft,
  ChevronDown,
} from "lucide-react"

// Data for all therapies, structured by category
const therapiesData = [
  {
    category: "Holistic Therapies",
    icon: Lotus,
    description: "Experience deep relaxation and rejuvenation through our signature holistic treatments.",
    items: [
  {
    name: "Signature Therapy",
    duration: "75 minutes",
    price: "3500 INR",
    description:
      "Relax your mind, body, and senses with our signature holistic therapy. This personalized treatment blends soothing strokes with medium to deep pressure, expertly designed to release muscle knots, improve circulation, and melt away deep-seated tension. Tailored to your specific needs, this therapy offers a deeply restorative experience that leaves you feeling balanced, refreshed, and completely renewed.",
    tags: ["CUSTOMIZE TO FIT YOUR SPECIFIC NEEDS"],
    image: "/demo.jpeg?height=200&width=300",
  },
  {
    name: "Classic Swedish Therapy",
    duration: "60 minutes",
    price: "2500 INR",
    description:
      "A classic and timeless full-body massage designed to relax, rejuvenate, and revive. The Original Swedish Therapy uses long, flowing strokes, circular palm pressure, firm kneading, and rhythmic tapping to ease muscle tension, stimulate circulation, and melt away stress. Performed with light to medium pressure, this therapy offers the perfect balance of relaxation and therapeutic benefits.",
    tags: ["REVIVING", "RELAXING"],
    image: "/demo.jpeg?height=200&width=300",
  },

      {
        name: "Aroma Healing Therapy",
        duration: "60 minutes",
        price: "2500 INR",
        description:
          "A Great stress buster. Aroma therapy is a sure way to relax and unwind at the end of a long tiring day. This Therapeutic massage Combines the use of essential oils and quickly penetrates into the skin, getting absorbed In the blood stream . It Helps to soften the sore muscles , suppressed tension and sends you into a relaxed state, both emotionally and physically.",
        tags: ["DE-STRESSING", "RELAXING"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Chakra Balancing Therapy",
        duration: "90 Minutes",
        price: "3000 INR",
        description:
          "A deeply healing and restorative therapy that begins with a relaxing full-body massage, followed by the placement of crystals on the body's seven chakra points. Crystals and gemstones carry powerful vibrational energy that helps restore balance to the body’s energy field. This gentle hands-on technique promotes profound relaxation and supports healing on physical, emotional, mental, and spiritual levels.",
        tags: ["HEALING", "RESTORATIVE", "ENERGY BALANCE"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "SHIATSU MASSAGE",
        duration: "60 Minutes",
        price: "3000 INR",
        description:
          "An ancient Japanese healing technique that uses finger pressure on specific meridian points to balance energy flow. This fully clothed, oil-free massage relieves stress, improves circulation, and restores the body’s natural harmony. Ideal for reducing fatigue, easing muscle tension, and promoting deep relaxation and well-being.",
        tags: ["JAPANESE TECHNIQUE", "OIL-FREE", "STRESS RELIEF"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Thai Yoga Stretching (Dry massage)",
        duration: "75 minutes",
        price: "3000 INR",
        description:
          "A traditional healing art rooted in ancient Thai and Indian Ayurvedic wisdom, this dry massage blends acupressure, energy line work, and assisted yoga postures. Performed fully clothed without oils, it gently stretches the body, improves flexibility, enhances circulation, and promotes deep relaxation. Ideal for releasing muscular tension and restoring natural body balance through mindful movement and therapeutic touch.",
        tags: ["BOOST INSTANT", "NEW ENERGY", "DRY MASSAGE"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Abhyangam Ayurvedic",
        duration: "60 minutes",
        price: "2800 INR",
        description:
          "Combined with ancient ceremonies and rituals, this holistic ayurvedic rejuvenation therapy consists of vigorous vitality, balancing of tri-doshas and has an overall rejuvenating effect on the body, mind and soul. Which make to deep Healing and pain reliving benefit.",
        tags: ["REJUVENATION", "RESTORING", "AYURVEDIC"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Traditional Balinese Massage",
        duration: "90 minutes",
        price: "3500 INR",
        description:
          "Balinese massage is a form of traditional Indonesian massage which originated on the island of Bali. This deep massage is designed to work almost every Muscles in the body. It involves variety of techniques including stretching acupressure movements, palm pressure, Sliding, kneading can be felt deep into the muscles. Balinese massage aims to relax your state of mind promote blood flow provides oxygen and energy throughout the body.",
        tags: ["INNER-STRENGTHENING", "RENEWING", "DEEP TISSUE"],
        image: "/demo.jpeg?height=200&width=300",
      },
        {
    name: "Hot Stone Massage",
    duration: "75 minutes",
    price: "3000 INR",
    description:
      "A deeply soothing massage using heated basalt stones to warm and relax tight muscles, allowing for deeper pressure without discomfort. The warmth of the stones helps improve circulation, relieve chronic pain, and melt away stress. Ideal for those seeking a calming, grounding experience that promotes balance and tranquility.",
    tags: ["DE-STRESSING", "WARMING", "GROUNDING"],
    image: "/demo.jpeg?height=200&width=300",
  },
  {
    name: "Deep Tissue Massage",
    duration: "60 minutes",
    price: "2800 INR",
    description:
      "An intensive therapy focused on realigning deeper layers of muscle and connective tissue. Using slow, firm strokes and deep finger pressure, this treatment targets chronic tension, muscle adhesions, and deep knots, making it ideal for athletes or individuals with high-stress lifestyles. It promotes muscle recovery and long-lasting relief.",
    tags: ["THERAPEUTIC", "INTENSIVE", "RECOVERY-FOCUSED"],
    image: "/demo.jpeg?height=200&width=300",
  },
    ],
  },
  {
    category: "Body Scrubs & Wraps",
    icon: Leaf,
    description: "Revitalize your skin with our exquisite range of body scrubs and nourishing wraps.",
    items: [
      {
        name: "Andaman Sea Shell & Volcanic Mineral Salt Polish",
        duration: "90 minutes",
        price: "3400 INR",
        description:
          "Full body treatment offering skin exfoliation with Andaman Sea shell skin polish and a short body massage with volcanic mineral Oil followed by detox bath rituals.",
        tags: ["EXFOLIATION", "DETOXIFYING", "SEA SHELL"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Moroccan Scrub + Coffee Bean Massage",
        duration: "90 minutes",
        price: "3500 INR",
        description:
          "This therapy comprises of two course body scrubbing and polishing ritual with a blend of spice and herbs rich Moroccan scrub. It has A curative cooling effect which helps to detoxify the skin pores. It is followed by the massage with invigorating coffee bean oil that helps to soothe the muscles from deep within.",
        tags: ["NOURISHING", "CONDITIONING", "COFFEE BEAN"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "HIMALAYAN PINK SALT SCRUB",
        duration: "45 minutes",
        price: "2000 INR",
        description:
          "Indulge in a luxurious body polish featuring pure Himalayan pink salt blended with aromatic oils and cream. This detoxifying treatment gently exfoliates dead skin cells, stimulates circulation, and revitalizes dull, tired skin. The result is a silky-smooth, deeply nourished body with a radiant, healthy glow. Perfect for renewing your skin and refreshing your senses.",
        tags: ["DETOXIFYING", "EXFOLIATING", "HIMALAYAN SALT"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "WALNUT BODY SCRUB",
        duration: "30 minutes",
        price: "2,200 INR",
        description:
          "A gentle yet effective exfoliation using finely ground walnut shells blended with nourishing oils and natural cream. It removes dead skin cells, unclogs pores, and leaves the skin feeling soft, radiant, and refreshed. Ideal for dull or rough skin, this scrub enhances natural glow and promotes healthy circulation.",
        tags: ["GENTLE EXFOLIATION", "NOURISHING", "WALNUT"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "DEAD SEA CLAY BODY WRAP",
        duration: "45 Minutes",
        price: "2500 INR",
        description:
          "A rejuvenating full-body wrap using mineral-rich Dead Sea clay known for its detoxifying and skin-toning properties. This treatment helps draw out impurities, reduce water retention, and improve skin texture and firmness. Deeply relaxing and therapeutic, it leaves your body feeling purified, nourished, and refreshed.",
        tags: ["DETOXIFYING", "SKIN TONING", "DEAD SEA CLAY"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "INDIAN MUD THERAPY",
        duration: "45 Minutes",
        price: "2,800 INR",
        description:
          "Traditional healing treatment using mineral-rich Indian clay to detoxify, nourish, and tone the skin. The warm mud promotes deep relaxation, relieves muscle tension, and improves blood circulation. Perfect for restoring balance, reducing inflammation, and revitalizing both body and mind.",
        tags: ["TRADITIONAL", "DETOXIFYING", "INDIAN MUD"],
        image: "/demo.jpeg?height=200&width=300",
      },
    ],
  },
  {
    category: "Foot Care",
    icon: Footprints,
    description: "Give your feet the attention they deserve with our specialized foot care therapies.",
    items: [
      {
        name: "Coffee Oil Foot Reflexology – Antigua, Guatemala",
        duration: "30 minutes",
        price: "1200 INR",
        description:
          "A virtual countdown to `butter` this tension taming massage begins with foot yoga followed with an aromatic warm, roasted coffee bean oil from prestigious areas of Antigua in Guatemala. It aims at loosening most troubled muscles while improving circulation and leaving you in a state of tranquility.",
        tags: ["DETOXIFYING", "RELAXING", "COFFEE OIL"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Muscle Fuel Foot Massage (Russian)",
        duration: "45 minutes",
        price: "1500 INR",
        description:
          "If you have been dragging your feet around, it time to jump on the healthy muscles and skin bandwagon. This therapy help to alleviate the muscle tension increase blood circulation and aids metabolism. The end result is happier pampered feet and Rejuvenated mind.",
        tags: ["MUSCLE RECOVERY", "RE-ENERGIZING", "RUSSIAN MASSAGE"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Signature Foot Reflexology",
        duration: "60 Minutes",
        price: "2500 INR",
        description:
          "Experience our signature foot therapy designed to relax, restore, and revive. This indulgent treatment begins with a refreshing foot scrub to gently exfoliate and smooth the skin. It is followed by a deeply therapeutic reflexology massage that targets specific pressure points to relieve stress, improve circulation, and restore the body's natural balance. Perfect for soothing tired feet while promoting total-body wellness.",
        tags: ["SIGNATURE", "REFLEXOLOGY", "STRESS RELIEF"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Uplifting Leg Massage (Full Leg Massage)",
        duration: "45 Minutes",
        price: "2000 INR",
        description:
          "An invigorating and deeply soothing treatment that targets the full length of the legs to relieve fatigue, improve circulation, and restore muscle tone. This unique massage relaxes tired muscles, reduces tension, and leaves your legs feeling light, refreshed, and energized. Perfect for those on their feet all day or seeking total leg rejuvenation with a luxurious touch.",
        tags: ["INVIGORATING", "LEG MASSAGE", "CIRCULATION"],
        image: "/demo.jpeg?height=200&width=300",
      },
    ],
  },
  {
    category: "Instant Indulgence",
    icon: Hand,
    description: "Targeted relief for your most stressed areas, promoting instant comfort and relaxation.",
    items: [
      {
        name: "Chakra Head & Shoulder Massage",
        duration: "30 minutes",
        price: "1200 INR",
        description:
          "Instant and popular massage focusing on built up stress and muscle tension in all areas around neck and shoulder helps to relieves stress, improve circulation, improve concentration, encourage a quick and good sleep, helps to feel relaxed and calm your mind",
        tags: ["RELAXING", "STRESS RELIEF", "HEAD & SHOULDER"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Soothing Back Massage",
        duration: "30 Minutes",
        price: "1200 INR",
        description:
          "A quick yet deeply effective therapy designed to ease tension in your most stressed areas—especially the neck, shoulders, and upper back. Our skilled therapists use targeted pressure-point techniques to release knots, improve circulation, and melt away fatigue. Perfect for those seeking instant relief and renewed energy in just half an hour",
        tags: ["BACK RELIEF", "QUICK RELIEF", "NECK & SHOULDER"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Signature Stretching Back Massage",
        duration: "45 Minutes",
        price: "1,600 INR",
        description:
          "An ancient healing ritual that combines deep, static pressure with rhythmic stretching techniques to unlock tension and restore energy flow. This back-focused massage enhances flexibility, releases physical and emotional stress, and clears stagnant energy, leaving you feeling grounded, rebalanced, and deeply relaxed. A soulful journey toward inner peace and body renewal.",
        tags: ["INNER-STRENGTH", "REVITALISING", "STRETCHING"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Uplifting Leg Massage (Full Leg Massage)",
        duration: "45 Minutes",
        price: "1,600 INR",
        description:
          "An invigorating and deeply soothing treatment that targets the full length of the legs to relieve fatigue, improve circulation, and restore muscle tone. This unique massage relaxes tired muscles, reduces tension, and leaves your legs feeling light, refreshed, and energized. Perfect for those on their feet all day or seeking total leg rejuvenation with a luxurious touch.",
        tags: ["INVIGORATING", "LEG MASSAGE", "CIRCULATION"],
        image: "/demo.jpeg?height=200&width=300",
      },
    ],
  },
  {
    category: "Facial / Face Care",
    icon: Sparkles,
    description: "Reveal your natural radiance with our specialized facial treatments for all skin types.",
    items: [
      {
        name: "Deep Cleansing Facial",
        duration: "30 Minutes",
        price: "1,400 INR",
        description:
          "An intensive purifying and oxygenating facial that delivers instant radiance. This treatment effectively removes all traces of impurities, unclogs and refines pores, and helps balance the skin's natural moisture levels. Perfect for detoxifying and refreshing the skin, leaving it",
        tags: ["PURIFYING", "REFINING", "OXYGENATING"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Instant Glow Facial",
        duration: "75 Minutes",
        price: "2500 INR",
        description:
          "A rejuvenating facial designed to instantly brighten and refresh dull, tired skin. This luxurious treatment includes deep cleansing, gentle exfoliation, a radiance-boosting mask, and a soothing facial massage. Enriched with vitamin-rich serums and botanical extracts, it leaves your skin visibly glowing, smooth, and hydrated—perfect for special occasions or when you need that instant boost of radiance Ideal for all skin types",
        tags: ["INSTANT GLOW", "REJUVENATING", "ALL SKIN TYPES"],
        image: "/demo.jpeg?height=200&width=300",
      },
      {
        name: "Organic Multi-Vitamin Soothing Facial",
        duration: "60 Minutes",
        price: "2200 INR",
        description:
          "A deeply hydrating and calming facial designed for all skin types, especially sensitive or sun-exposed skin. This soothing treatment blends organic aloe vera and herbal extracts to reduce redness, heal irritation, and restore natural moisture balance. It nourishes the skin from within, leaving your complexion visibly refreshed, rejuvenated, and radiant. Ideal for all skin types",
        tags: ["HYDRATING", "CALMING", "ORGANIC"],
        image: "/demo.jpeg?height=200&width=300",
      },
    ],
  },
]

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

export default function SpaTherapiesPage() {
  const [activeCategory, setActiveCategory] = useState("Holistic Therapies") // Initialize with the first category

  return (
    <div className="min-h-screen py-10 bg-[#FDF8F3] font-sans text-[#3A2F24]">
      {/* Hero Section */}
      <section className="relative pt-20 py-12 md:py-16 lg:py-20 text-center overflow-hidden">
        {/* Background elements for premium feel */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#82B24A] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#D4C7B8] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#27545b] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-[#27545b] drop-shadow-sm">
            Our Holistic Therapies
          </h1>
          <p className="text-base md:text-lg text-[#5C5C5C] mb-8 max-w-2xl mx-auto">
            Discover a sanctuary of healing and rejuvenation. Each therapy is crafted to harmonize your mind, body, and
            soul.
          </p>
          <motion.button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719E40] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#82B24A] hover:bg-[#719E40] text-white px-6 py-2.5 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Book Your Session
          </motion.button>
        </motion.div>
      </section>

      {/* Therapies Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Navigation (Tabs for larger screens) */}
        <div className="hidden md:flex justify-center gap-3 mb-8 flex-wrap">
          {therapiesData.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                  activeCategory === category.category
                    ? "bg-[#82B24A] text-white shadow-md"
                    : "bg-white text-[#3A2F24] hover:bg-[#FDF8F3] hover:text-[#82B24A] border border-[#D4C7B8]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {category.category}
              </motion.button>
            )
          })}
        </div>

        {/* Category Filter (for smaller screens - Dropdown) */}
        <div className="md:hidden mb-8 relative">
          <div className="relative w-full">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="block appearance-none w-full bg-white border border-[#D4C7B8] text-[#3A2F24] py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-[#82B24A] text-base font-medium shadow-sm"
            >
              {therapiesData.map((category) => (
                <option key={category.category} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#3A2F24]">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Therapy Cards Display (visible on all screens, filtered by activeCategory) */}
        <div>
          {therapiesData.map((category) => {
            if (activeCategory === category.category) {
              return (
                <motion.div
                  key={category.category}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#27545b] drop-shadow-sm">
                    {category.category}
                  </h2>
                  <p className="text-lg text-[#5C5C5C] mb-8 max-w-3xl mx-auto" >{category.description}</p>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {category.items.map((therapy, index) => (
                      <TherapyCard key={index} therapy={therapy} />
                    ))}
                  </motion.div>
                </motion.div>
              )
            }
            return null
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#27545b] text-white py-16 text-center">
        {" "}
        {/* Dark teal background */}
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
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#82B24A] text-white hover:bg-[#719E40] px-8 py-3 shadow-lg hover:shadow-xl focus-visible:ring-[#719E40]">
            Contact Us Today
          </button>
        </motion.div>
      </section>
    </div>
  )
}

function TherapyCard({ therapy }) {
  const [isFlipped, setIsFlipped] = useState(false)
  // Construct the WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in the ${therapy.name} therapy. Could you please provide more details or help me book a session?`,
  )
  const whatsappLink = `https://wa.me/916306366978?text=${whatsappMessage}`

  return (
    <motion.div
      className="relative w-full h-[420px] perspective-1000 group cursor-pointer" // Increased height for more content
      onClick={() => setIsFlipped(!isFlipped)}
      variants={itemVariants} // Apply item variants for staggered animation
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of the card */}
        <motion.div
          className="absolute w-full h-full backface-hidden bg-white/90 rounded-2xl shadow-lg overflow-hidden border border-[#E0D9D0] backdrop-blur-sm flex flex-col"
          initial={{ opacity: 1 }}
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.3, delay: isFlipped ? 0 : 0.3 }}
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#82B24A] to-[#27545b]"></div>
          {/* Therapy Image */}
          <div className="relative w-full h-36 overflow-hidden">
            {" "}
            {/* Slightly increased image height */}
            <Image
              src={therapy.image || "/demo.jpeg?height=200&width=300&query=spa therapy"}
              alt={therapy.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            {/* Image overlay for subtle effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            {/* Card Header */}
            <h3 className="text-lg font-bold text-[#27545b] mb-1">{therapy.name}</h3>
            <p className="flex items-center gap-1.5 text-[#5C5C5C] text-sm mb-2">
              <Clock className="w-4 h-4 text-[#82B24A]" />
              {therapy.duration}
            </p>
            {/* Card Content (truncated) */}
            <p className="text-sm leading-relaxed text-[#5C5C5C] mb-3 flex-grow overflow-hidden" style={{textAlign:"left"}}>
              {therapy.description.substring(0, 120)}... {/* More aggressive truncation for compact design */}
            </p>
            {therapy.tags && therapy.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
                {" "}
                {/* Tags at the bottom */}
                {therapy.tags.map((tag, tagIndex) => (
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
            {/* Buttons on Front */}
            <div className="flex gap-2 mt-auto pt-3 border-t border-gray-100">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#25D366] hover:bg-[#1DA851] text-white px-4 py-2 shadow-md hover:shadow-lg flex-1"
                onClick={(e) => e.stopPropagation()} // Prevent card flip
              >
                <Phone className="w-4 h-4 mr-1.5" />
                WhatsApp
              </a>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719E40] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#82B24A] hover:bg-[#719E40] text-white px-4 py-2 shadow-md hover:shadow-lg flex-1"
                onClick={(e) => {
                  e.stopPropagation() // Prevent card flip from button click
                  setIsFlipped(true)
                }}
              >
                Read More
                <span className="sr-only">{"Read more about " + therapy.name}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Back of the card */}
        <motion.div
          className="absolute w-full h-full backface-hidden bg-white/90 rounded-2xl shadow-lg overflow-hidden border border-[#E0D9D0] backdrop-blur-sm flex flex-col"
          initial={{ rotateY: 180, opacity: 0 }}
          animate={{ rotateY: isFlipped ? 0 : 180, opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Added a wrapper div with scaleX(-1) to un-mirror the text */}
          <div className="w-full h-full [transform:scaleX(-1)]">
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-bold text-[#27545b] mb-1">{therapy.name}</h3>
              <p className="flex items-center gap-1.5 text-[#5C5C5C] text-sm mb-2">
                <Clock className="w-4 h-4 text-[#82B24A]" />
                {therapy.duration}
              </p>
              {/* Full Description */}
              <p className="text-sm leading-relaxed text-[#5C5C5C] mb-3 flex-grow overflow-y-auto custom-scrollbar" style={{textAlign:"left"}}>
                {therapy.description}
              </p>
              {/* Price and Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-100 pt-3 mt-auto">
                <div className="flex items-center gap-1.5 text-base font-bold text-[#27545b]">
                  <IndianRupee className="w-4 h-4 text-[#82B24A]" />
                  {therapy.price}
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#25D366] hover:bg-[#1DA851] text-white px-4 py-2 shadow-md hover:shadow-lg flex-1 sm:flex-none"
                    onClick={(e) => e.stopPropagation()} // Prevent card flip
                  >
                    <Phone className="w-4 h-4 mr-1.5" />
                    WhatsApp
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719E40] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#82B24A] hover:bg-[#719E40] text-white px-4 py-2 shadow-md hover:shadow-lg flex-1 sm:flex-none"
                    onClick={(e) => e.stopPropagation()} // Prevent card flip
                  >
                    Book Now
                  </a>
                </div>
              </div>
              {/* Go Back Button */}
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719E40] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-0 h-auto text-[#27545b] hover:text-[#82B24A] mt-3"
                onClick={(e) => {
                  e.stopPropagation() // Prevent card flip from button click
                  setIsFlipped(false)
                }}
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Go Back
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
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
