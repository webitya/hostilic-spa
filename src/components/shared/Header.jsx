"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import PhoneIcon from "@mui/icons-material/Phone"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SpaIcon from "@mui/icons-material/Spa"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const pathname = usePathname()

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
      { name: "Holistic Therapy", href: "/holistic-therapies" },
    { name: "Ayurvedic Panchkarma", href: "/ayurvedic-panchkarma" },
  ]

  const serviceItems = [
  
  ]

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
      <header className="fixed top-0 left-0 w-full bg-white/98 backdrop-blur-lg py-3 px-4 lg:px-6 border-b border-gray-100 shadow-sm z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 select-none group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/logo.jpg"
                alt="SR Holistic Wellness Logo"
                className="h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 text-lg lg:text-xl font-bold leading-tight font-sans tracking-tight">
                SR Holistic Wellness
              </span>
              <span className="text-xs text-amber-600 font-medium hidden sm:block">Mind • Body • Soul</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 ${
                    isActive(item.href)
                      ? "text-amber-700 bg-gradient-to-r from-amber-50 to-orange-50 shadow-sm"
                      : "text-gray-700 hover:text-amber-700"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}

            {/* Our Services Dropdown */}
            {/* <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 flex items-center gap-1.5 ${
                  isServiceActive() || dropdownOpen
                    ? "text-amber-700 bg-gradient-to-r from-amber-50 to-orange-50 shadow-sm"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                Our Services
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ExpandMoreIcon fontSize="small" />
                </motion.div>
                {(isServiceActive() || dropdownOpen) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-3 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 z-50 min-w-80 overflow-hidden"
                  >
                    {serviceItems.map((service, index) => (
                      <motion.li
                        key={service.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={service.href}
                          className={`block px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 ${
                            isActive(service.href)
                              ? "text-amber-700 bg-gradient-to-r from-amber-50 to-orange-50"
                              : "text-gray-700 hover:text-amber-700"
                          }`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full opacity-60"></div>
                            <span>{service.name}</span>
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li> */}

            {/* Partner With Us */}
            <li>
              <Link
                href="/partner-with-us"
                className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 ${
                  isActive("/partner-with-us")
                    ? "text-amber-700 bg-gradient-to-r from-amber-50 to-orange-50 shadow-sm"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                Partner With Us
                {isActive("/partner-with-us") && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </li>

            {/* Phone Button */}
            <li className="ml-4">
              <motion.a
                href="tel:+916306366978"
                className="flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-amber-600 hover:via-amber-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <PhoneIcon fontSize="small" />
                </motion.div>
                <span className="hidden xl:inline font-medium">+91 6306366978</span>
                <span className="xl:hidden font-medium">Call Now</span>
              </motion.a>
            </li>
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
                  <img src="/logo.jpg" alt="SR Holistic Wellness" className="h-8 w-auto object-contain" />
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
              <div className="p-4 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                        isActive(item.href)
                          ? "text-amber-700 bg-gradient-to-r from-amber-50 to-orange-50 shadow-sm"
                          : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {isActive(item.href) && <FiberManualRecordIcon fontSize="small" className="text-amber-600" />}
                    </Link>
                  </motion.div>
                ))}

                {/* Our Services Dropdown in Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="space-y-1"
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                      isServiceActive() || mobileServicesOpen
                        ? "text-amber-700 bg-gradient-to-r from-amber-50 to-orange-50 shadow-sm"
                        : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                    }`}
                  >
                    <span>Our Services</span>
                    <div className="flex items-center gap-2">
                      {isServiceActive() && <FiberManualRecordIcon fontSize="small" className="text-amber-600" />}
                      <motion.div animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ExpandMoreIcon fontSize="small" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 space-y-1 overflow-hidden"
                      >
                        {serviceItems.map((service, index) => (
                          <motion.div
                            key={service.href}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={service.href}
                              className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                                isActive(service.href)
                                  ? "text-amber-700 bg-amber-50"
                                  : "text-gray-600 hover:text-amber-700 hover:bg-amber-50"
                              }`}
                              onClick={() => setMenuOpen(false)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-60"></div>
                                <span className="text-sm leading-tight">{service.name}</span>
                              </div>
                              {isActive(service.href) && (
                                <FiberManualRecordIcon fontSize="small" className="text-amber-600" />
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Partner With Us */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (menuItems.length + 1) * 0.1 }}
                >
                  <Link
                    href="/partner-with-us"
                    className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                      isActive("/partner-with-us")
                        ? "text-amber-700 bg-gradient-to-r from-amber-50 to-orange-50 shadow-sm"
                        : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>Partner With Us</span>
                    {isActive("/partner-with-us") && (
                      <FiberManualRecordIcon fontSize="small" className="text-amber-600" />
                    )}
                  </Link>
                </motion.div>
              </div>

              {/* Call Button */}
              <div className="p-4 border-t border-gray-100 mt-4">
                <motion.a
                  href="tel:+916306366978"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg w-full"
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
