"use client";
import { motion } from "framer-motion";
import SpaLocationCard from "@/components/locations/SpaLocationCard";
import Link from "next/link";

export default function HomeLocations() {
    // Subset of locations for the homepage
    const locations = [
        {
            id: "mandir-palace",
            status: "active",
            title: "Hotel Welcome Heritage Mandir Palace Jaisalmer",
            address: "Gandhi Chowk Road, Sadar Bazar, Jaisalmer, Rajasthan 345001",
            addressLink: "https://www.google.com/maps?q=Welcome+Heritage+Mandir+Palace+Jaisalmer",
            img: "/welcomheritage-mandir.jpg",
            facilities: [
                "Reception & waiting area",
                "Massage & Therapy services",
                "Ayurvedic therapy",
                "Beauty Therapy & Grooming",
                "Relaxation lounge",
                "Couple spa treatment room",
                "Single spa treatment room",
                "Steam bath",
                "Spa product & Retail",
            ],
            whatsappMsg: "Hello, I am interested in spa services at Welcome Heritage Mandir Palace, Jaisalmer.",
            phone: "6306366978",
        },
        {
            id: "mohangarh-fort",
            status: "active",
            title: "Welcome Heritage Mohangarh Fort",
            address: "Mohangarh Rd, Shri Mohangarh, Mohangarh, Rajasthan 345033",
            addressLink: "https://www.google.com/maps?q=Welcome+Heritage+Mohangarh+Fort+Jaisalmer",
            img: "/welcomeheritage-mohangarh.jpg",
            facilities: [
                "Royal Reception Area",
                "Authentic Ayurvedic Treatments",
                "Heritage Relaxing Lounge",
                "Private Therapy Suites",
                "Couple Suites",
            ],
            whatsappMsg: "Hello, I would like to know more about spa services at Welcome Heritage Mohangarh Fort, Jaisalmer.",
            phone: "6306366978",
        },
    ];

    return (
        <section className="py-16 px-4 md:px-8 bg-[#fff] font-[Segoe UI,Roboto,Helvetica Neue,sans-serif]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-[#27545b] mb-4 font-serif"
                    >
                        Our Wellness Destinations
                    </motion.h2>
                    <p className="max-w-2xl mx-auto text-[#5C5C5C] text-lg leading-relaxed mb-8">
                        Experience the art of healing at our exclusive luxury locations.
                    </p>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 gap-10 w-full">
                    {locations.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <SpaLocationCard
                                title={item.title}
                                address={item.address}
                                addressLink={item.addressLink}
                                image={item.img}
                                facilities={item.facilities}
                                description={item.description}
                                status={item.status}
                                whatsappMsg={item.whatsappMsg}
                                phone={item.phone}
                                category="SR HOLISTIC WELLNESS"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href="/spa-location" className="inline-block border border-[#a47148] text-[#a47148] hover:bg-[#a47148] hover:text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300">
                        View All Locations
                    </Link>
                </div>
            </div>
        </section>
    )
}
