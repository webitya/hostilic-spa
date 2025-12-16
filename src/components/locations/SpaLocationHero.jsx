"use client"
import { motion } from "framer-motion"
import { MapPin, Star } from "lucide-react"

export default function SpaLocationHero() {
    return (
        <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-[#2c2018]">
            {/* Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/spa-hero-background.jpg')" }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-[#2c2018]/90" />

            {/* Decorative Golden Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a47148] rounded-full blur-[100px] opacity-20 pointer-events-none z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-3 md:space-y-4"
                >


                    {/* Main Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        Our Wellness <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8dfd5] via-[#a47148] to-[#e8dfd5] italic md:ml-2">
                            Destinations
                        </span>
                    </h1>

                    {/* Subtitle / Description */}
                    <p className="text-sm md:text-base text-[#d6c0a8] max-w-xl mx-auto font-light leading-relaxed hidden sm:block">
                        Discover our exclusive collection of luxury spas across premium locations.
                        Each destination offers a unique journey into tranquility.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
