"use client"
import Image from "next/image"
import { Crown, Footprints } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#FDF8F3] font-sans text-[#3A2F24]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 lg:py-24 text-center overflow-hidden bg-gradient-to-b from-[#FDF8F3] to-white">
          {/* Background elements for premium feel */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-[#D4B8A0] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-[#E8D5C2] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-[#A08C78] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-[#5A4A3A] drop-shadow-sm">
              SR Holistic Wellness
            </h1>
            <p className="text-lg md:text-xl font-semibold text-[#C79F7F] mb-5">
              {'"Balancing Energy from Root to Crown"'}
            </p>
            <p className="text-base text-[#3A2F24] max-w-2xl mx-auto">
              At SR Holistic Wellness, we believe that true healing begins with energetic alignment—anchoring deeply
              into the body’s roots while reaching toward the heights of higher consciousness. Our approach is grounded
              in ancient wisdom and enriched by modern therapeutic practices, offering a holistic path to wellness
              through our signature energetic methodology: S-Meaning and R-Meaning.
            </p>
          </div>
        </section>

        {/* S-Meaning & R-Meaning Section */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 items-stretch">
              <div className="flex flex-col items-center text-center p-6 bg-[#FDF8F3] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="p-3">
                  <Crown className="h-12 w-12 text-[#5A4A3A] mb-3" />
                  <h3 className="text-xl font-bold text-[#5A4A3A] mb-2">
                    S-Meaning — Crown Chakra Alignment (Sahasrara)
                  </h3>
                </div>
                <div className="p-3 pt-0 flex-grow">
                  <p className="text-sm text-[#3A2F24]">
                    S-Meaning is the practice of channeling energy through the Crown Chakra, the gateway to spiritual
                    awakening and universal connection. This process, known as S-Mining, allows individuals to access
                    elevated states of awareness, clarity, and purpose—unlocking a deep sense of harmony with the higher
                    self and the divine.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-[#FDF8F3] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="p-3">
                  <Footprints className="h-12 w-12 text-[#C79F7F] mb-3" />
                  <h3 className="text-xl font-bold text-[#5A4A3A] mb-2">
                    R-Meaning — Root Chakra Activation (Muladhara)
                  </h3>
                </div>
                <div className="p-3 pt-0 flex-grow">
                  <p className="text-sm text-[#3A2F24]">
                    R-Meaning grounds and stabilizes the body by activating the Root Chakra, the foundation of physical,
                    emotional, and energetic security. Through this practice, clients cultivate strength, resilience,
                    and presence—fostering a strong connection to the Earth, the body, and the present moment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container px-4 md:px-6 text-center mx-auto max-w-4xl">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5A4A3A]">Our Story</h2>
              <p className="text-base text-[#3A2F24] leading-relaxed">
                At SR Holistic Wellness, we believe that true luxury lies in authenticity, purity, and deep healing.
                Founded with a vision to redefine wellness, our sanctuary blends timeless holistic traditions with the
                elegance of modern care—delivering an experience that nourishes both body and soul. From the moment you
                enter SR, you are enveloped in a world of serenity, where every detail is designed with intention. Our
                therapies are rooted in ancient healing practices and carried out by highly trained, professional
                therapists who honor the individual needs of each guest. We use only the finest 100% pure, natural
                essential oils and premium plant-based beauty products, handcrafted or curated to ensure they meet the
                highest standards of purity, sustainability, and efficacy. Each ingredient we use tells a story—of
                nature, healing, and uncompromising quality. SR Holistic Wellness is more than a spa—it’s a destination
                for those seeking deeper connection, authentic transformation, and radiant natural beauty. Whether
                you're here for healing, relaxation, or renewal, our commitment remains the same: luxury with purpose,
                care with integrity, and wellness that is truly holistic.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6 text-center mx-auto max-w-6xl">
            <div className="max-w-3xl mx-auto space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5A4A3A]">
                Meet Our Experts
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center text-center p-6 bg-[#FDF8F3] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  width="150"
                  height="150"
                  alt="Govind Kumar"
                  className="rounded-full object-cover mb-4 border-4 border-[#D4B8A0]"
                />
                <h3 className="text-xl font-bold text-[#5A4A3A] mb-2">Govind Kumar</h3>
                <p className="text-sm font-semibold text-[#C79F7F] mb-3">
                  Holistic Wellness Trainer | Spa Consultant | Beauty & Essential Oil Expert
                </p>
                <p className="text-sm text-[#3A2F24] flex-grow">
                  With over 13+ years of experience, Govind Kumar is a seasoned holistic wellness trainer with in-depth
                  knowledge of the hotel spa industry, essential oils, and natural beauty products. His journey blends
                  ancient healing wisdom with modern spa practices, offering a well-rounded and deeply effective
                  approach to wellness.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-[#FDF8F3] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  width="150"
                  height="150"
                  alt="Uday Nair"
                  className="rounded-full object-cover mb-4 border-4 border-[#D4B8A0]"
                />
                <h3 className="text-xl font-bold text-[#5A4A3A] mb-2">Uday Nair</h3>
                <p className="text-sm font-semibold text-[#C79F7F] mb-3">
                  Human Resources Professional & Kerala Ayurvedic Panchakarma Expert | 18 Years of Experience
                </p>
                <p className="text-sm text-[#3A2F24] flex-grow">
                  Uday brings a people-first approach to SR Holistic Wellness, combining strong HR leadership with deep
                  expertise in Ayurvedic Panchakarma. His in-depth knowledge of traditional healing practices helps
                  create a balanced, nurturing environment where both staff and clients flourish in harmony with
                  holistic wellness principles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-[#4A3B2E] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Ready for Your Wellness Journey?</h2>
            <p className="text-base mb-8 opacity-90">
              Book a personalized consultation or explore our packages to find your perfect path to harmony.
            </p>
            <a
              href="/contact" // Assuming this button should link to the contact page
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#C79F7F] text-[#3A2F24] hover:bg-[#A08C78] px-8 py-3 shadow-lg hover:shadow-xl focus-visible:ring-[#A08C78]"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <style jsx>{`
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
    </div>
  )
}
