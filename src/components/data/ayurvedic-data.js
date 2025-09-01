// Ayurvedic Panchkarma Treatments Data
// Ayurvedic Panchkarma Treatments Data
export const ayurvedicTreatments = [
  {
    name: "SHIRODHARA",
    duration: "60 Minutes",
    description:
      "It is a luxurious treatment which awakens the mind and lulls the entire body into a state of relaxation. A continuous stream of medicated warm oil is poured onto the forehead. It revitalizes the central nervous system and the mind reaches to a supreme blissful state.",
    subPoints: [
      "Taila Dhara – Using medicated oils",
      "Takra Dhara – Using buttermilk",
      "Dugdha Dhara – Using milk",
    ],
    price: "3200 INR",
    tags: ["MIND RELAXATION", "NERVOUS SYSTEM", "BLISSFUL STATE"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Abhyangam Ayurvedic",
    duration: "60 Minutes",
    description:
      "Combined with ancient ceremonies and rituals, this holistic ayurvedic rejuvenation therapy consists of vigorous vitality, balancing of tri-doshas and has an overall rejuvenating effect on the body, mind and soul. Which makes deep healing and pain-relieving benefit.",
    subPoints: [
      "Full-body synchronized massage with medicated oils",
      "Stimulates blood circulation",
      "Balances Vata, Pitta, Kapha",
    ],
    price: "1600 INR",
    tags: ["REJUVENATION", "RESTORING"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "KIZHI - Hot Bundles Massage",
    duration: "60 Minutes",
    description:
      "Herbal powders are poured into cotton bags, immersed in warm herbal oil and gently padded to the whole body. Helps relax body and muscle tensions, induce sweat and detox, and absorb nourishing powder nutrients",
    subPoints: [
      "Podikizhi – Using dry herbal powders",
      "Elakizhi – Using fresh herbal leaves",
      "Navarakizhi – Using rice boluses in milk decoction",
    ],
    price: "3000 INR",
    tags: ["HERBAL BUNDLES", "MUSCLE RELAXATION", "DETOX"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "AYURVEDIC POTLI MASSAGE",
    duration: "75 Minutes",
    description:
      "Instant and popular massage focusing on built up stress and muscle tension in all areas around neck and shoulder helps to relieves stress, improve circulation, improve concentration, encourage a quick and good sleep, helps to feel relaxed and calm your mind",
    subPoints: [
      "Stress relief for neck & shoulders",
      "Improves sleep quality",
      "Promotes deep relaxation",
    ],
    price: "3500 INR",
    tags: ["STRESS RELIEF", "CIRCULATION", "NECK & SHOULDER"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "UDWARTHANANAM - Herbal Detox Therapy",
    duration: "60 Minutes",
    description:
      "Therapeutic deep tissue massage using herbal powders. It involves upward stroking where the powder is forcibly rubbed on the body to breakdown toxin and fat blocks under the skin while nourishing it with natural detoxifying ingredients",
    subPoints: [
      "Reduces excess body fat",
      "Cleanses skin and improves texture",
      "Detoxifies tissues and boosts metabolism",
    ],
    price: "2900 INR",
    tags: ["DEEP TISSUE", "HERBAL POWDER", "DETOX"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "VASTI",
    duration: "30 mins",
    description:
      "Vasti is a typical Ayurvedic treatment in which there is retention of lukewarm, medicated oil on the specific part of the body. Good for Skeletal, muscular, nervous problems. In fact good for all diseases.",
    subPoints: [
      "Shirovasti – Retention of the oil on Head region",
      "Greeva Vasti – Retention of the oil on Neck region",
      "Kati Vasti – Retention of the oil on Lumbar region",
      "Janu Vasti – Retention of the oil on the Knee region",
    ],
    price: "2000 INR",
    tags: ["OIL RETENTION", "SKELETAL HEALTH", "NERVOUS SYSTEM"],
    image: "/placeholder.svg?height=200&width=300",
  },
]


// Generate therapy ID from name
export function generateAyurvedicId(name) {
  if (!name || typeof name !== "string") {
    return ""
  }

  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim()
}

// Find therapy by ID
export function findAyurvedicTherapyById(id) {
  if (!id || !ayurvedicTreatments || !Array.isArray(ayurvedicTreatments)) {
    return null
  }

  return ayurvedicTreatments.find((therapy) => {
    if (!therapy || !therapy.name) return false
    const therapyId = generateAyurvedicId(therapy.name)
    return therapyId === id
  })
}
