"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, MessageCircle, Clock } from "lucide-react";

export default function SpaLocationPage() {
  const locations = [
    {
      id: "mandir-palace",
      status: "active",
      title: "WelcomHeritage Mandir Palace",
      location: "Jaisalmer, Rajasthan",
      img: "/welcomheritage-mandir.jpg",
      desc: "Operating since 2019, this 200-year-old heritage palace blends royal splendor with SR Holistic Wellness spa therapies. Experience the grandeur of Rajasthan while indulging in our signature holistic treatments.",
      link: "https://www.google.com/maps?q=WelcomHeritage+Mandir+Palace+Jaisalmer",
      addressText: "Gandhi Chowk Rd, Sadar Bazar, Jaisalmer, Rajasthan 345001",
      whatsappMsg: "Hello, I am interested in spa services at WelcomHeritage Mandir Palace, Jaisalmer.",
      phone: "+919876543210", // Placeholder
    },
    {
      id: "mohangarh-fort",
      status: "active",
      title: "WelcomHeritage Mohangarh Fort",
      location: "Jaisalmer, Rajasthan",
      img: "/welcomeheritage-mohangarh.jpg",
      desc: "Since 2019, guests at this yellow-sandstone fort immerse themselves in regal ambience with our holistic spa rituals. A perfect sanctuary for those seeking solitude and deep relaxation.",
      link: "https://www.google.com/maps?q=WelcomHeritage+Mohangarh+Fort+Jaisalmer",
      addressText: "Mohangarh Rd, Shri Mohangarh, Mohangarh, Rajasthan 345033",
      whatsappMsg: "Hello, I would like to know more about spa services at WelcomHeritage Mohangarh Fort, Jaisalmer.",
      phone: "+919876543210", // Placeholder
    },
    {
      id: "gurgaon",
      status: "coming-soon",
      title: "Luxury Wellness Center",
      location: "Gurgaon, Haryana",
      img: "/wellness-bg.jpg", // Generic wellness image
      desc: "Prepare for an urban oasis in the heart of Gurgaon. Our upcoming flagship center will feature cutting-edge wellness technologies combined with traditional healing practices.",
      link: "#",
      addressText: "Coming Soon to Cyber City",
    },
    {
      id: "dehradun",
      status: "coming-soon",
      title: "Himalayan Retreat",
      location: "Dehradun, Uttarakhand",
      img: "/yoga1.jpg", // Nature/Yoga image
      desc: "Nestled in the foothills of the Himalayas, our new Dehradun retreat will offer nature-immersive therapies, outdoor yoga, and holistic rejuvenation programs.",
      link: "#",
      addressText: "Coming Soon to the Doon Valley",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf9] font-sans text-[#4a4a4a]">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/spa-hero-background.jpg"
            alt="Spa Locations Hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-3 py-1 mb-4 border border-white/30 rounded-full text-xs tracking-widest uppercase backdrop-blur-sm"
          >
            Find Your Sanctuary
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-serif"
          >
            Our Wellness Destinations
          </motion.h1>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col gap-16">
          {locations.map((item, i) => {
            const isComingSoon = item.status === "coming-soon";

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-[#e8dfd5] flex flex-col md:flex-row ${isComingSoon ? "grayscale hover:grayscale-0" : ""
                  }`}
              >
                {/* Left Side: Image */}
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {isComingSoon ? (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-black/70 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-widest border border-white/20">
                        Coming Soon
                      </span>
                    </div>
                  ) : (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#4a7c59] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1 shadow-sm">
                      <div className="w-2 h-2 bg-[#4a7c59] rounded-full animate-pulse" />
                      Now Open
                    </div>
                  )}
                </div>

                {/* Right Side: Content */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#a47148] mb-1">
                      {item.location}
                    </p>
                    <h3 className={`text-2xl md:text-3xl font-serif font-medium ${isComingSoon ? "text-gray-600" : "text-[#2c2018]"}`}>
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[#6b5f54] leading-relaxed mb-6 text-sm md:text-base">
                    {item.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-sm text-[#5a4a42]">
                      <MapPin className="w-4 h-4 mt-1 text-[#a47148]" />
                      <span>{item.addressText}</span>
                    </div>
                    {item.status === "active" && (
                      <div className="flex items-center gap-3 text-sm text-[#5a4a42]">
                        <Clock className="w-4 h-4 text-[#a47148]" />
                        <span>Open Daily: 9:00 AM - 9:00 PM</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-6 border-t border-[#f0ebe5] flex flex-wrap gap-4">
                    {item.status === "active" ? (
                      <>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7b4b1a] hover:text-[#a47148] transition-colors"
                        >
                          <MapPin className="w-4 h-4" />
                          Get Directions
                        </a>
                        <a
                          href={`https://wa.me/919798146740?text=${encodeURIComponent(item.whatsappMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#4a7c59] hover:text-[#3a6346] transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Book via WhatsApp
                        </a>
                      </>
                    ) : (
                      <span className="text-sm font-medium text-gray-400 italic">
                        Opening details to be announced
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
