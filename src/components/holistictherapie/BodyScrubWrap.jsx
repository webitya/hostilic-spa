// components/holistictherapie/BodyScrubWrap.jsx
"use client";

export default function BodyScrubWrap() {
  const treatments = [
    {
      title: "Himalayan Pink Salt Scrub",
      description:
        "A detoxifying exfoliation using mineral-rich Himalayan pink salt. Gently removes dead skin cells, promotes circulation, and leaves the skin glowing and revitalized.",
      image: "/himalayan-scrub.jpg",
    },
    {
      title: "Walnut Body Scrub",
      description:
        "A gentle scrub treatment using finely ground walnut shell to exfoliate and unclog pores. Leaves your skin smooth, polished, and refreshed.",
      image: "/walnut-scrub.jpg",
    },
    {
      title: "Dead Sea Clay Body Wrap",
      description:
        "Enriched with minerals, this full-body wrap detoxifies and firms the skin while improving tone and hydration. Great for water retention and skin rejuvenation.",
      image: "/deadsea-wrap.jpg",
    },
    {
      title: "Indian Mud Therapy",
      description:
        "A traditional healing therapy using therapeutic mud to reduce inflammation, ease joint pain, and draw out toxins from the body.",
      image: "/mud-therapy.jpg",
    },
  ];

  return (
    <section className="space-y-10 pt-36 pb-10 bg-gradient-to-b from-pink-100 to-purple-100">
      <h1 className="text-3xl font-bold text-[#7b4b1a] mb-6 text-center">
        Body Scrub & Wrap
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
