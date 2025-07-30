"use client"

import Image from "next/image"
import Link from "next/link"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import PeopleIcon from "@mui/icons-material/People"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import WorkIcon from "@mui/icons-material/Work"
import BusinessIcon from "@mui/icons-material/Business"
import AssessmentIcon from "@mui/icons-material/Assessment"
import SupportIcon from "@mui/icons-material/Support"

export default function Component() {
  const features = [
    {
      icon: CheckCircleIcon,
      title: "End-to-End Spa Management",
      description:
        "From staffing and training to marketing and service optimization, we manage every aspect of spa operations to ensure smooth functionality and superior guest satisfaction. We implement proven systems to boost revenue, streamline workflow, and elevate the overall guest experience Our holistic approach ensures your spa runs efficiently while delivering exceptional wellness services.",
    },
    {
      icon: LightbulbIcon,
      title: "Customized Wellness Solutions",
      description:
        "Our team collaborates with partners to design bespoke wellness programs that are tailored to the unique identity and target audience of each property. Whether you're aiming to introduce traditional spa services or innovative holistic treatments, we ensure a seamless integration with your brand.",
    },
    {
      icon: PeopleIcon,
      title: "Expertise in Diverse Wellness Disciplines",
      description:
        "Our knowledge spans across a wide range of wellness offerings, including therapeutic massages, Ayurveda, beauty treatments, salon services, and specialized wedding makeovers. By partnering with us, you can offer your guests a comprehensive wellness experience that stands out in the market.",
    },
    {
      icon: WorkIcon,
      title: "Professional Spa Training & Hiring Services",
      description:
        "At SR Holistic Wellness, we ensure your spa is staffed with certified, highly trained therapists dedicated to delivering a consistently exceptional guest experience. Our team specializes in sourcing, training, and onboarding professionals who reflect the highest standards of service and the calming essence your brand represents.",
    },
    {
      icon: TrendingUpIcon,
      title: "Revenue Growth Strategies",
      description:
        "Our proven track record in spa revenue optimization helps maximize profitability without compromising service quality. By leveraging our strategic planning and innovative marketing solutions, your spa will see increased guest traffic and sustained financial growth. We implement data-driven pricing, upselling techniques, and targeted promotions to boost revenue. Our customized strategies ensure long-term success and stronger brand presence in a competitive market.",
    },
    {
      icon: VerifiedUserIcon,
      title: "Trusted Hospitality partnerships",
      description:
        "With established partnerships across prestigious 5-star hotels, heritage properties, and luxury resorts, we bring extensive industry experience and deep insight into hospitality operational standards. Our collaborations ensure that your property is positioned as a standout wellness destination, blending excellence with elegance.",
    },
    {
      icon: BusinessIcon,
      title: "Dedicated Corporate Support",
      description:
        "Our specialized corporate team streamlines spa operations and ensures that our partners' wellness programs run efficiently and profitably. We handle the operational complexities, allowing you to focus on delivering a complete guest experience.",
    },
    {
      icon: AssessmentIcon,
      title: "Spa Audits & Quality Control",
      description:
        "We specialize in professional spa audits and the implementation of robust quality control systems. Our goal is to ensure consistently high service standards, enhance operational efficiency, and deliver an exceptional guest experience every time.",
    },
    {
      icon: SupportIcon,
      title: "Post-Launch Growth Support",
      description:
        "We provide ongoing support through regular audits, staff training refreshers, and strategic updates—ensuring your spa continues to grow, adapt, and remain competitive in a dynamic market.",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-[#FDF8F3] to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-20 pt-24 bg-gradient-to-br from-[#FDF8F3] via-[#F8F4EF] to-[#F3EFE8] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#82B24A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#3A2F24] rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="bg-gradient-to-r from-[#82B24A] to-[#719E40] bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                      Partnership Opportunity
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl text-[#3A2F24] leading-tight">
                    Partner with Us
                  </h1>
                  <p className="max-w-[650px] text-[#5C5C5C] text-base md:text-lg leading-relaxed">
                    Join hands with SR Holistic Wellness Solutions, India s fastest-growing spa management firm, and
                    unlock the full potential of your wellness offerings. Our partnerships are designed to create
                    transformative, high-impact spa and wellness experiences for hotels, resorts, and wellness brands.
                    Whether you are looking to enhance existing services or build a spa from the ground up, our
                    expertise ensures exceptional guest experiences and operational excellence.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/about"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#82B24A] to-[#719E40] px-6 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719E40] focus-visible:ring-offset-2"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-lg border-2 border-[#82B24A] bg-white px-6 text-sm font-semibold text-[#3A2F24] shadow-md hover:bg-[#82B24A] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82B24A] focus-visible:ring-offset-2"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#82B24A]/20 to-[#3A2F24]/20 rounded-2xl blur-2xl transform rotate-6"></div>
                <Image
                  src="/logo1.png"
                  width="400"
                  height="400"
                  alt="Spa interior"
                  className="relative mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6 text-center mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#3A2F24] leading-tight">
                At SR Holistic Wellness, we bring:
              </h2>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#82B24A]/5 to-[#3A2F24]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#82B24A] to-[#719E40] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-[#3A2F24] mb-3 leading-tight">{feature.title}</h3>
                          <p className="text-[#5C5C5C] text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-br from-[#FDF8F3] via-[#F8F4EF] to-[#F3EFE8] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#82B24A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3A2F24] rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 text-center space-y-8 mx-auto max-w-7xl relative z-10">
            <div className="max-w-5xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#3A2F24] leading-tight">
                Partnering with SR Holistic Wellness Solutions means aligning with a brand that is committed to Creating
                Wellness Excellence.
              </h2>
              <p className="max-w-4xl mx-auto text-[#5C5C5C] text-base md:text-lg leading-relaxed">
                Together, we can elevate the standard of wellness for your guests, positioning your property as a
                sought-after destination for relaxation and rejuvenation. collaborate to craft unparalleled wellness
                experiences that set your property apart from the competition.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#82B24A] to-[#719E40] px-8 py-4 text-base font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#719E40] focus-visible:ring-offset-2 max-w-2xl text-center leading-relaxed"
              >
                Reach out to us and explore how we can transform your spa and wellness offerings Let s co-create a
                signature journey that your guests will never forget.
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
