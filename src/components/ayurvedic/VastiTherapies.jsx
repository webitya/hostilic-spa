"use client";

export default function AyurvedaWellness() {
  return (
    <section className="px-4 py-10 bg-gradient-to-br from-yellow-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: Introduction */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-800">
            Ayurveda is a holistic healing science.
          </h2>
          <p className="text-sm leading-relaxed">
            Ayu means life and Veda means knowledge. <br />
            Experience the true age old Ayurvedic therapies at SR Wellness in peaceful traditional
            cottages. These therapies deeply relax and heal the soul and promote self-healing.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-700">
              What is Panchakarma?
            </h3>
            <p className="text-sm leading-relaxed">
              Panchakarma is a powerful Ayurvedic purification therapy designed to eliminate
              deep-rooted toxins, balance the doshas, strengthen immunity, and rejuvenate the
              entire system – body, mind, and soul.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-700">
              Our expert therapists:
            </h3>
            <p className="text-sm leading-relaxed">
              Using only the finest ayurvedic oils and holistic techniques, ensure your journey is
              deeply personalized and profoundly rejuvenating. Whether you seek detoxification,
              stress relief, or radiant beauty, our treatments are rooted in the art of mindful indulgence.
            </p>
          </div>
        </div>

        {/* Right: Therapies */}
        <div className="space-y-6">
          <div className="bg-white border border-green-100 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Five Core Detox Therapies
            </h3>
            <p className="text-sm leading-relaxed">
              Gentle yet deep cleansing treatments including Vamana, Virechana, Basti, Nasya, and
              Raktamokshana, carried out by highly trained therapists in private healing suites.
            </p>
          </div>

          <div className="bg-white border border-green-100 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Therapeutic Herbal Ayurvedic Oil Rituals
            </h3>
            <p className="text-sm leading-relaxed">
              Experience the healing power of warm herbal oils in therapies like Abhyanga, Shirodhara,
              and Swedana, enhancing detoxification and inner calm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
