// components/holistictherapie/HolisticTherapies.jsx
"use client";

export default function HolisticTherapies() {
  const therapies = [
    {
      title: "Signature Therapy",
      description:
        "A deeply relaxing, personalized full-body therapy designed to melt away muscle tension and stress. It uses a combination of medium to deep pressure techniques to improve circulation and restore mind-body balance.",
      image: "/signature.jpg",
    },
    {
      title: "Classic Swedish Therapy",
      description:
        "A timeless technique using long, flowing strokes and light to medium pressure. This therapy gently soothes tight muscles, stimulates lymphatic flow, and promotes overall relaxation.",
      image: "/swedish.jpg",
    },
    {
      title: "Aroma Healing Therapy",
      description:
        "A therapeutic aromatic experience combining essential oils and rhythmic massage. Ideal for relieving emotional stress and restoring natural vitality.",
      image: "/aroma.png",
    },
    {
      title: "Chakra Balancing Therapy",
      description:
        "A unique fusion of full-body massage and chakra crystal placement. This holistic treatment works to align the seven energy centers, enhance emotional harmony, and restore inner peace.",
      image: "/chakra.png",
    },
    {
      title: "Shiatsu Massage",
      description:
        "A traditional Japanese therapy that uses finger pressure on energy meridians. It boosts immunity, balances energy flow, and relieves muscular tension without oil.",
      image: "/shiatsu.jpg",
    },
    {
      title: "Thai Yoga Stretching",
      description:
        "Performed on a floor mat, this therapy blends assisted stretches and acupressure to enhance flexibility, joint mobility, and overall energy.",
      image: "/thai2.jpg",
    },
    {
      title: "Abhyangam Ayurvedic Therapy",
      description:
        "An authentic Ayurvedic massage using herbal oil and synchronized strokes. This tri-dosha balancing therapy enhances circulation, detoxifies the system, and promotes longevity.",
      image: "/abhyangam.jpg",
    },
    {
      title: "Traditional Balinese Massage",
      description:
        "Combines deep tissue techniques, palm pressure, and gentle acupressure. Promotes deep muscular relaxation and a sense of calm using warm oil and slow movements.",
      image: "/balinese.jpg",
    },
    {
      title: "Andaman Sea Shell & Salt Polish",
      description:
        "A luxurious exfoliating experience using sea salt and natural shell massage. Gently polishes the skin, removes dead cells, and leaves your body feeling silky smooth.",
      image: "/andaman.jpg",
    },
    {
      title: "Moroccan Scrub + Coffee Bean Massage",
      description:
        "A dual treatment starting with a detoxifying Moroccan scrub followed by a revitalizing coffee oil massage rich in antioxidants.",
      image: "/moroccan.jpg",
    },
  ];

  return (
    <section className="space-y-10 pt-36 pb-10 bg-gradient-to-b from-[#f4e7d5] to-[#fff9f2]">
      <h1 className="text-3xl font-bold text-[#7b4b1a] mb-6 text-center">
        Holistic Therapies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {therapies.map((therapy, index) => (
          <div
            key={index}
            className="bg-cover bg-center rounded-xl shadow-md text-white p-6 h-72 flex flex-col justify-end"
            style={{ backgroundImage: `url(${therapy.image})` }}
          >
            <div className="bg-black/50 p-4 rounded">
              <h2 className="text-xl font-semibold mb-2">{therapy.title}</h2>
              <p className="text-sm leading-relaxed">{therapy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
