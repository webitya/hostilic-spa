"use client"

import Link from "next/link"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
    { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  const exploreLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Shop", href: "/spa-products" },
    { name: "Contact Us", href: "/contact" },
  ]

  const wellnessLinks = [
    { name: "Holistic Therapy", href: "/therapies" },
    { name: "Ayurvedic Panchkarma", href: "/ayurvedic-panchkarma" },
    { name: "Spa Location", href: "/spa-location" },
    { name: "Partner with us", href: "/partner-with-us" },
  ]

  return (
    <footer className="relative bg-[#2c2018] border-t border-[#3d2e24] overflow-hidden">
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a47148] to-transparent opacity-80" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#a47148" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* 1. Brand Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="bg-white p-1.5 rounded-lg shadow-md">
                <img src="/logo1.png" alt="SR Holistic Wellness" className="h-10 w-10 object-contain" />
              </div>
              <div className="text-[#fffaf0]">
                <h3 className="text-xl font-bold font-serif leading-none tracking-wide">SR Holistic</h3>
                <span className="text-[0.65rem] text-[#a47148] uppercase tracking-[0.2em] font-medium block mt-1">Wellness</span>
              </div>
            </motion.div>

            <p className="text-[#d6c0a8] text-sm leading-relaxed max-w-xs font-light">
              A sanctuary where ancient healing meets modern luxury. Restore harmony to your mind, body, and soul with our curated holistic therapies.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#3d2e24] rounded-full flex items-center justify-center text-[#d6c0a8] hover:bg-[#a47148] hover:text-white transition-all duration-300 border border-[#4a3b32]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    aria-label={social.label}
                  >
                    <IconComponent style={{ fontSize: 18 }} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* 2. Explore Links */}
          <div>
            <h4 className="text-[#fffaf0] font-serif text-lg font-medium mb-6 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#a47148] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#b09b88] hover:text-[#a47148] hover:pl-1 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#5a4a42] group-hover:bg-[#a47148] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Wellness & Locations */}
          <div>
            <h4 className="text-[#fffaf0] font-serif text-lg font-medium mb-6 relative inline-block">
              Wellness
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#a47148] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {wellnessLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#b09b88] hover:text-[#a47148] hover:pl-1 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#5a4a42] group-hover:bg-[#a47148] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-[#fffaf0] font-serif text-lg font-medium mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#a47148] rounded-full"></span>
            </h4>
            <div className="space-y-5">
              <a
                href="tel:+916306366978"
                className="flex items-start gap-3 text-[#b09b88] hover:text-[#a47148] transition-colors group"
              >
                <div className="p-2 bg-[#3d2e24] rounded-full group-hover:bg-[#4a3b32] transition-colors mt-[-4px]">
                  <PhoneIcon style={{ fontSize: 16 }} className="text-[#a47148]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#8c6b4a] font-bold uppercase tracking-wider mb-0.5">Call Us</span>
                  <span className="text-sm">+91 6306366978</span>
                </div>
              </a>

              <a
                href="mailto:Srholisticwellness@gmail.com"
                className="flex items-start gap-3 text-[#b09b88] hover:text-[#a47148] transition-colors group"
              >
                <div className="p-2 bg-[#3d2e24] rounded-full group-hover:bg-[#4a3b32] transition-colors mt-[-4px]">
                  <EmailIcon style={{ fontSize: 16 }} className="text-[#a47148]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#8c6b4a] font-bold uppercase tracking-wider mb-0.5">Email Us</span>
                  <span className="text-sm">Srholisticwellness@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-[#b09b88] group">
                <div className="p-2 bg-[#3d2e24] rounded-full mt-[-4px]">
                  <LocationOnIcon style={{ fontSize: 16 }} className="text-[#a47148]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#8c6b4a] font-bold uppercase tracking-wider mb-0.5">Visit Us</span>
                  <span className="text-sm leading-snug">HNO. 212. Munirka.<br />New Delhi: 110067</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3d2e24]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-xs text-[#8c6b4a] tracking-wide">
              © {new Date().getFullYear()} <span className="text-[#d6c0a8] font-medium">SR Holistic Wellness</span>. All Rights Reserved.
            </p>

            <p className="text-xs text-[#8c6b4a] flex items-center justify-center gap-1">
              Built by
              <a
                href="https://nextbizdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#a47148] hover:text-[#d6c0a8] transition-colors"
              >
                NextBiz Digital
              </a>
            </p>

            <div className="flex items-center gap-6 text-xs text-[#8c6b4a]">
              <Link href="/privacy" className="hover:text-[#a47148] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#a47148] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
