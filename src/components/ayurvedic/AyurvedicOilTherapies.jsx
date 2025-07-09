
"use client";

import Image from "next/image";

const treatments = [
  {
    title: "Abhyangam Ayurvedic",
    duration: "60 mins",
    image: "/abhyangam1.jpg",
    description:
      "Full body Ayurvedic massage using warm herbal oils. Its long strokes breakdown toxin blockages, relax the body, stimulate the organs, and clear the body’s main circulatory channels."
  },
  {
    title: "Shirodhara",
    duration: "60 mins",
    image: "/shirodhara.jpg",
    description:
      "A luxurious treatment where a continuous stream of medicated warm oil is poured onto the forehead. It revitalizes the central nervous system and leads to a supreme blissful state."
  },
  {
    title: "Kizhi - Hot Bundles Massage",
    duration: "60 mins",
    image: "/kizhi.jpg",
    description:
      "Herbal powders are poured into cotton bags, warmed in herbal oil, and gently padded over the body. Helps relax muscles, induce sweat, detox, and absorb nutrients."
  },
  {
    title: "Ayurvedic Potli Massage",
    duration: "75 mins",
    image: "/potli.jpg",
    description:
      "Massage focusing on stress and muscle tension around the neck and shoulders. Relieves stress, improves circulation, boosts concentration, and promotes restful sleep."
  },
  {
    title: "Udwarthanam - Herbal Detox Therapy",
    duration: "60 mins",
    image: "/udwarthanam.jpg",
    description:
      "Deep tissue massage using herbal powders with upward strokes to break down fat and toxin blocks while nourishing the skin with natural detoxifying ingredients."
  }
];

export default function Ayurvedicoiltheraphy() {
  return (
    <section className="pt-24 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl font-bold text-[#7b4b1a] text-center mb-10">
        Ayurvedic Treatment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-lg p-4 flex flex-col items-center text-center"
          >
            <div className="relative w-full h-56 mb-4 rounded overflow-hidden">
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#5f3d17] mb-1">
              {treatment.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">Duration: {treatment.duration}</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {treatment.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
