"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

// Reverting to original @mui/icons-material imports
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import PhoneIcon from "@mui/icons-material/Phone"
import SpaIcon from "@mui/icons-material/Spa"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const pathname = usePathname()

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Holistic Therapy", href: "/holistic-therapies" },
    { name: "Ayurvedic Panchkarma", href: "/ayurvedic-panchkarma" },
    { name: "Partner with us", href: "/partner-with-us" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about-us" },
    { name: "Spa Location", href: "/spa-location" },
    { name: "Shop", href: "/spa-products" },
    { name: "Contact Us", href: "/contact" },
  ]
  const serviceItems = []

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  const isActive = (href) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const isServiceActive = () => {
    return serviceItems.some((item) => pathname.startsWith(item.href))
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/98 backdrop-blur-lg py-3 px-1 lg:px-2 border-b border-gray-100 shadow-sm z-50">
        <nav className="flex items-center justify-between  mx-auto">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 select-none group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/logo1.png"
                alt="SR Holistic Wellness Logo"
                className="h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 text-sm font-bold leading-tight font-sans tracking-tight">
                SR Holistic Wellness
              </span>
              <span className="text-xs text-amber-600 font-medium hidden sm:block">Relax • Body • Mind & Soul</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.name === "Contact Us" ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white px-4 py-2.5 shadow-md hover:from-amber-600 hover:to-orange-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-2 py-2.5 text-sm font-semibold transition-colors duration-200 rounded-xl ${
                      isActive(item.href) ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* HAMBURGER MENU ICON */}
          <motion.button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle navigation"
            className="lg:hidden p-2.5 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-all duration-200"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: menuOpen ? 90 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              {menuOpen ? <CloseIcon fontSize="medium" /> : <MenuIcon fontSize="medium" />}
            </motion.div>
          </motion.button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Mobile Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img src="/logo1.png" alt="SR Holistic Wellness" className="h-8 w-auto object-contain" />
                  <span className="text-lg font-bold text-gray-900">Menu</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <CloseIcon fontSize="small" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3.5 text-base font-medium rounded-xl transition-colors duration-200 ${
                        isActive(item.href) ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Call Button */}
              <div className="p-4 border-t border-gray-100 mt-4">
                <motion.a
                  href="tel:+916306366978"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg w-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <PhoneIcon fontSize="small" />
                  <span>+91 6306366978</span>
                </motion.a>
              </div>

              {/* Footer */}
              <div className="p-4 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                  <SpaIcon fontSize="small" className="text-amber-500" />
                  Mind • Body • Soul
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
