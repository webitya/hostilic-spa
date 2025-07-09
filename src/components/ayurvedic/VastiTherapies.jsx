"use client";

import Image from "next/image";

const vastiTypes = [
  {
    name: "Shirovasti",
    area: "Head region",
    image: "/shirovasti.jpg",
  },
  {
    name: "Greeva Vasti",
    area: "Neck region",
    image: "/greeva-vasti.jpg",
  },
  {
    name: "Kati Vasti",
    area: "Lumbar region",
    image: "/kati-vasti.jpg",
  },
  {
    name: "Janu Vasti",
    area: "Knee region",
    image: "/janu-vasti.jpg",
  },
];

export default function VastiTreatment() {
  return (
    <section className="pt-24 pb-20 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl font-bold text-[#7b4b1a] text-center mb-6">
        VASTI
      </h2>
      <p className="text-center text-gray-700 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
        <strong>Duration:</strong> 45 mins <br />
        Vasti is a traditional Ayurvedic treatment where lukewarm medicated oil is
        retained on a specific part of the body. It is effective for skeletal,
        muscular, and nervous system problems — in fact, beneficial for almost
        all diseases.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {vastiTypes.map((type, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden text-center"
          >
            <div className="relative w-full h-48">
              <Image
                src={type.image}
                alt={type.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#5f3d17]">{type.name}</h3>
              <p className="text-sm text-gray-600">Oil retention on {type.area}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
