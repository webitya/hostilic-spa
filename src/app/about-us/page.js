"use client"
import Image from "next/image"
import Link from "next/link"
import { Crown, User } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Compact Hero Section */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl lg:text-4xl font-light text-stone-700 leading-tight">
                  SR Holistic
                  <span className="block text-sage-600">Wellness</span>
                </h1>
                <div className="w-12 h-px bg-sage-300"></div>
              </div>

              <p className="text-sage-600 font-light italic text-lg">Balancing Energy from Root to Crown</p>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                At SR Holistic Wellness, we believe that true healing begins with energetic alignment—anchoring deeply
                into the body s roots while reaching toward the heights of higher consciousness. Our approach is
                grounded in ancient wisdom and enriched by modern therapeutic practices, offering a holistic path to
                wellness through our signature energetic methodology: S-Meaning and R-Meaning.
              </p>

              <div className="flex gap-3 pt-2">
                <Link href="/contact">
                  <button className="px-6 py-2 bg-sage-500 text-white text-sm rounded font-light hover:bg-sage-600 transition-colors">
                    Begin Journey
                  </button>
                </Link>
                <Link href="/about-us">
                  <button className="px-6 py-2 border border-sage-300 text-sage-700 text-sm rounded font-light hover:bg-sage-50 transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-sm p-4 border border-stone-200">
                <Image
                  src="/s1.jpeg?height=300&width=400"
                  width={400}
                  height={400}
                  alt="Wellness Journey"
                  className="w-full h-72 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Methodology Section */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-light text-stone-700 mb-2">Our Methodology</h2>
            <div className="w-12 h-px bg-sage-300 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* S-Meaning Card - Minimal */}
            <div className="relative bg-white rounded-lg p-6 border border-stone-200 overflow-hidden">
              {/* Subtle Background Image */}
              <div className="absolute inset-0">
                <Image src="/r.jpg" fill alt="S-Meaning Background" className="object-cover opacity-45" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="p-2 bg-lavender-100 rounded">
                    <Crown className="w-4 h-4 text-lavender-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-stone-800 mb-1">S-Meaning</h3>
                    <p className="text-xs text-lavender-800 font-light">Crown Chakra Alignment (Sahasrara)</p>
                  </div>
                </div>

                <p className="text-sm text-stone-800 leading-relaxed font-light mb-4">
                  S-Meaning is the practice of channeling energy through the Crown Chakra, the gateway to spiritual
                  awakening and universal connection. This process, known as S-Mining, allows individuals to access
                  elevated states of awareness, clarity, and purpose—unlocking a deep sense of harmony with the higher
                  self and the divine.
                </p>

                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-lavender-50 text-lavender-600 rounded text-xs font-light border border-lavender-200">
                    Spiritual Awakening
                  </span>
                  <span className="px-2 py-1 bg-lavender-50 text-lavender-600 rounded text-xs font-light border border-lavender-200">
                    Universal Connection
                  </span>
                  <span className="px-2 py-1 bg-lavender-50 text-lavender-600 rounded text-xs font-light border border-lavender-200">
                    Higher Consciousness
                  </span>
                </div>
              </div>
            </div>

            {/* R-Meaning Card - Minimal */}
            <div className="relative bg-white rounded-lg p-6 border border-stone-200 overflow-hidden">
              {/* Subtle Background Image */}
              <div className="absolute inset-0">
                <Image src="/s.jpg" fill alt="R-Meaning Background" className="object-cover opacity-45" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="p-2 bg-sage-100 rounded">
                    <User className="w-4 h-4 text-sage-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-stone-800 mb-1">R-Meaning</h3>
                    <p className="text-xs text-sage-800 font-light">Root Chakra Activation (Muladhara)</p>
                  </div>
                </div>

                <p className="text-sm text-stone-800 leading-relaxed font-light mb-4">
                  R-Meaning grounds and stabilizes the body by activating the Root Chakra, the foundation of physical,
                  emotional, and energetic security. Through this practice, clients cultivate strength, resilience, and
                  presence—fostering a strong connection to the Earth, the body, and the present moment.
                </p>

                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-sage-50 text-sage-600 rounded text-xs font-light border border-sage-200">
                    Grounding
                  </span>
                  <span className="px-2 py-1 bg-sage-50 text-sage-600 rounded text-xs font-light border border-sage-200">
                    Stability
                  </span>
                  <span className="px-2 py-1 bg-sage-50 text-sage-600 rounded text-xs font-light border border-sage-200">
                    Earth Connection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Our Story Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-light text-stone-700 mb-2">Our Story</h2>
            <div className="w-12 h-px bg-sage-300 mx-auto"></div>
          </div>

          <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
            <div className="space-y-4">
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                At SR Holistic Wellness, we believe that true luxury lies in authenticity, purity, and deep healing.
                Founded with a vision to redefine wellness, our sanctuary blends timeless holistic traditions with the
                elegance of modern care—delivering an experience that nourishes both body and soul.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                From the moment you enter SR, you are enveloped in a world of serenity, where every detail is designed
                with intention. Our therapies are rooted in ancient healing practices and carried out by highly trained,
                professional therapists who honor the individual needs of each guest.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                We use only the finest 100% pure, natural essential oils and premium plant-based beauty products,
                handcrafted or curated to ensure they meet the highest standards of purity, sustainability, and
                efficacy. Each ingredient we use tells a story—of nature, healing, and uncompromising quality.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                SR Holistic Wellness is more than a spa it s a destination for those seeking deeper connection,
                authentic transformation, and radiant natural beauty. Whether you are here for healing, relaxation, or
                renewal, our commitment remains the same: luxury with purpose, care with integrity, and wellness that is
                truly holistic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Team Section */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-light text-stone-700 mb-2">Meet Our Experts</h2>
            <div className="w-12 h-px bg-sage-300 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Govind Kumar - Complete Content */}
            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-light text-sage-600">GK</span>
                </div>
                <div>
                  <h3 className="text-lg font-light text-stone-700 mb-1">Govind Kumar</h3>
                  <p className="text-xs text-sage-600 font-light mb-2">
                    Holistic Wellness Trainer | Spa Consultant | Beauty & Essential Oil Expert
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-sage-50 text-sage-600 rounded text-xs font-light border border-sage-200">
                      13+ Years
                    </span>
                    <span className="px-2 py-1 bg-sage-50 text-sage-600 rounded text-xs font-light border border-sage-200">
                      Essential Oils
                    </span>
                    <span className="px-2 py-1 bg-sage-50 text-sage-600 rounded text-xs font-light border border-sage-200">
                      Spa Industry
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                With over 13+ years of experience, Govind Kumar is a seasoned holistic wellness trainer with in-depth
                knowledge of the hotel spa industry, essential oils, and natural beauty products. His journey blends
                ancient healing wisdom with modern spa practices, offering a well-rounded and deeply effective approach
                to wellness.
              </p>
            </div>

            {/* Uday Nair - Complete Content */}
            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-eucalyptus-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-light text-eucalyptus-600">UN</span>
                </div>
                <div>
                  <h3 className="text-lg font-light text-stone-700 mb-1">Uday Nair</h3>
                  <p className="text-xs text-eucalyptus-600 font-light mb-2">
                    Human Resources Professional & Kerala Ayurvedic Panchakarma Expert | 18 Years of Experience
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-eucalyptus-50 text-eucalyptus-600 rounded text-xs font-light border border-eucalyptus-200">
                      18+ Years
                    </span>
                    <span className="px-2 py-1 bg-eucalyptus-50 text-eucalyptus-600 rounded text-xs font-light border border-eucalyptus-200">
                      Panchakarma
                    </span>
                    <span className="px-2 py-1 bg-eucalyptus-50 text-eucalyptus-600 rounded text-xs font-light border border-eucalyptus-200">
                      Kerala Ayurveda
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Uday brings a people-first approach to SR Holistic Wellness, combining strong HR leadership with deep
                expertise in Ayurvedic Panchakarma. His in-depth knowledge of traditional healing practices helps create
                a balanced, nurturing environment where both staff and clients flourish in harmony with holistic
                wellness principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Call to Action */}
      <section className="py-12 bg-stone-700">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-light text-white leading-tight">
              Ready to Transform Your
              <span className="block text-stone-300">Wellness Journey?</span>
            </h2>

            <p className="text-sm text-stone-300 font-light leading-relaxed">
              Experience the perfect harmony of ancient wisdom and modern luxury.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <Link href="/contact">
                <button className="px-6 py-2 bg-sage-500 text-white text-sm rounded font-light hover:bg-sage-600 transition-colors">
                  Book Consultation
                </button>
              </Link>
              <Link href="/about-us">
                <button className="px-6 py-2 border border-stone-500 text-stone-300 text-sm rounded font-light hover:bg-stone-600 transition-colors">
                  Explore Packages
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Spa Colors CSS */}
      <style jsx>{`
        .text-sage-600 { color: #7c9885; }
        .text-sage-700 { color: #6b8471; }
        .bg-sage-50 { background-color: #f6f8f6; }
        .bg-sage-100 { background-color: #e8f0ea; }
        .bg-sage-500 { background-color: #7c9885; }
        .bg-sage-600 { background-color: #6b8471; }
        .border-sage-200 { border-color: #d4e0d7; }
        .border-sage-300 { border-color: #b8ccbc; }
        .hover\\:bg-sage-50:hover { background-color: #f6f8f6; }
        .hover\\:bg-sage-600:hover { background-color: #6b8471; }

        .text-lavender-600 { color: #9b8db5; }
        .bg-lavender-50 { background-color: #f8f7fb; }
        .bg-lavender-100 { background-color: #ede8f3; }
        .border-lavender-200 { border-color: #e0dae8; }

        .text-eucalyptus-600 { color: #7ba05b; }
        .bg-eucalyptus-50 { background-color: #f7f9f5; }
        .bg-eucalyptus-100 { background-color: #eef3ea; }
        .border-eucalyptus-200 { border-color: #d6e2cd; }
      `}</style>
    </div>
  )
}
