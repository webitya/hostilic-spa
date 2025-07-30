import Image from "next/image"
import Link from "next/link"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import PeopleIcon from "@mui/icons-material/People"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import WorkIcon from "@mui/icons-material/Work"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FDF8F3]">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#3A2F24]">
                    Partner with Us
                  </h1>
                  <p className="max-w-[700px] text-[#5C5C5C] md:text-xl">
                    Join hands with SR Holistic Wellness Solutions, India s fastest-growing spa management firm, and
                    unlock the full potential of your wellness offerings. Our partnerships are designed to create
                    transformative, high-impact spa and wellness experiences for hotels, resorts, and wellness brands.
                    Whether you are looking to enhance existing services or build a spa from the ground up, our expertise
                    ensures exceptional guest experiences and operational excellence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#82B24A] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#719E40] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#719E40] disabled:pointer-events-none disabled:opacity-50"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#D4C7B8] bg-white px-8 text-sm font-medium text-[#3A2F24] shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <Image
                src="/logo1.png"
                width="320"
                height="320"
                alt="Spa interior"
                className="mx-auto overflow-hidden rounded-xl "
              />
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 text-center mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3A2F24]">
                At SR Holistic Wellness, we bring:
              </h2>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <CheckCircleIcon className="h-10 w-10 text-emerald-600 mb-4" style={{ fontSize: "40px" }} />
                  <h3 className="text-xl font-semibold text-[#3A2F24]">End-to-End Spa Management</h3>
                </div>
                <div className="p-4 pt-0">
                  <p className="text-[#5C5C5C]">
                    From staffing and training to marketing and service optimization, we manage every aspect of spa
                    operations to ensure smooth functionality and superior guest satisfaction. We implement proven
                    systems to boost revenue, streamline workflow, and elevate the overall guest experience Our holistic
                    approach ensures your spa runs efficiently while delivering exceptional wellness services.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <LightbulbIcon className="h-10 w-10 text-emerald-600 mb-4" style={{ fontSize: "40px" }} />
                  <h3 className="text-xl font-semibold text-[#3A2F24]">Customized Wellness Solutions</h3>
                </div>
                <div className="p-4 pt-0">
                  <p className="text-[#5C5C5C]">
                    Our team collaborates with partners to design bespoke wellness programs that are tailored to the
                    unique identity and target audience of each property. Whether you’re aiming to introduce traditional
                    spa services or innovative holistic treatments, we ensure a seamless integration with your brand.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <PeopleIcon className="h-10 w-10 text-emerald-600 mb-4" style={{ fontSize: "40px" }} />
                  <h3 className="text-xl font-semibold text-[#3A2F24]">Expertise in Diverse Wellness Disciplines</h3>
                </div>
                <div className="p-4 pt-0">
                  <p className="text-[#5C5C5C]">
                    Our knowledge spans across a wide range of wellness offerings, including therapeutic massages,
                    Ayurveda, beauty treatments, salon services, and specialized wedding makeovers. By partnering with
                    us, you can offer your guests a comprehensive wellness experience that stands out in the market.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <WorkIcon className="h-10 w-10 text-emerald-600 mb-4" style={{ fontSize: "40px" }} />
                  <h3 className="text-xl font-semibold text-[#3A2F24]">Professional Spa Training & Hiring Services</h3>
                </div>
                <div className="p-4 pt-0">
                  <p className="text-[#5C5C5C]">
                    At SR Holistic Wellness, we ensure your spa is staffed with certified, highly trained therapists
                    dedicated to delivering a consistently exceptional guest experience. Our team specializes in
                    sourcing, training, and onboarding professionals who reflect the highest standards of service and
                    the calming essence your brand represents.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <TrendingUpIcon className="h-10 w-10 text-emerald-600 mb-4" style={{ fontSize: "40px" }} />
                  <h3 className="text-xl font-semibold text-[#3A2F24]">Revenue Growth Strategies</h3>
                </div>
                <div className="p-4 pt-0">
                  <p className="text-[#5C5C5C]">
                    Our proven track record in spa revenue optimization helps maximize profitability without
                    compromising service quality. By leveraging our strategic planning and innovative marketing
                    solutions, your spa will see increased guest traffic and sustained financial growth. We implement
                    data-driven pricing, upselling techniques, and targeted promotions to boost revenue. Our customized
                    strategies ensure long-term success and stronger brand presence in a competitive market.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <VerifiedUserIcon className="h-10 w-10 text-emerald-600 mb-4" style={{ fontSize: "40px" }} />
                  <h3 className="text-xl font-semibold text-[#3A2F24]">Trusted Hospitality partnerships</h3>
                </div>
                <div className="p-4 pt-0">
                  <p className="text-[#5C5C5C]">
                    With established partnerships across prestigious 5-star hotels, heritage properties, and luxury
                    resorts, we bring extensive industry experience and deep insight into hospitality operational
                    standards. Our collaborations ensure that your property is positioned as a standout wellness
                    destination, blending excellence with elegance.
                  </p>
                </div>
              </div>
                   <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <TrendingUpIcon className="h-10 w-10 text-emerald-600 mb-4" style={{ fontSize: "40px" }} />
                  <h3 className="text-xl font-semibold text-[#3A2F24]">  Dedicated Corporate Support</h3>
                </div>
                <div className="p-4 pt-0">
                  <p className="text-[#5C5C5C]">
                         Our specialized corporate team streamlines spa operations and ensures that our partners’ wellness
                programs run efficiently and profitably. We handle the operational complexities, allowing you to focus
                on delivering a complete guest experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FDF8F3]">
          <div className="container px-4 md:px-6 text-center space-y-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3A2F24]">
              Partnering with SR Holistic Wellness Solutions means aligning with a brand that is committed to Creating
              Wellness Excellence.
            </h2>
            <p className="max-w-3xl mx-auto text-[#5C5C5C] md:text-xl">
              Together, we can elevate the standard of wellness for your guests, positioning your property as a
              sought-after destination for relaxation and rejuvenation. collaborate to craft unparalleled wellness
              experiences that set your property apart from the competition.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#82B24A] px-10 text-base font-medium text-white shadow transition-colors hover:bg-[#719E40] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#719E40] disabled:pointer-events-none disabled:opacity-50"
            >
              Reach out to us and explore how we can transform your spa and wellness offerings Let’s co-create a
              signature journey that your guests will never forget.
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
