// components/holistictherapie/FacialCare.jsx
"use client";

export default function FacialCare() {
  const treatments = [
    {
      title: "Deep Cleansing Facial",
      description:
        "A purifying facial treatment that deeply cleanses pores, removes impurities, and refreshes the skin with gentle exfoliation and hydration.",
      image: "/deep-cleansing.jpg",
    },
    {
      title: "Instant Glow Facial",
      description:
        "This radiance-boosting facial revitalizes dull skin and enhances natural brightness. Perfect for special occasions or a quick skin refresh.",
      image: "/instant-glow.jpg",
    },
    {
      title: "Organic Multi-Vitamin Soothing Facial",
      description:
        "An ultra-calming and nourishing treatment using organic ingredients rich in vitamins. Ideal for sensitive or inflamed skin needing hydration and repair.",
      image: "/multivitamin-facial.jpg",
    },
  ];

  return (
    <section className="space-y-10 pt-36 pb-10 bg-gradient-to-b from-[#fff5f0] to-[#f7f0ff]">
      <h1 className="text-3xl font-bold text-[#7b4b1a] mb-6 text-center">
        Facial / Face Care
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