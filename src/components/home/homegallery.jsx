"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeGallery() {
  const galleryItems = [
    {
      title: "Holistic Body Treatment",
      description:
        "A deeply nurturing full-body experience offering a variety of holistic treatments, including massage, aromatherapy, meditation, and energy-balancing techniques. This restorative therapy promotes deep relaxation, reduces stress, and brings mind, body, and spirit back into natural harmony.",
      href: "/therapies/holistic-therapies",
      image: "/holistic-therapy-hero.jpg",
    },
    {
      title: "Body Scrubs & Wraps",
      description:
        "Exfoliating and nourishing treatments designed to smooth, detoxify, and hydrate the skin. Gentle scrubs buff away dead skin cells for a fresh, radiant glow, while luxurious body wraps infuse the skin with minerals, botanicals, and hydrating ingredients for deep rejuvenation and softness.",
      href: "/therapies/body-scrubs-wraps",
      image: "/body-scrub-spa.jpg",
    },
    {
      title: "Foot Care Reflexology",
      description:
        "A restorative therapy that applies gentle, targeted pressure to specific points on the feet to promote balance throughout the body. Reflexology enhances circulation, eases stress, and supports overall wellness by stimulating reflex zones linked to various organs and systems.",
      href: "/therapies/foot-care",
      image: "/foot-massage-spa.jpg",
    },
    {
      title: "Instant Indulgence",
      description:
        "A swift yet luxurious escape designed to deliver maximum relaxation in minimal time. This refreshing mini-treatment blends soothing touch, aromatic elements, and revitalizing techniques to calm the mind, ease tension, and leave you feeling instantly renewed.",
      href: "/therapies/instant-indulgence",
      image: "/instant-indulgence-spa.jpg",
    },
    {
      title: "Facial / Face Care – Natural",
      description:
        "A gentle, nature-inspired skincare treatment designed to cleanse, nourish, and revive your complexion. Using plant-based products, soothing massage, and hydrating masks, this facial restores radiance, improves skin texture, and leaves your skin naturally glowing and refreshed.",
      href: "/therapies/facial-face-care",
      image: "/facial-care-spa.jpg",
    },
    {
      title: "Ayurvedic Panchakarma",
      description:
        "A traditional Ayurvedic wellness ritual designed to cleanse, balance the tri-doshas, and rejuvenate the entire system. Panchakarma blends warm medicated herbal oils, gentle purification techniques, and soothing body therapies to release deep-seated tension, restore inner harmony, and enhance natural vitality. This holistic experience leaves you feeling lighter, refreshed, and deeply renewed.",
      href: "/ayurvedic-panchkarma",
      image: "/ayurvedicpanchkarma.jpg",
    },
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

      <div className="relative z-10 bg-[#fffaf0]/90 py-10 sm:py-12 px-4 sm:px-6 text-center font-sans border-x-2 border-[#f0d9b5] rounded-lg shadow-inner">
        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#7b4b1a] mb-8 sm:mb-12"
        >
          Explore Our Wellness Space
        </motion.h2>

        {/* responsive grid - replacing images with text cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto text-left"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white/60 backdrop-blur-sm border border-[#fce8cd] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#F2C08A] transition-all duration-300 flex flex-col h-full group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-medium text-[#5a3c1a] mb-3 group-hover:text-[#dba65b] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#604235] text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center text-[#9c6b30] font-medium text-sm hover:text-[#7b4b1a] group-hover:translate-x-1 transition-all mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* footer tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-[#7b4b1a] max-w-lg mx-auto border-t border-[#e5cba6] pt-4 text-sm italic font-medium opacity-80"
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
