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
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="SR Holistic Wellness" className="h-12 w-12 object-contain rounded-lg" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">SR Holistic Wellness</h3>
                <p className="text-sm text-amber-600 font-medium">Mind • Body • Soul</p>
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
                    className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="text-lg" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-amber-600 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact</h4>
            <div className="space-y-4">
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
                <span>info@srwellness.com</span>
              </a>

              <div className="flex items-center gap-3 text-gray-600">
                <LocationOnIcon className="text-lg" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SR Holistic Wellness. All rights reserved.
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
