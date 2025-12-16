"use client";
import { motion } from "framer-motion";
import SpaLocationCard from "@/components/locations/SpaLocationCard";
import SpaLocationHero from "@/components/locations/SpaLocationHero";

export default function SpaLocationPage() {
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
        "Deep Tissue Massages",
        "Heritage Relaxing Lounge",
        "Private Therapy Suites",
        "Couple Suites",
        "Steam & Sauna",
        "Exclusive Wellness Retail",
      ],
      whatsappMsg: "Hello, I would like to know more about spa services at Welcome Heritage Mohangarh Fort, Jaisalmer.",
      phone: "6306366978",
    },
    {
      id: "gurgaon",
      status: "coming-soon",
      title: "Luxury Wellness Center Gurgaon",
      address: "Coming Soon to Cyber City, Gurgaon",
      addressLink: "#",
      img: "/wellness-bg.jpg",
      description: "Prepare for an urban oasis in the heart of Gurgaon. Our upcoming flagship center will feature cutting-edge wellness technologies combined with traditional healing practices.",
      facilities: [],
    },
    {
      id: "dehradun",
      status: "coming-soon",
      title: "Himalayan Retreat Dehradun",
      address: "Coming Soon to the Doon Valley, Dehradun",
      addressLink: "#",
      img: "/yoga1.jpg",
      description: "Nestled in the foothills of the Himalayas, our new Dehradun retreat will offer nature-immersive therapies, outdoor yoga, and holistic rejuvenation programs.",
      facilities: [],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf9] font-sans text-[#4a4a4a]">
      {/* Hero Section */}
      <SpaLocationHero />

      {/* Locations List */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
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
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
