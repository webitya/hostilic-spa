"use client"
import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What makes SR Holistic Wellness different?",
      answer:
        "We blend ancient healing wisdom with modern therapeutic practices, using only pure essential oils and premium plant-based products, all delivered by highly trained therapists in a serene setting.",
    },
    {
      question: "Do you customize treatments?",
      answer:
        "Yes. Every session begins with a short consultation to tailor pressure, focus areas, and products to your needs, ensuring a grounded yet uplifting experience.",
    },
    {
      question: "Are the oils safe for sensitive skin?",
      answer:
        "We use 100% pure, natural essential oils and clean, plant-based formulations. If you have sensitivities, we can adjust blends or provide unscented options.",
    },
  ]

  return (
    <section aria-labelledby="faq-heading" className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            id="faq-heading"
            className="text-2xl lg:text-3xl font-light text-stone-700 mb-2 text-balance"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-sage-300 mx-auto"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-stone-200 pb-3 cursor-pointer"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-stone-800 font-light focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="ml-2 text-stone-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-2 text-sm text-stone-600 leading-relaxed font-light">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
