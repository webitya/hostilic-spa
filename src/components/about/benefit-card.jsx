"use client"

export default function BenefitCard({ icon, title, description, className = "" }) {
  return (
    <div
      className={`bg-white rounded-lg p-5 border border-stone-200 shadow-sm hover:shadow transition-shadow ${className}`}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="w-10 h-10 rounded-md bg-sage-100 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-base font-light text-stone-800">{title}</h3>
          <p className="text-sm text-stone-600 leading-relaxed font-light mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
