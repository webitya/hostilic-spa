"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"

export default function HomeLocation() {
  return (
    <section className="relative py-10 px-4 bg-white text-[#3A2F24] font-[Segoe UI,Roboto,Helvetica Neue,sans-serif]">
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-[#6B9E40] to-[#27545b] z-10"></div>

      <div className="relative z-20 mx-auto text-center max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold text-[#7b4b1a] mb-3"
        >
          Our Hospitality Partnerships
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-xl mx-auto mb-8 text-md text-[#5C5C5C]"
        >
          SR Holistic Wellness proudly delivers luxury spa experiences at two iconic WelcomHeritage destinations in{" "}
          <span className="font-semibold">Jaisalmer, Rajasthan</span>.
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {/* Card Component */}
          {[
            {
              title: "Welcome to Heritage Mandir Palace",
              img: "/welcomheritage-mandir.jpg",
              desc: "Operating since 2019, this 200-year-old heritage palace blends royal splendor with SR Holistic Wellness spa therapies.",
              link: "https://www.google.com/maps?q=WelcomHeritage+Mandir+Palace+Jaisalmer",
            },
            {
              title: "Welcome to Heritage Mohangarh Fort",
              img: "/welcomeheritage-mohangarh.jpg",
              desc: "Since 2019, guests at this yellow-sandstone fort immerse themselves in regal ambience with our holistic spa rituals.",
              link: "https://www.google.com/maps?q=WelcomHeritage+Mohangarh+Fort+Jaisalmer",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-[#E0D9D0] flex flex-col md:flex-row overflow-hidden"
            >
              {/* Image */}
              <div className="md:w-1/2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={280}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-5 md:w-1/2 flex flex-col justify-center text-left">
                <h3 className="text-[#27545b] font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed mb-3 text-[#5C5C5C]">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-700"
                >
                  <MapPin className="h-3 w-3" /> Jaisalmer, Rajasthan
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
