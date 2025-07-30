"use client"

export default function HomeWellness() {
  return (
    <div className="bg-gradient-to-br from-stone-50 via-sage-50 to-lavender-50">
      {/* Compact Full-Width Hero Section */}
      <section className="w-full py-8">
        <div className="w-full px-6 lg:px-6">
          {/* Single Heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl lg:text-3xl font-light text-stone-700 mb-2">Our Story</h1>
            <div className="w-12 h-px bg-sage-300 mx-auto"></div>
          </div>

          {/* Story Content - Paragraph Breaks */}
          <div className="container mx-auto space-y-4">
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
              handcrafted or curated to ensure they meet the highest standards of purity, sustainability, and efficacy.
              Each ingredient we use tells a story—of nature, healing, and uncompromising quality.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed font-light">
              SR Holistic Wellness is more than a spa—it's a destination for those seeking deeper connection, authentic
              transformation, and radiant natural beauty. Whether you're here for healing, relaxation, or renewal, our
              commitment remains the same: luxury with purpose, care with integrity, and wellness that is truly
              holistic.
            </p>
          </div>
        </div>
      </section>

      {/* Minimal Spa Colors CSS */}
      <style jsx>{`
        .text-sage-600 { color: #7c9885; }
        .text-sage-700 { color: #6b8471; }
        .bg-sage-300 { background-color: #b8ccbc; }
      `}</style>
    </div>
  )
}
