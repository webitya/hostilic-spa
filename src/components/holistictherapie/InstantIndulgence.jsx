// components/holistictherapie/InstantIndulgence.jsx
"use client";

export default function InstantIndulgence() {
  const treatments = [
    {
      title: "Chakra Head & Shoulder Massage",
      description:
        "A focused massage that targets tension zones in the head, neck, and shoulders using calming strokes and subtle chakra energy alignment. Perfect for mental clarity and stress relief.",
      image: "/chakra-head.jpg",
    },
    {
      title: "Soothing Back Massage",
      description:
        "Relieves upper and lower back tension using deep, rhythmic strokes. A quick yet effective treatment for people with desk-bound or physically active routines.",
      image: "/soothing-back.jpg",
    },
    {
      title: "Signature Stretching Back Massage",
      description:
        "Combines deep tissue massage with gentle assisted stretches to improve posture, release muscle tightness, and restore energy.",
      image: "/stretching-back.jpg",
    },
    {
      title: "Uplifting Leg Massage",
      description:
        "Revives tired legs through upward massage strokes, improving circulation, reducing puffiness, and relaxing fatigued muscles.",
      image: "/uplifting-leg1.jpg",
    },
  ];

  return (
    <section className="space-y-10 pt-36 pb-10 bg-gradient-to-b from-[#fef3ec] to-[#f3e8ff]">
      <h1 className="text-3xl font-bold text-[#7b4b1a] mb-6 text-center">
        Instant Indulgence
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
