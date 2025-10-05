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

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Holistic Therapies", href: "/holistic-therapies" },
    { name: "Ayurvedic Panchkarma", href: "/ayurvedic-panchkarma" },
    { name: "Partner With Us", href: "/partner-with-us" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-amber-50 border-t border-gray-200">
      <div className="absolute inset-0 bg-[url('/pattern-light.svg')] bg-cover opacity-5" />

      <div className="relative  mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo1.png" alt="SR Holistic Wellness" className="h-12 w-12 object-contain rounded-lg shadow-sm" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">SR Holistic Wellness</h3>
                <p className="text-sm text-amber-600 font-medium tracking-wide">Mind • Body • Soul</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-sm">
              Experience harmony through ancient healing practices and modern wellness therapies.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-500 hover:text-amber-600 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="text-lg" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="relative text-gray-600 hover:text-amber-600 transition-colors duration-200 group"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+916306366978"
                className="flex items-center gap-3 text-gray-600 hover:text-amber-600 transition-colors duration-200"
              >
                <PhoneIcon className="text-lg" />
                <span>+91 6306366978</span>
              </a>

              <a
                href="mailto:info@srwellness.com"
                className="flex items-center gap-3 text-gray-600 hover:text-amber-600 transition-colors duration-200"
              >
                <EmailIcon className="text-lg" />
                <span>Srholisticwellness@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-gray-600">
                <LocationOnIcon className="text-lg" />
                <span>HNO. 212. Munirka. New Delhi:110067</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center text-sm text-gray-500 tracking-wide leading-relaxed">
              © {new Date().getFullYear()} <span className="text-gray-700 font-semibold">SR Holistic Wellness</span> — All Rights Reserved.  
              <span className="mx-1 text-gray-400">|</span>
              <span className="text-gray-600">Built, Boosted & Branded by</span>
              <a
                href="https://nextbizdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-bold text-blue-800 hover:text-blue-600 underline underline-offset-4 transition-all duration-300"
              >
                NextBiz Digital
              </a>
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-amber-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-amber-600 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
