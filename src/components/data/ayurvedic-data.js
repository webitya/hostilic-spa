// Ayurvedic Panchkarma Treatments Data
// Ayurvedic Panchkarma Treatments Data
export const ayurvedicTreatments = [
  {
    name: "SHIRODHARA",
    duration: "60 Minutes",
    description:
      "It is a luxurious treatment which awakens the mind and lulls the entire body into a state of relaxation. A continuous stream of medicated warm oil is poured onto the forehead. It revitalizes the central nervous system and the mind reaches to a supreme blissful state.",
       subPoints: [
      "Deep Stress Relief",
      "Improves Sleep Quality",
      "Balances Vata & Pitta Dosha",
      "Enhances Mental Clarity & Focus",
      "Relieves Headaches & Migraines",
      "Supports Nervous System Health",
      "Improves Hair & Scalp Health",
      "Promotes Emotional Balance",
      "Rejuvenates the Senses",
      "Anti-Aging & Rejuvenation",
    ],

    price: "3200 INR",
    tags: ["MIND RELAXATION", "NERVOUS SYSTEM", "BLISSFUL STATE"],
    image: "/shirodhara01.jpg?height=200&width=300",
  },
  {
    name: "Abhyangam Ayurvedic",
    duration: "60 Minutes",
    description:
      "Combined with ancient ceremonies and rituals, this holistic ayurvedic rejuvenation therapy consists of vigorous vitality, balancing of tri-doshas and has an overall rejuvenating effect on the body, mind and soul. Which makes deep healing and pain-relieving benefit.",
 subPoints: [
      "Deep Relaxation and Stress Relief",
      "Improved Blood Circulation",
      "Enhanced Lymphatic Drainage",
      "Skin Nourishment and Rejuvenation",
      "Joint and Muscle Relief",
      "Boosted Immunity",
      "Improved Digestion",
      "Energizes & Rejuvenates",
    ],
    price: "2600 INR",
    tags: ["REJUVENATION", "RESTORING"],
    image: "/abhyangam01.jpg?height=200&width=300",
  },
  {
    name: "KIZHI - Hot Bundles Massage",
    duration: "60 Minutes",
    description:
      "Herbal powders are poured into cotton bags, immersed in warm herbal oil and gently padded to the whole body. Helps relax body and muscle tensions, induce sweat and detox, and absorb nourishing powder nutrients",
 subPoints: [
      "Relieves muscle pain, stiffness, and spasms effectively",
      "Reduces joint pain and swelling caused by arthritis or injuries",
      "Improves flexibility and mobility in stiff or overused joints",
      "Enhances blood circulation and lymphatic drainage",
      "Detoxifies tissues by flushing out metabolic waste",
      "Eases chronic pain and supports post-exercise recovery",
      "Strengthens muscles and nourishes soft tissues",
      "Calms the nervous system and reduces stress-related tension",
      "Stimulates skin rejuvenation and improves skin texture",
      "Promotes a feeling of deep relaxation and holistic balance",
    ],
    price: "3000 INR",
    tags: ["HERBAL BUNDLES", "MUSCLE RELAXATION", "DETOX"],
    image: "/kizi01.jpg?height=200&width=300",
  },
  {
    name: "AYURVEDIC POTLI MASSAGE",
    duration: "75 Minutes",
    description:
      "Instant and popular massage focusing on built up stress and muscle tension in all areas around neck and shoulder helps to relieves stress, improve circulation, improve concentration, encourage a quick and good sleep, helps to feel relaxed and calm your mind",
  subPoints: [
      "Relieves Muscle & Joint Pain",
      "Improves Circulation",
      "Deep Detoxification",
      "Reduces Stress & Anxiety",
      "Strengthens and Nourishes Tissues",
      "Improves Mobility & Flexibility",
      "Supports Skin Health",
      "Boosts Immunity",
      "Balances Vata & Kapha Dosha",
      "Promotes Deep Relaxation & Sleep",
    ],
    price: "3500 INR",
    tags: ["STRESS RELIEF", "CIRCULATION", "NECK & SHOULDER"],
    image: "/aurvedicpotli01.jpg?height=200&width=300",
  },
  {
    name: "UDWARTHANANAM - Herbal Detox Therapy",
    duration: "60 Minutes",
    description:
      "Therapeutic deep tissue massage using herbal powders. It involves upward stroking where the powder is forcibly rubbed on the body to breakdown toxin and fat blocks under the skin while nourishing it with natural detoxifying ingredients",
     subPoints: [
      "Detoxifies the Body",
      "Reduces Excess Fat & Cellulite",
      "Improves Blood Circulation",
      "Exfoliates Skin",
      "Balances Kapha Dosha",
      "Enhances Metabolism",
      "Relieves Stiffness & Improves Mobility",
      "Boosts Energy & Vitality",
      "Supports Diabetes & Cholesterol Management",
      "Promotes Mental Clarity & Confidence",
    ],
    price: "2900 INR",
    tags: ["DEEP TISSUE", "HERBAL POWDER", "DETOX"],
    image: "/udhartanam01.jpg?height=200&width=300",
  },
  {
    name: "VASTI",
    duration: "30 mins",
    description:
      "Vasti is a typical Ayurvedic treatment in which there is retention of lukewarm, medicated oil on the specific part of the body. Good for Skeletal, muscular, nervous problems. In fact good for all diseases.",
 subPoints: [
      "Reduces Joint Pain & Stiffness",
      "Deep Detoxification",
      "Relieves Constipation & Bloating",
      "Nourishes and Strengthens Tissues",
      "Enhances Immunity",
      "Balances Vata Dosha",
    ],
    price: "2000 INR",
    tags: ["OIL RETENTION", "SKELETAL HEALTH", "NERVOUS SYSTEM"],
    image: "/vasti01.jpg?height=200&width=300",
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
