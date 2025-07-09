// components/holistictherapie/FootCare.jsx
"use client";

export default function FootCare() {
  const treatments = [
    {
      title: "Coffee Oil Foot Reflexology",
      description:
        "A deeply grounding experience using aromatic coffee oil and precise foot reflexology techniques. Stimulates pressure points to enhance detoxification and restore body balance.",
      image: "/coffee-foot.jpg",
    },
    {
      title: "Muscle Fuel Foot Massage (Russian)",
      description:
        "This energizing massage targets foot muscles and lymphatic channels using a firm Russian kneading method. Perfect for athletes or tired feet needing recovery.",
      image: "/russian-foot.jpg",
    },
    {
      title: "Signature Foot Reflexology",
      description:
        "A full-session therapy combining foot exfoliation with acupressure and reflex zone techniques. Revives internal organs through the feet.",
      image: "/signature-foot.jpg",
    },
    {
      title: "Uplifting Leg Massage",
      description:
        "Designed to soothe and energize fatigued legs with long, rhythmic strokes. Improves blood flow, relieves swelling, and tones tired muscles.",
      image: "/uplifting-leg.jpg",
    },
  ];

  return (
    <section className="space-y-10 pt-36 pb-10 bg-gradient-to-b from-[#f7e6f5] to-[#e4dbf9]">
      <h1 className="text-3xl font-bold text-[#7b4b1a] mb-6 text-center">
        Foot Care
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="bg-cover bg-center rounded-xl shadow-md text-white p-6 h-72 flex flex-col justify-end"
            style={{ backgroundImage: `url(${treatment.image})` }}
          >
            <div className="bg-black/50 p-4 rounded">
              <h2 className="text-xl font-semibold mb-2">{treatment.title}</h2>
              <p className="text-sm leading-relaxed">{treatment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
