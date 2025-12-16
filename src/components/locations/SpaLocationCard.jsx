import { MapPin, Phone, Clock, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

export default function SpaLocationCard({
    title,
    address,
    addressLink,
    image,
    category = "SR HOLISTIC WELLNESS",
    facilities = [],
    description,
    status = "active",
    whatsappMsg,
    phone = "6306366978",
    openHours = "9 am to 8 pm",
}) {
    const isComingSoon = status === "coming-soon"

    return (
        <div className={`bg-white rounded-xl overflow-hidden border border-[#e8dfd5] hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row shadow-sm ${isComingSoon ? "grayscale opacity-90" : ""}`}>
            {/* LEFT: Content (60%) */}
            <div className="md:w-[60%] p-5 md:p-6 flex flex-col justify-between order-2 md:order-1 relative">
                <div>
                    {/* Header */}
                    <div className="mb-3">
                        <span className="text-xs font-bold tracking-widest text-[#a47148] uppercase mb-1 block">
                            {category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-[#2c2018] font-serif leading-tight">
                            {title}
                        </h3>
                    </div>

                    {/* Address */}
                    <div className="mb-5 flex items-start gap-2.5 text-sm text-[#4a4a4a] leading-relaxed group/addr">
                        <MapPin className="w-4 h-4 text-[#a47148] mt-1 flex-shrink-0" />
                        <div>
                            <a href={addressLink} target="_blank" rel="noopener noreferrer" className="group-hover/addr:text-blue-600 transition-colors">
                                {address}
                            </a>
                        </div>
                    </div>

                    {/* Facilities - Grid Layout for Compactness */}
                    {facilities.length > 0 && (
                        <div className="mb-6 bg-[#f9f7f5] p-3 rounded-lg border border-[#f0ebe5]">
                            <h4 className="font-bold text-[#2c2018] mb-2 text-xs uppercase tracking-wide flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#a47148]" /> Facilities Available
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                                {facilities.map((facility, idx) => (
                                    <li key={idx} className="text-[#5C5C5C] text-xs font-medium flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-[#a47148]/60" />
                                        {facility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Description (Optional/Fallback if no facilities) */}
                    {(!facilities || facilities.length === 0) && description && (
                        <p className="text-[#6b5f54] text-sm leading-relaxed mb-6 italic border-l-2 border-[#a47148]/30 pl-3">{description}</p>
                    )}
                </div>

                {/* Actions & Buttons */}
                <div className="mt-2 space-y-4 pt-4 border-t border-[#f0ebe5]">
                    {/* Info Row: Contact & Hours */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm font-medium text-[#5a4a42]">
                        {status === "active" ? (
                            <>
                                <span className="flex items-center gap-1.5">
                                    <Phone className="w-3.5 h-3.5 text-[#a47148]" /> +91 {phone}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-[#a47148]" /> {openHours}
                                </span>
                            </>
                        ) : (
                            <span className="italic text-gray-500 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Opening Soon</span>
                        )}
                    </div>

                    {/* Buttons Row */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                        {status === "active" && (
                            <>
                                <a
                                    href={`https://wa.me/91${phone}?text=${encodeURIComponent(whatsappMsg || "Hi, I would like to book an appointment.")}`}
                                    className="flex-1 sm:flex-none text-center bg-[#2c2018] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[#4a3b32] transition-colors shadow-sm flex items-center justify-center gap-2"
                                >
                                    <WhatsAppIcon style={{ fontSize: 18 }} /> Book Now
                                </a>
                        <Link
                            href="/contact"
                            className="flex-1 sm:flex-none text-center border border-[#2c2018] text-[#2c2018] px-5 py-2.5 rounded text-sm font-medium hover:bg-[#2c2018] hover:text-white transition-all flex items-center justify-center"
                        >
                            Enquire Now
                        </Link>
                        <a
                            href={`https://wa.me/91${phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-[#4a7c59] hover:text-[#3a6346] font-semibold text-sm px-2 py-1"
                        >
                            <WhatsAppIcon style={{ fontSize: 18 }} /> WhatsApp
                        </a>
                        <a href={addressLink} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1 text-xs text-blue-600 hover:underline ml-auto">
                            Directions <ArrowRight className="w-3 h-3" />
                        </a>
                    </>
                        )}
                </div>
            </div>
        </div>

            {/* RIGHT: Image (Fills the area) */ }
    <div className="relative order-1 md:order-2 md:w-[40%] bg-gray-100 min-h-[220px]">
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
        />
        {isComingSoon && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="bg-black/60 text-white px-4 py-1 rounded text-sm font-semibold tracking-wider backdrop-blur-sm border border-white/20">COMING SOON</span>
            </div>
        )}
    </div>
        </div >
    )
}
