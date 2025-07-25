"use client"
import { motion } from "framer-motion"
import DesignServicesIcon from "@mui/icons-material/DesignServices"
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"
import SchoolIcon from "@mui/icons-material/School"
import SpaIcon from "@mui/icons-material/Spa"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"

const services = [
  {
    title: "Spa Management",
    description:
      "Full-service management of spa operations, covering all aspects from staffing to training, marketing, and guest services. We ensure seamless operations that align with the highest industry standards Our expert team curates bespoke wellness experiences, elevating every touchpoint of your spa journey with a focus on elegance, innovation, and guest satisfaction, we transform spas into sanctuaries of indulgence and excellence.",
    icon: ManageAccountsIcon,
  },
  {
    title: "Consultation & Design",
    description:
      "Expert guidance on spa design, layout, and service menu creation to create a cohesive, luxurious guest experience. We work with you to craft spaces and offerings that reflect both beauty and functionality Our team ensures your spa concept aligns with your brand vision while optimizing guest flow and comfort From ambiance to amenities, every detail is tailored to elevate client satisfaction and operational efficiency.",
    icon: DesignServicesIcon,
  },
  {
    title: "Wellness Programs",
    description:
      "Customizable wellness programs that integrate traditional spa treatments with holistic practices like yoga, meditation, and nutrition counseling, ensuring a balanced approach to wellness. These programs are tailored to individual needs, promoting long-term physical, mental, and emotional well-being. Expert guidance and supportive environments help clients achieve sustainable lifestyle transformations.",
    icon: SelfImprovementIcon,
  },
  {
    title: "Training & Development",
    description:
      "Professional training programs for spa staff to maintain the highest standards of service excellence. Our team develops customized training solutions to ensure a consistent, premium guest experience. We focus on skill enhancement, guest communication, and holistic service techniques. Continuous learning ensures staff are always aligned with evolving wellness trends.",
    icon: SchoolIcon,
  },
  {
    title: "Holistic massage, Ayurveda, Beauty Treatments, Salon Services & Wedding Makeovers",
    description:
      "We offer a wide array of specialized services, including therapeutic massages, traditional Ayurvedic treatments, beauty therapies, salon services, and wedding makeovers to meet every guest's needs for relaxation, beauty, and special occasions Our expert therapists and beauty professionals ensure a rejuvenating and personalized experience.",
    icon: SpaIcon,
  },
]

export default function AboutManagement() {
  return (
    <section className="relative py-12 px-4 md:px-8 overflow-hidden">
      {/* 📽️ Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/nature.mp4" type="video/mp4" />
        {"Your browser does not support the video tag."}
      </video>
      {/* 🔲 Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/10 z-0" />
      {/* 💡 Foreground Content */}
      <div
        className="relative z-10 text-[#604235]"
        style={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold mb-8 text-[#7b4b1a] text-center"
        >
          Our Service Expertise
        </motion.h2>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {services.map(({ title, description, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={idx === services.length - 1 ? "md:col-span-2" : ""} // Make the last card full width
              style={{
                background:
                  "linear-gradient(#fefaf5 0 0) padding-box, linear-gradient(135deg,#ffd29a,#ff69b4) border-box",
                border: "1px solid transparent",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                cursor: "default",
              }}
            >
              <Icon style={{ color: "#df865b", fontSize: "2rem" }} />
              <h3 style={{ color: "#27545b", margin: "0.25rem 0" }}>{title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: "1.6", margin: 0 }}>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
