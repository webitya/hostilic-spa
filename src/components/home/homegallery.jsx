"use client";

import { motion } from "framer-motion";

export default function HomeGallery() {
  const galleryItems = [
    { src: "/gallery1.jpg", title: "Tranquil Spa Room" },
    { src: "/gallery2.jpg", title: "Peaceful Waiting Lounge" },
    { src: "/gallery3.jpg", title: "Aromatherapy Corner" },
    { src: "/gallery4.jpg", title: "Private Treatment Suite" },
    { src: "/gallery5.jpg", title: "Holistic Healing Space" },
    { src: "/gallery6.jpg", title: "Wellness Reception" },
    { src: "/gallery1.jpg", title: "Soothing Massage Area" },
    { src: "/gallery2.jpg", title: "Calm Environment" },
    { src: "/gallery3.jpg", title: "Rejuvenation Room" },
  ];

  return (
    <section className="relative overflow-hidden border-t-[6px] border-[#f9e4cc] rounded-t-[1.5rem]">
      {/* Moving background image */}
      <div className="absolute inset-0 bg-[url('/gallery-bg.jpg')] bg-cover bg-center opacity-10 animate-backgroundMove" />

      {/* Animated floating boxes */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-16 h-16 bg-[#fdf1dc] opacity-20 rounded-lg animate-boxMove box-${i}`}
          />
        ))}
      </div>

      <div className="relative z-10 bg-[#fffaf0]/90 py-16 px-6 text-center font-sans border-l-[3px] border-r-[3px] border-[#f0d9b5] rounded-xl shadow-inner">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold text-[#7b4b1a] mb-10"
        >
          Explore Our Wellness Space
        </motion.h2>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden border-4 border-[#fce8cd] shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bg-[#fffaf0]/80 text-[#5a3c1a] text-sm font-semibold px-4 py-2 backdrop-blur-md">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 text-[#604235] max-w-xl mx-auto border-t-[2px] border-[#e5cba6] pt-4 italic"
        >
          Every corner is curated to calm your senses and elevate your wellness journey.
        </motion.p>
      </div>

      {/* CSS animation styles */}
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
            transform: translate(100px, -100px) rotate(360deg);
          }
        }

        .animate-backgroundMove {
          animation: backgroundMove 30s linear infinite alternate;
        }

        .animate-boxMove {
          animation: boxMove 20s linear infinite alternate;
        }

        .box-0 {
          top: 10%;
          left: 5%;
          animation-duration: 25s;
        }
        .box-1 {
          top: 30%;
          right: 10%;
          animation-duration: 30s;
        }
        .box-2 {
          bottom: 15%;
          left: 15%;
          animation-duration: 22s;
        }
        .box-3 {
          bottom: 25%;
          right: 5%;
          animation-duration: 27s;
        }
        .box-4 {
          top: 50%;
          left: 45%;
          animation-duration: 35s;
        }
      `}</style>
    </section>
  );
}
