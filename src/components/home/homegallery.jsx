"use client";

import { motion } from "framer-motion";

export default function HomeGallery() {
  const galleryItems = [
    { src: "/g8.webp", title: "Holistic Treatment / Massage" },
    { src: "/g6.webp", title: "Couple Massage" },
    { src: "/g7.webp", title: "Face Care / Facial" },
    { src: "/g9.webp", title: "Foot Reflexology" },
    { src: "/g4.webp", title: "Sonna Bath" },
    { src: "/g5.webp", title: "Steam Bath" },
    { src: "/yoga1.jpg", title: "Yoga" },
    { src: "/meditation.jpg", title: "Meditation" },
    { src: "/livingwitharomaessentias.jpg", title: "Living with Aroma Essential" },
      { src: "/ayurvedicpanchkarma.jpg", title: "Ayurvedic Panchkarma Treatments" },
    { src: "/pedicure.jpg", title: "Pedicure / Menucure" },
    { src: "/salonservices.jpg", title: "Salon Services" },
  ];

  return (
    <section className="relative overflow-hidden border-t-4 border-[#f9e4cc] rounded-t-xl">
      {/* subtle moving background */}
      <div className="absolute inset-0 bg-[url('/gallery-bg.jpg')] bg-cover bg-center opacity-10 animate-backgroundMove" />

      {/* floating decorative boxes */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-8 h-8 md:w-10 md:h-10 bg-[#fdf1dc] opacity-20 rounded-md animate-boxMove box-${i}`}
          />
        ))}
      </div>

      <div className="relative z-10 bg-[#fffaf0]/90 py-6 sm:py-8 px-3 sm:px-4 text-center font-sans border-x-2 border-[#f0d9b5] rounded-lg shadow-inner">
        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#7b4b1a] mb-4 sm:mb-6"
        >
          Explore Our Wellness Space
        </motion.h2>

        {/* responsive grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-md overflow-hidden border border-[#fce8cd] shadow hover:shadow-md"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bg-[#fffaf0]/80 text-[#5a3c1a] text-xs sm:text-sm font-semibold px-2 py-1 backdrop-blur-sm">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-[#604235] max-w-md mx-auto border-t border-[#e5cba6] pt-2 text-sm italic"
        >
          Every corner is curated to calm your senses and elevate your wellness journey.
        </motion.p>
      </div>

      <style jsx>{`
        @keyframes backgroundMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        @keyframes boxMove {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(60px, -60px) rotate(360deg);
          }
        }
        .animate-backgroundMove {
          animation: backgroundMove 25s linear infinite alternate;
        }
        .animate-boxMove {
          animation: boxMove 18s linear infinite alternate;
        }
        .box-0 {
          top: 15%;
          left: 8%;
        }
        .box-1 {
          top: 40%;
          right: 8%;
        }
        .box-2 {
          bottom: 20%;
          left: 20%;
        }
      `}</style>
    </section>
  );
}
