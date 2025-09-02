"use client"
import Image from "next/image"
import Link from "next/link"
import { Crown, User, CheckCircle2, Leaf, Shield, Sparkles } from "lucide-react"
import BenefitCard from "@/components/about/benefit-card"
import FAQ from "@/components/about/faq"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-stone-100 font-sans">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-stone-50 border-b border-stone-200">
        <div className="mx-auto px-4 lg:px-8 max-w-6xl">
          <ol className="flex items-center gap-2 py-3 text-xs text-stone-500">
            <li>
              <Link className="hover:text-stone-700 transition-colors" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-stone-400">
              /
            </li>
            <li aria-current="page" className="text-stone-700">
              About Us
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl lg:text-4xl font-light text-stone-700 leading-tight text-balance">
                  SR Holistic
                  <span className="block text-sage-600">Wellness</span>
                </h1>
                <div className="w-12 h-px bg-sage-300"></div>
              </div>

              <p className="text-sage-600 font-light italic text-lg">Balancing Energy from Root to Crown</p>

              <p className="text-sm text-stone-600 leading-relaxed font-light max-w-prose">
                At SR Holistic Wellness, true healing begins with energetic alignment—anchoring deeply into the body’s
                roots while reaching toward higher consciousness. We blend ancient wisdom with modern therapeutic
                practices through our signature S-Meaning and R-Meaning methodology.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="inline-flex">
                  <span className="px-6 py-2 bg-sage-500 text-white text-sm rounded font-light hover:bg-sage-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage-600">
                    Begin Journey
                  </span>
                </Link>
                <Link href="#methodology" className="inline-flex">
                  <span className="px-6 py-2 border border-sage-300 text-sage-700 text-sm rounded font-light hover:bg-sage-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage-600">
                    Learn More
                  </span>
                </Link>
              </div>

              {/* Trust badges */}
              <ul className="flex flex-wrap items-center gap-3 pt-3" aria-label="Highlights">
                <li className="text-xs text-stone-600 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-700" /> 100% Pure Oils
                </li>
                <li className="text-xs text-stone-600 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-700" /> Certified Therapists
                </li>
                <li className="text-xs text-stone-600 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-700" /> Personalized Care
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-sm p-4 border border-stone-200">
                <Image
                  src="/s1.jpeg?height=300&width=600"
                  width={600}
                  height={400}
                  alt="Relaxing spa environment at SR Holistic Wellness"
                  className="w-full h-72 object-cover rounded"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section aria-labelledby="benefits-heading" className="py-12 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-8">
            <h2 id="benefits-heading" className="text-2xl lg:text-3xl font-light text-stone-700 mb-2 text-balance">
              Key Benefits
            </h2>
            <div className="w-12 h-px bg-sage-300 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <BenefitCard
              icon={<Leaf className="w-5 h-5 text-sage-700" aria-hidden="true" />}
              title="Natural & Pure"
              description="We use 100% pure essential oils and premium plant-based products—gentle, clean, and effective."
            />
            <BenefitCard
              icon={<Shield className="w-5 h-5 text-sage-700" aria-hidden="true" />}
              title="Safe & Trusted"
              description="Therapies performed by highly trained professionals with careful attention to comfort and safety."
            />
            <BenefitCard
              icon={<Sparkles className="w-5 h-5 text-sage-700" aria-hidden="true" />}
              title="Visible Results"
              description="Experience deep relaxation, improved circulation, and a restored mind–body balance."
            />
            <BenefitCard
              icon={<CheckCircle2 className="w-5 h-5 text-sage-700" aria-hidden="true" />}
              title="Tailored To You"
              description="Every session is customized to your needs—from pressure and focus areas to aromatic blends."
            />
          </div>
        </div>
      </section>

      {/* Methodology */}
<section
  id="methodology"
  className="py-16 bg-gradient-to-b from-stone-50 via-white to-stone-100 relative"
  aria-labelledby="methodology-heading"
>
  <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2
        id="methodology-heading"
        className="text-3xl lg:text-4xl font-light text-stone-900 mb-3 tracking-wide drop-shadow-sm"
      >
        Our Methodology
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-sage-400 to-lavender-400 mx-auto rounded-full"></div>
      <p className="mt-4 text-stone-700 text-sm lg:text-base max-w-2xl mx-auto font-light">
        A balanced approach combining spiritual alignment and grounding practices
        for holistic growth and clarity.
      </p>
    </div>

    {/* Methodology Grid */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* S-Meaning */}
      <article className="relative group bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="absolute inset-0">
          <Image
            src="/r.jpg"
            fill
            alt="S-Meaning illustration"
            className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
          />
          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-white/85 to-white/95"
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative z-10 p-7">
          <div className="flex items-start gap-4 mb-5">
            <div className="p-3 bg-lavender-100 rounded-xl shadow-inner">
              <Crown className="w-5 h-5 text-lavender-700" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-1 drop-shadow-sm">
                S-Meaning
              </h3>
              <p className="text-xs text-lavender-700 font-medium tracking-wide drop-shadow-sm">
                Crown Chakra Alignment (Sahasrara)
              </p>
            </div>
          </div>

          <p className="text-sm text-stone-800 leading-relaxed font-light mb-5 drop-shadow-sm">
            S-Meaning channels energy through the Crown Chakra—the gateway to
            spiritual awakening and universal connection. This process, known as
            S-Mining, supports clarity, higher consciousness, and purpose.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Spiritual Awakening", "Universal Connection", "Higher Consciousness"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-lavender-50 text-black-700 rounded-full text-xs font-medium border border-lavender-200 shadow-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </article>

      {/* R-Meaning */}
      <article className="relative group bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="absolute inset-0">
          <Image
            src="/s.jpg"
            fill
            alt="R-Meaning illustration"
            className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
          />
          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-white/85 to-white/95"
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative z-10 p-7">
          <div className="flex items-start gap-4 mb-5">
            <div className="p-3 bg-sage-100 rounded-xl shadow-inner">
              <User className="w-5 h-5 text-sage-700" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-1 drop-shadow-sm">
                R-Meaning
              </h3>
              <p className="text-xs text-black-700 font-medium tracking-wide drop-shadow-sm">
                Root Chakra Activation (Muladhara)
              </p>
            </div>
          </div>

          <p className="text-sm text-stone-800 leading-relaxed font-light mb-5 drop-shadow-sm">
            R-Meaning grounds and stabilizes by activating the Root Chakra—the
            foundation of security and presence. It cultivates strength,
            resilience, and a deeper connection to the body and Earth.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Grounding", "Stability", "Earth Connection"].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-sage-50 text-black-700 rounded-full text-xs font-medium border border-sage-200 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  </div>
</section>



      {/* Our Story */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-light text-stone-700 mb-2 text-balance">Our Story</h2>
            <div className="w-12 h-px bg-sage-300 mx-auto"></div>
          </div>

          <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
            <div className="space-y-4">
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                At SR Holistic Wellness, we believe that true luxury lies in authenticity, purity, and deep healing. Our
                sanctuary blends timeless holistic traditions with modern care—nourishing both body and soul.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                From the moment you enter, you’re enveloped in serenity. Our therapies, rooted in ancient practices and
                delivered by highly trained professionals, honor the unique needs of each guest.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                We use only 100% pure essential oils and premium plant-based products—handcrafted or carefully curated
                to meet the highest standards of purity, sustainability, and efficacy.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                SR Holistic Wellness is more than a spa—it’s a destination for connection, transformation, and radiant
                natural beauty. We promise luxury with purpose and care with integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-light text-stone-700 mb-2">Meet Our Experts</h2>
            <div className="w-12 h-px bg-sage-300 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Govind Kumar */}
            <article className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-light text-sage-600" aria-hidden="true">
                    GK
                  </span>
                  <span className="sr-only">Govind Kumar avatar</span>
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
                With 13+ years of experience, Govind blends ancient healing wisdom with modern spa practices for a
                deeply effective approach to wellness.
              </p>
            </article>

            {/* Uday Nair */}
            <article className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-eucalyptus-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-light text-eucalyptus-600" aria-hidden="true">
                    UN
                  </span>
                  <span className="sr-only">Uday Nair avatar</span>
                </div>
                <div>
                  <h3 className="text-lg font-light text-stone-700 mb-1">Uday Nair</h3>
                  <p className="text-xs text-eucalyptus-600 font-light mb-2">
                    HR Professional & Kerala Ayurvedic Panchakarma Expert | 18 Years of Experience
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
                Uday combines people-first leadership with deep Ayurvedic expertise, fostering a balanced environment
                where staff and clients flourish.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="py-12 bg-stone-700">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-light text-white leading-tight text-balance">
              Ready to Transform Your
              <span className="block text-stone-300">Wellness Journey?</span>
            </h2>

            <p className="text-sm text-stone-300 font-light leading-relaxed">
              Experience the harmony of ancient wisdom and modern luxury.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <Link href="/contact" className="inline-flex">
                <span className="px-6 py-2 bg-sage-500 text-white text-sm rounded font-light hover:bg-sage-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage-400">
                  Book Consultation
                </span>
              </Link>
              <Link href="/packages" className="inline-flex">
                <span className="px-6 py-2 border border-stone-500 text-stone-300 text-sm rounded font-light hover:bg-stone-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-400">
                  Explore Packages
                </span>
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
        .text-lavender-800 { color: #6f6592; }

        .text-eucalyptus-600 { color: #7ba05b; }
        .bg-eucalyptus-50 { background-color: #f7f9f5; }
        .bg-eucalyptus-100 { background-color: #eef3ea; }
        .border-eucalyptus-200 { border-color: #d6e2cd; }
      `}</style>
    </main>
  )
}
