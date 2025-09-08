/* Enriched therapies data in plain JavaScript (no TypeScript) */

/* Utility: stable ID generator for each therapy */
export function generateTherapyId(therapyName) {
  return therapyName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

export function generateCategorySlug(categoryName) {
  return categoryName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .trim()
}

/* Optional helper: find therapy by id */
export function findTherapyById(id) {
  for (let c = 0; c < therapiesData.length; c++) {
    const category = therapiesData[c]
    for (let i = 0; i < category.items.length; i++) {
      const therapy = category.items[i]
      if (therapy.id === id) {
        return { therapy, category: category.category }
      }
    }
  }
  return null
}

/* Added detailed "tags" and "bestFor" fields per therapy.
   Added static "id" for each therapy using generateTherapyId(name).
   Kept original fields (name, duration, price, description, ssss, image).
*/
export const therapiesData = [
  {
    category: "HOLISTIC THERAPIES",
    description:
      "Relax the Body, Mind, and Soul. The art of massage has been practiced for thousands of years, offering holistic tags that nurture the body, mind, and soul.",
    keytags: [
      "Full-body relaxation and nervous system regulation",
      "Improved circulation and lymphatic flow",
      "Reduced muscular tension and stiffness",
      "Enhanced sleep quality and mental clarity",
    ],
    items: [
      {
        id: generateTherapyId("Signature Therapy"),
        name: "Signature Therapy",
        duration: "75 minutes",
        price: "3500 INR",
        description:
          "Relax your mind, body, and senses with our signature holistic therapy. This personalized treatment blends soothing strokes with medium to deep pressure, expertly designed to release muscle knots, improve circulation, and melt away deep-seated tension. Tailored to your specific needs, this therapy offers a deeply restorative experience that leaves you feeling balanced, refreshed, and completely renewed.",
        ssss: ["CUSTOMIZE TO FIT YOUR SPECIFIC NEEDS"],
        tags: [
          "Releases chronic muscle tension and knots",
          "Improves blood and oxygen circulation",
          "Reduces stress and calms the nervous system",
          "Supports deeper, more restorative sleep",
          "Enhances range of motion and flexibility",
          "Boosts overall sense of balance and well-being",
        ],
        bestFor: ["Full-body reset", "High stress", "General aches and stiffness"],
        image: "/Signature therapy.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Deep Tissue Therapy"),
        name: "Deep Tissue Therapy",
        duration: "90 minutes",
        price: "3500 INR",
        description:
          "Target the deep tissue structure of the fascia and muscles are referred to as connective tissue. Deep tissue focuses on the release of muscle tension, Congestion, chronic knots and toxins by using deep muscle compression and friction along the grain of the muscles. This therapeutic technique helps to get blood and oxygen circulating properly.",
        ssss: ["DEEP RELAXATION", "MUSCLE RECOVERY", "LASTING RELIEF"],
        tags: [
          "Targets chronic pain and adhesions",
          "Breaks down scar tissue and trigger points",
          "Speeds recovery after intense activity",
          "Improves posture by releasing tight fascia",
          "Increases mobility in stubborn areas",
          "Stimulates healthy circulation and detoxification",
        ],
        bestFor: ["Athletes", "Chronic back/neck pain", "Limited mobility"],
        image: "/Deep Tissue massage.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Classic Swedish Massage"),
        name: "Classic Swedish Massage",
        duration: "60 minutes",
        price: "2500 INR",
        description:
          "A classic and timeless full-body massage designed to relax, rejuvenate, and revive. The Original Swedish Therapy uses long, flowing strokes, circular palm pressure, firm kneading, and rhythmic tapping to ease muscle tension, stimulate circulation, and melt away stress. Performed with light to medium pressure, this therapy offers the perfect balance of relaxation and therapeutic tags.",
        ssss: ["REVIVING", "RELAXING", "IMPROVED CIRCULATION"],
        tags: [
          "Relieves everyday stress and fatigue",
          "Enhances lymphatic and blood circulation",
          "Reduces muscle soreness and stiffness",
          "Promotes mental clarity and calm",
          "Supports better sleep quality",
        ],
        bestFor: ["First-time massage", "General relaxation", "Light to medium pressure lovers"],
        image: "/Classic swedish massage.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Aroma Healing Therapy"),
        name: "Aroma Healing Therapy",
        duration: "60 minutes",
        price: "2600 INR",
        description:
          "A Great stress buster. Aroma therapy is a sure way to relax and unwind at the end of a long tiring day. This Therapeutic massage Combines the use of essential oils and quickly penetrates into the skin, getting absorbed In the blood stream. It Helps to soften the sore muscles, suppressed tension and sends you into a relaxed state, both emotionally and physically.",
        ssss: ["DE-STRESS", "PAIN RELIEF", "ANXIETY RELIEVER"],
        tags: [
          "Balances mood and reduces anxiety",
          "Gently eases muscular tension",
          "Promotes deep relaxation via aromatics",
          "Supports respiratory ease (depending on oil)",
          "Nourishes skin with therapeutic oils",
        ],
        bestFor: ["Stress relief", "Mood balancing", "Sensitive to deep pressure"],
        image: "/Aroma healing.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Chakra Balancing Therapy"),
        name: "Chakra Balancing Therapy",
        duration: "90 Minutes",
        price: "3500 INR",
        description:
          "A deeply healing and restorative therapy that begins with a relaxing full-body massage, followed by the placement of crystals on the body's seven chakra points. Crystals and gemstones carry powerful vibrational energy that helps restore balance to the body's energy field. This gentle hands-on technique promotes profound relaxation and supports healing on physical, emotional, mental, and spiritual levels.",
        ssss: ["ENERGIZING", "STRESS RELIEF", "EMOTIONAL BALANCE"],
        tags: [
          "Encourages energetic balance and alignment",
          "Deeply calms mind and body",
          "Supports emotional processing and clarity",
          "Enhances sense of grounding and presence",
          "Complements meditation and breathwork",
        ],
        bestFor: ["Energy alignment", "Emotional reset", "Mind-body connection"],
        image: "/Chakra balancing.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Volcanic Hot Lava Stone Therapy"),
        name: "Volcanic Hot Lava Stone Therapy",
        duration: "90 minutes",
        price: "4500 INR",
        description:
          "Experience the healing warmth of our Hot Lava Stone Massage—an indulgent fusion of Classic Swedish massage techniques and the deeply therapeutic power of heated volcanic stones Infused with aromatic essential oils, the warm stones glide effortlessly across your body, easing muscle tension, relieving soreness, and promoting profound relaxation. This full-body treatment calms the nervous system, boosts circulation, and restores your natural energy flow.",
        ssss: ["STRENGTHEN", "RE-ENERGIZE", "DEEP RELAXING"],
        tags: [
          "Melts deep-seated muscle tension",
          "Improves circulation through soothing heat",
          "Calms the nervous system quickly",
          "Supports joint mobility and comfort",
          "Eases stress-related headaches",
        ],
        bestFor: ["Cold-sensitive clients", "Persistent stiffness", "Deep relaxation with heat"],
        image: "/hot stone (2).png?height=200&width=300",
      },
      {
        id: generateTherapyId("SHIATSU MASSAGE"),
        name: "SHIATSU MASSAGE",
        duration: "75 Minutes",
        price: "3200 INR",
        description:
          "An ancient Japanese healing technique that uses finger pressure on specific meridian points to balance energy flow. This fully clothed, oil-free massage relieves stress, improves circulation, and restores the body's natural harmony. Ideal for reducing fatigue, easing muscle tension, and promoting deep relaxation and well-being.",
        ssss: ["BALANCING", "RESTORATIVE", "DEEPLY RELAXING"],
        tags: [
          "Balances Qi (energy) along meridians",
          "Reduces fatigue and mental fog",
          "Relieves tension without oils",
          "Enhances digestion and vitality (holistic effects)",
          "Improves overall body awareness",
        ],
        bestFor: ["Oil-free option", "Energy balancing", "Gentle but firm pressure"],
        image: "/wellness-bg.jpg?height=200&width=300",
      },
      {
        id: generateTherapyId("Thai Yoga Stretching (Dry massage)"),
        name: "Thai Yoga Stretching (Dry massage)",
        duration: "90 minutes",
        price: "4000 INR",
        description:
          "A traditional healing art rooted in ancient Thai and Indian Ayurvedic wisdom, this dry massage blends acupressure, energy line work, and assisted yoga postures. Performed fully clothed without oils, it gently stretches the body, improves flexibility, enhances circulation, and promotes deep relaxation. Ideal for releasing muscular tension and restoring natural body balance through mindful movement and therapeutic touch.",
        ssss: ["PAIN RELIEF", "IMPROVED FLEXIBILITY", "BOOSTS ENERGY"],
        tags: [
          "Assisted stretching increases flexibility",
          "Releases tight hips, hamstrings, and lower back",
          "Improves energy flow and alertness",
          "Enhances joint mobility and posture",
          "Oil-free and comfortable for most skin types",
        ],
        bestFor: ["Flexibility gains", "Sedentary lifestyle", "Full-body stretch"],
        image: "/Signature Foot massage.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Traditional Hawaiian Healing Massage"),
        name: "Traditional Hawaiian Healing Massage",
        duration: "75 minutes",
        price: "3200 INR",
        description:
          "Immerse yourself in the sacred art of Lomi Lomi, the traditional Hawaiian healing massage known as the 'loving hands' technique. This deeply relaxing therapy uses rhythmic, flowing forearm strokes that mimic the ocean's waves—designed to release tension, improve circulation, and balance energy flow.",
        ssss: ["HEALING", "STRESS RELIEF", "LYMPHATIC FLOW"],
        tags: [
          "Long, flowing strokes calm the entire body",
          "Encourages lymphatic drainage and detox",
          "Promotes emotional release and softness",
          "Improves circulation with rhythmic cadence",
          "Induces a meditative relaxation state",
        ],
        bestFor: ["Emotional soothing", "Full-body flow", "Gentle, nurturing touch"],
        image: "/wellness-bg.jpg?height=200&width=300",
      },
      {
        id: generateTherapyId("Traditional Balinese Therapy"),
        name: "Traditional Balinese Therapy",
        duration: "90 minutes",
        price: "4200 INR",
        description:
          "Balinese massage is a form of traditional Indonesian massage which originated on the island of Bali. This deep massage is designed to work almost every Muscles in the body. It involves variety of techniques including stretching acupressure movements, palm pressure, Sliding, kneading can be felt deep into the muscles. Balinese massage aims to relax your state of mind promote blood flow provides oxygen and energy throughout the body.",
        ssss: ["INNER-STRENGTHENING", "RENEWING", "STRESS RELIEF"],
        tags: [
          "Blends stretch, acupressure, and deep kneading",
          "Relieves full-body fatigue and heaviness",
          "Boosts oxygenation and circulation",
          "Restores mental calm and focus",
          "Leaves muscles energized yet relaxed",
        ],
        bestFor: ["Comprehensive full-body work", "Deep relaxation", "Travel recovery"],
        image: "/Balinese massage bj.png?height=200&width=300",
      },
    ],
  },
  {
    category: "BODY SCRUBS & WRAPS",
    description: "Revitalize your skin with our exquisite range of body scrubs and nourishing wraps.",
    keytags: [
      "Removes dull, dead skin for immediate glow",
      "Improves skin texture and softness",
      "Enhances product absorption and hydration",
      "Supports detoxification and circulation",
    ],
    items: [
      {
        id: generateTherapyId("Andaman Sea Shell & Volcanic Mineral Salt Polish"),
        name: "Andaman Sea Shell & Volcanic Mineral Salt Polish",
        duration: "90 minutes",
        price: "3600 INR",
        description:
          "Indulge in a luxurious full-body treatment designed to exfoliate, detoxify, and relax. This therapy begins with a gentle yet effective skin polish using crushed Andaman sea shells and mineral-rich natural oil, leaving your skin smooth and radiant. A soothing body massage with volcanic mineral oil follows, restoring balance and nourishment. Conclude with calming detox bath rituals to complete the rejuvenation experience.",
        ssss: ["REJUVENATING", "RESTORATIVE", "RELAXING"],
        tags: [
          "Refines texture and boosts radiance",
          "Mineral-rich oils nourish and soften skin",
          "Supports detox and lymphatic flow",
          "Prepares skin for better absorption of moisturizers",
          "Combines exfoliation with relaxing massage",
        ],
        bestFor: ["Dull skin", "Pre-event glow", "Dryness and rough patches"],
        image: "/Signature Foot massage.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Moroccan Scrub + Coffee Bean Massage"),
        name: "Moroccan Scrub + Coffee Bean Massage",
        duration: "90 minutes",
        price: "3800 INR",
        description:
          "This therapy comprises of two course body scrubbing and polishing ritual with a blend of spice and herbs rich Moroccan scrub. It has A curative cooling effect which helps to detoxify the skin pores. It is followed by the massage with invigorating coffee bean oil that helps to soothe the muscles from deep within.",
        ssss: ["DEEP DETOXIFICATION", "NATURAL EXFOLIATION", "MUSCLE RELAXATION"],
        tags: [
          "Clears pores and smooths uneven texture",
          "Cooling effect soothes inflamed or tired skin",
          "Coffee oil invigorates and tones the skin",
          "Combats appearance of cellulite temporarily",
          "Leaves skin polished and body refreshed",
        ],
        bestFor: ["Full-body refresh", "Textural concerns", "Morning energy boost"],
        image: "/Moroccan scrub.png?height=200&width=300",
      },
      {
        id: generateTherapyId("HIMALAYAN PINK SALT SCRUB"),
        name: "HIMALAYAN PINK SALT SCRUB",
        duration: "45 minutes",
        price: "1800 INR",
        description:
          "Indulge in a luxurious body polish featuring pure Himalayan pink salt blended with aromatic oils and cream. This detoxifying treatment gently exfoliates dead skin cells, stimulates circulation, and revitalizes dull, tired skin. The result is a silky-smooth, deeply nourished body with a radiant, healthy glow. Perfect for renewing your skin and refreshing your senses.",
        ssss: ["DETOXIFYING", "EXFOLIATING", "HIMALAYAN SALT"],
        tags: [
          "Mineral-rich salts detox and revitalize",
          "Removes buildup for immediate smoothness",
          "Stimulates circulation for a healthy glow",
          "Aromatic oils leave skin hydrated and soft",
        ],
        bestFor: ["Rough skin", "Seasonal skin refresh", "Quick glow-up"],
        image: "/Himalaya pink salt srcub.png?height=200&width=300",
      },
      {
        id: generateTherapyId("WALNUT BODY SCRUB"),
        name: "WALNUT BODY SCRUB",
        duration: "30 minutes",
        price: "1500 INR",
        description:
          "A gentle yet effective exfoliation using finely ground walnut shells blended with nourishing oils and natural cream. It removes dead skin cells, unclogs pores, and leaves the skin feeling soft, radiant, and refreshed. Ideal for dull or rough skin, this scrub enhances natural glow and promotes healthy circulation.",
        ssss: ["GENTLE EXFOLIATION", "NOURISHING", "WALNUT"],
        tags: [
          "Polishes away dead skin without harshness",
          "Unclogs pores on arms and legs",
          "Improves microcirculation and radiance",
          "Leaves skin soft and moisturized",
        ],
        bestFor: ["Gentle exfoliation", "Sensitive to salts", "Maintenance between facials"],
        image: "/wellness-bg.jpg?height=200&width=300",
      },
      {
        id: generateTherapyId("DEAD SEA CLAY BODY WRAP"),
        name: "DEAD SEA CLAY BODY WRAP",
        duration: "45 Minutes",
        price: "2800 INR",
        description:
          "A rejuvenating full-body wrap using mineral-rich Dead Sea clay known for its detoxifying and skin-toning properties. This treatment helps draw out impurities, reduce water retention, and improve skin texture and firmness. Deeply relaxing and therapeutic, it leaves your body feeling purified, nourished, and refreshed.",
        ssss: ["DETOXIFYING", "SKIN TONING", "DEAD SEA CLAY"],
        tags: [
          "Draws out impurities and excess oil",
          "Firms and tones the appearance of skin",
          "Reduces transient water retention",
          "Infuses skin with minerals for softness",
        ],
        bestFor: ["Detox ritual", "Firming feel", "Post-travel reset"],
        image: "/wellness-bg.jpg?height=200&width=300",
      },
      {
        id: generateTherapyId("INDIAN MUD THERAPY"),
        name: "INDIAN MUD THERAPY",
        duration: "45 Minutes",
        price: "2500 INR",
        description:
          "Traditional healing treatment using mineral-rich Indian clay to detoxify, nourish, and tone the skin. The warm mud promotes deep relaxation, relieves muscle tension, and improves blood circulation. Perfect for restoring balance, reducing inflammation, and revitalizing both body and mind.",
        ssss: ["TRADITIONAL", "DETOXIFYING", "INDIAN MUD"],
        tags: [
          "Detoxifies while gently nourishing skin",
          "Warmth eases superficial muscle tension",
          "Promotes circulation for a healthy glow",
          "Leaves skin comfortable and refreshed",
        ],
        bestFor: ["Gentle detox", "Skin comfort", "Relaxation without massage oil"],
        image: "/wellness-bg.jpg?height=200&width=300",
      },
    ],
  },
  {
    category: "FOOT CARE",
    description: "Give your feet the attention they deserve with our specialized foot care therapies.",
    keytags: [
      "Relieves foot and lower-leg fatigue",
      "Improves blood flow to extremities",
      "Targets reflex points for full-body relaxation",
      "Supports healthy posture and mobility",
    ],
    items: [
      {
        id: generateTherapyId("Coffee Oil Foot Reflexology – Antigua, Guatemala"),
        name: "Coffee Oil Foot Reflexology – Antigua, Guatemala",
        duration: "30 minutes",
        price: "1200 INR",
        description:
          "A virtual countdown to 'butter' this tension taming massage begins with foot yoga followed with an aromatic warm, roasted coffee bean oil from prestigious areas of Antigua in Guatemala. It aims at loosening most troubled muscles while improving circulation and leaving you in a state of tranquility.",
        ssss: ["DETOXIFYING", "RELAXING", "CIRCULATION BOOSTING"],
        tags: [
          "Stimulates foot reflex points to relax the body",
          "Coffee oil invigorates and warms tired feet",
          "Encourages healthy blood flow and comfort",
          "Quick reset for busy schedules",
        ],
        bestFor: ["Desk workers", "Quick de-stress", "Cold feet and fatigue"],
        image: "/Signature Foot massage.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Muscle Fuel Foot Massage (Russian)"),
        name: "Muscle Fuel Foot Massage (Russian)",
        duration: "45 minutes",
        price: "1800 INR",
        description:
          "If you have been dragging your feet around, it time to jump on the healthy muscles and skin bandwagon. This therapy help to alleviate the muscle tension increase blood circulation and aids metabolism. The end result is happier pampered feet and Rejuvenated mind.",
        ssss: ["MUSCLE RECOVERY", "RE-ENERGIZING", "BOOSTS BLOOD CIRCULATION"],
        tags: [
          "Strong techniques relieve deep foot tension",
          "Boosts lower-leg circulation and warmth",
          "Helps reduce heaviness and soreness",
          "Re-energizes the whole body via footwork",
        ],
        bestFor: ["Long standing hours", "Athletic fatigue", "Heavy legs"],
        image: "/Muscle fuel foot massage.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Signature Foot Reflexology"),
        name: "Signature Foot Reflexology",
        duration: "60 Minutes",
        price: "2400 INR",
        description:
          "Experience our signature foot therapy designed to relax, restore, and revive. This indulgent treatment begins with a refreshing foot scrub to gently exfoliate and smooth the skin. It is followed by a deeply therapeutic reflexology massage that targets specific pressure points to relieve stress, improve circulation, and restore the body's natural balance. Perfect for soothing tired feet while promoting total-body wellness.",
        ssss: ["STRESS RELIEF", "RELIEVES MUSCLE PAIN", "IMPROVES CIRCULATION"],
        tags: [
          "Targets reflex points to balance body systems",
          "Soothes tired, sore feet and calves",
          "Improves circulation for warm, light legs",
          "Promotes full-body relaxation",
        ],
        bestFor: ["Total-body reset via feet", "Travel weariness", "Foot care lovers"],
        image: "/Signature Foot massage.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Uplifting Leg Massage (Full Leg Massage)"),
        name: "Uplifting Leg Massage (Full Leg Massage)",
        duration: "45 Minutes",
        price: "1800 INR",
        description:
          "An invigorating and deeply soothing treatment that targets the full length of the legs to relieve fatigue, improve circulation, and restore muscle tone. This unique massage relaxes tired muscles, reduces tension, and leaves your legs feeling light, refreshed, and energized. Perfect for those on their feet all day or seeking total leg rejuvenation with a luxurious touch.",
        ssss: ["RELIEVES FATIGUE", "IMPROVES CIRCULATION", "ENERGIZES LEGS"],
        tags: [
          "Releases tight quads, calves, and hamstrings",
          "Reduces swelling and heaviness",
          "Improves venous return for lighter legs",
          "Energizes the lower body and gait",
        ],
        bestFor: ["Standing professions", "Runners/cyclists", "Travel recovery"],
        image: "/Uplifting leg maasge.png?height=200&width=300",
      },
    ],
  },
  {
    category: "INSTANT INDULGENCE",
    description: "Targeted relief for your most stressed areas, promoting instant comfort and relaxation.",
    keytags: [
      "Quick relief in limited time",
      "Targets neck, shoulders, and back",
      "Improves focus and reduces headache tension",
      "Great between longer treatments",
    ],
    items: [
      {
        id: generateTherapyId("Instant Indulgence Chakra Head & Shoulder Massage"),
        name: "Chakra Head & Shoulder Massage",
        duration: "30 minutes",
        price: "1200 INR",
        description:
          "Instant and popular massage focusing on built up stress and muscle tension in all areas around neck and shoulder helps to relieves stress, improve circulation, improve concentration, encourage a quick and good sleep, helps to feel relaxed and calm your mind",
        ssss: ["RELAXING", "STRESS RELIEF", "MUSCLE TENSION RELEASE"],
        tags: [
          "Targets tension in head, neck, and shoulders",
          "Encourages quick stress release",
          "Improves mental clarity and concentration",
          "Supports better sleep onset",
        ],
        bestFor: ["Desk strain", "Headaches", "Short break relief"],
        image: "/wellness-bg.jpg?height=200&width=300",
      },
      {
        id: generateTherapyId("Soothing Back Massage"),
        name: "Soothing Back Massage",
        duration: "30 Minutes",
        price: "1200 INR",
        description:
          "A quick yet deeply effective therapy designed to ease tension in your most stressed areas—especially the neck, shoulders, and upper back. Our skilled therapists use targeted pressure-point techniques to release knots, improve circulation, and melt away fatigue. Perfect for those seeking instant relief and renewed energy in just half an hour",
        ssss: ["RELAXING", "STRESS RELIEF", "IMPROVES BLOOD CIRCULATION"],
        tags: [
          "Releases back and shoulder knots",
          "Reduces stiffness from prolonged sitting",
          "Improves local circulation and warmth",
          "Delivers fast relief in limited time",
        ],
        bestFor: ["Upper back tightness", "Desk posture", "Quick reset"],
        image: "/Soothing back massage.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Signature Stretching Back Massage"),
        name: "Signature Stretching Back Massage",
        duration: "45 Minutes",
        price: "2000 INR",
        description:
          "An ancient healing ritual that combines deep, static pressure with rhythmic stretching techniques to unlock tension and restore energy flow. This back-focused massage enhances flexibility, releases physical and emotional stress, and clears stagnant energy, leaving you feeling grounded, rebalanced, and deeply relaxed. A soulful journey toward inner peace and body renewal.",
        ssss: ["INNER-STRENGTH", "RELEASES DEEP MUSCLE TENSION", "IMPROVES FLEXIBILITY"],
        tags: [
          "Combines pressure point work with gentle stretch",
          "Increases back flexibility and ease",
          "Reduces stress stored along the spine",
          "Rebalances energy through the back body",
        ],
        bestFor: ["Back stiffness", "Gentle mobility work", "Rebalancing the spine"],
        image: "/Signature back massage.png?height=200&width=300",
      },
      {
        id: generateTherapyId("Champi Head & Back Massage"),
        name: "Champi Head & Back Massage",
        duration: "45 Minutes",
        price: "2000 INR",
        description:
          "Experience deep relaxation with this traditional Indian head and back massage. The treatment begins with a soothing Champi-style scalp massage, using gentle pressure and rhythmic strokes to relieve mental fatigue and boost circulation The session then focuses on the neck, shoulders, and upper back to release muscular tension, improve posture, and restore natural energy flow. Perfect for those dealing with stress, tension headaches, or long hours spent at a desk.",
        ssss: ["DE-STRESSES", "RELIEVES FATIGUE", "IMPROVES BLOOD CIRCULATION"],
        tags: [
          "Traditional Champi calms and refreshes the mind",
          "Eases tension headaches and eye strain",
          "Releases neck and shoulder tightness",
          "Improves posture awareness",
        ],
        bestFor: ["Mental fatigue", "Desk strain", "Head and neck tension"],
        image: "/Champi head and back massage.png?height=200&width=300",
      },
    ],
  },
  {
    category: "FACIAL / FACE CARE",
    description: "Reveal your natural radiance with our specialized facial treatments for all skin types.",
    keytags: [
      "Clarifies and refines pores",
      "Restores hydration and glow",
      "Targets dullness and uneven texture",
      "Relaxing facial massage to de-stress",
    ],
    items: [
      {
        id: generateTherapyId("Deep Cleansing Facial"),
        name: "Deep Cleansing Facial",
        duration: "30 Minutes",
        price: "1500 INR",
        description:
          "An intensive purifying and oxygenating facial that delivers instant radiance. This treatment effectively removes all traces of impurities, unclogs and refines pores, and helps balance the skin's natural moisture levels. Perfect for detoxifying and refreshing the skin, leaving it clean, bright, and revitalized.",
        ssss: ["PURIFYING", "REFINING", "OXYGENATING"],
        tags: [
          "Deep cleanse removes impurities and buildup",
          "Refines pores for a clearer look",
          "Balances oil and moisture levels",
          "Immediate brightening and freshness",
        ],
        bestFor: ["Congested skin", "Combination/oily", "Quick refresh"],
        image: "/wellness-bg.jpg?height=200&width=300",
      },
      {
        id: generateTherapyId("Instant Glow Facial"),
        name: "Instant Glow Facial",
        duration: "75 Minutes",
        price: "2800 INR",
        description:
          "A rejuvenating facial designed to instantly brighten and refresh dull, tired skin. This luxurious treatment includes deep cleansing, gentle exfoliation, a radiance-boosting mask, and a soothing facial massage. Enriched with vitamin rich serums and botanical extracts, it leaves your skin visibly glowing, smooth, and hydrated—perfect for special occasions or when you need that instant boost of radiance Ideal for all skin types",
        ssss: ["INSTANT RADIANCE", "DEEP HYDRATION", "DETOXIFICATION"],
        tags: [
          "Instant luminosity and softness",
          "Hydration boost with nourishing serums",
          "Gentle exfoliation smooths texture",
          "Facial massage relaxes and depuffs",
        ],
        bestFor: ["Events and photos", "Dullness", "All skin types"],
        image: "/wellness-bg.jpg?height=200&width=300",
      },
      {
        id: generateTherapyId("Organic Multi-Vitamin Soothing Facial"),
        name: "Organic Multi-Vitamin Soothing Facial",
        duration: "60 Minutes",
        price: "2500 INR",
        description:
          "A deeply hydrating and calming facial designed for all skin types, especially sensitive or sun-exposed skin. This soothing treatment blends organic aloe vera and herbal extracts to reduce redness, heal irritation, and restore natural moisture balance. It nourishes the skin from within, leaving your complexion visibly refreshed, rejuvenated, and radiant. Ideal for all skin types",
        ssss: ["NATURAL GLOW", "DEEP NOURISHMENT", "IMPROVED SKIN BRIGHTNESS"],
        tags: [
          "Calms redness and irritation",
          "Replenishes moisture barrier",
          "Gentle botanicals support skin repair",
          "Restores a comfortable, healthy glow",
        ],
        bestFor: ["Sensitive skin", "Sun-exposed", "Moisture barrier support"],
        image: "/wellness-bg.jpg?height=200&width=300",
      },
    ],
  },
]
