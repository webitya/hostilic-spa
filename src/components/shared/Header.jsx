"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { therapiesData } from "../data/therapies-data"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import PhoneIcon from "@mui/icons-material/Phone"
import SpaIcon from "@mui/icons-material/Spa"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileHolisticDropdownOpen, setMobileHolisticDropdownOpen] = useState(false)
  const [holisticDropdownOpen, setHolisticDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const holisticDropdownRef = useRef(null)
  const pathname = usePathname()

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Holistic Therapy", href: "/therapies", hasDropdown: true },
    { name: "Ayurvedic Panchkarma", href: "/ayurvedic-panchkarma" },
    { name: "Partner with us", href: "/partner-with-us" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about-us" },
    { name: "Spa Location", href: "/spa-location" },
    { name: "Shop", href: "/spa-products" },
    { name: "Contact Us", href: "/contact" },
  ]
  const serviceItems = []

  // Ensure therapiesData is available, fallback to empty array if not
  const therapyCategories = therapiesData ? [...new Set(therapiesData.map((therapy) => therapy.category))] : []

  const generateCategorySlug = (category) => {
    return category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
      if (holisticDropdownRef.current && !holisticDropdownRef.current.contains(event.target)) {
        setHolisticDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false)
    setMobileHolisticDropdownOpen(false)
    setHolisticDropdownOpen(false)
  }, [pathname])

  const isActive = (href) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md py-2 px-3 lg:px-6 border-b border-[#e8dfd5] shadow-sm z-50 transition-all duration-300">
        <nav className="flex items-center justify-between w-full">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 select-none group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/logo1.png"
                alt="SR Holistic Wellness Logo"
                className="h-9 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#2c2018] text-sm lg:text-base font-bold leading-tight font-serif tracking-wide">
                SR Holistic Wellness
              </span>
              <span className="text-[10px] lg:text-xs text-[#a47148] font-medium tracking-wider hidden sm:block uppercase">
                Relax your body mind & soul
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 list-none m-0 p-0">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                {item.name === "Contact Us" ? (
                  <Link
                    href={item.href}
                    className="ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-bold tracking-widest uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a47148] bg-[#2c2018] text-[#e8dfd5] px-5 py-2.5 shadow-md hover:bg-[#a47148] hover:text-white hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {item.name}
                  </Link>
                ) : item.hasDropdown ? (
                  <div ref={holisticDropdownRef} className="relative">
                    <button
                      onClick={() => setHolisticDropdownOpen(!holisticDropdownOpen)}
                      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center gap-1 group ${isActive(item.href) ? "text-[#a47148]" : "text-[#5a4a42] hover:text-[#a47148]"
                        }`}
                    >
                      {item.name}
                      <KeyboardArrowDownIcon
                        style={{ fontSize: 16 }}
                        className={`transition-transform duration-200 opacity-70 group-hover:opacity-100 ${holisticDropdownOpen ? "rotate-180" : ""}`}
                      />
                      {/* Active Indicator Dot */}
                      {isActive(item.href) && (
                        <motion.span layoutId="activeDot" className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#a47148] rounded-full" />
                      )}
                    </button>

                    <AnimatePresence>
                      {holisticDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#e8dfd5] py-2 z-50 overflow-hidden"
                        >
                          <Link
                            href="/therapies"
                            className="block px-4 py-2.5 text-sm text-[#5a4a42] hover:text-[#a47148] hover:bg-[#fffaf5] transition-colors font-medium border-l-2 border-transparent hover:border-[#a47148]"
                            onClick={() => setHolisticDropdownOpen(false)}
                          >
                            All Therapies
                          </Link>
                          <div className="border-t border-[#e8dfd5] my-1 mx-4"></div>
                          {therapyCategories.map((category) => (
                            <Link
                              key={category}
                              href={`/therapies/${generateCategorySlug(category)}`}
                              className="block px-4 py-2.5 text-sm text-[#5a4a42] hover:text-[#a47148] hover:bg-[#fffaf5] transition-colors border-l-2 border-transparent hover:border-[#a47148]"
                              onClick={() => setHolisticDropdownOpen(false)}
                            >
                              {category}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${isActive(item.href) ? "text-[#a47148]" : "text-[#5a4a42] hover:text-[#a47148]"
                      }`}
                  >
                    {item.name}
                    {/* Active Indicator Dot */}
                    {isActive(item.href) && (
                      <motion.span layoutId="activeDot" className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#a47148] rounded-full" />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* HAMBURGER MENU ICON */}
          <motion.button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle navigation"
            className="lg:hidden p-2 text-[#2c2018] hover:bg-[#fffaf5] rounded-lg transition-colors border border-transparent hover:border-[#e8dfd5]"
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
              className="fixed inset-0 bg-[#2c2018]/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Mobile Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto border-l border-[#e8dfd5]"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-[#e8dfd5] bg-[#fffaf5]">
                <div className="flex items-center gap-2">
                  <img src="/logo1.png" alt="SR Holistic Wellness" className="h-8 w-auto object-contain" />
                  <span className="text-base font-bold text-[#2c2018] font-serif">SR Holistic</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 text-[#5a4a42] hover:text-[#2c2018] hover:bg-[#e8dfd5] rounded-md transition-colors"
                >
                  <CloseIcon fontSize="small" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="py-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.hasDropdown ? (
                      <div className="border-b border-[#f5f0eb] last:border-0">
                        <button
                          onClick={() => setMobileHolisticDropdownOpen(!mobileHolisticDropdownOpen)}
                          className={`flex items-center justify-between w-full px-6 py-3.5 text-sm font-medium transition-all duration-200 border-l-4 ${isActive(item.href)
                            ? "bg-[#fffaf5] text-[#a47148] border-[#a47148]"
                            : "text-[#5a4a42] hover:text-[#a47148] hover:bg-[#fffaf5] border-transparent"
                            }`}
                        >
                          <span className="tracking-wide">{item.name}</span>
                          <KeyboardArrowDownIcon
                            fontSize="small"
                            className={`transition-transform duration-200 ${mobileHolisticDropdownOpen ? "rotate-180" : ""} opacity-60`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileHolisticDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-[#faf7f5] overflow-hidden"
                            >
                              <Link
                                href="/therapies"
                                className="block px-8 py-3 text-xs font-medium text-[#5a4a42] hover:text-[#a47148] transition-colors border-l-2 border-transparent hover:border-[#a47148]"
                                onClick={() => setMenuOpen(false)}
                              >
                                All Therapies
                              </Link>
                              {therapyCategories.map((category) => (
                                <Link
                                  key={category}
                                  href={`/therapies/${generateCategorySlug(category)}`}
                                  className="block px-8 py-3 text-xs font-medium text-[#5a4a42] hover:text-[#a47148] transition-colors border-l-2 border-transparent hover:border-[#a47148]"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {category}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center px-6 py-3.5 text-sm font-medium transition-all duration-200 border-b border-[#f5f0eb] last:border-0 border-l-4 ${isActive(item.href)
                          ? "bg-[#fffaf5] text-[#a47148] border-[#a47148]"
                          : "text-[#5a4a42] hover:text-[#a47148] hover:bg-[#fffaf5] border-transparent"
                          }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="tracking-wide">{item.name}</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Call Button */}
              <div className="p-5 border-t border-[#e8dfd5] bg-[#fffaf5] mt-auto">
                <motion.a
                  href="tel:+916306366978"
                  className="flex items-center justify-center gap-2 bg-[#2c2018] text-[#e8dfd5] px-6 py-3 rounded-full font-bold text-sm shadow-md w-full hover:bg-[#a47148] hover:text-white transition-all duration-300"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <PhoneIcon fontSize="small" />
                  <span>+91 6306366978</span>
                </motion.a>

                <div className="text-center mt-4">
                  <p className="text-[10px] text-[#a47148] uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
                    <SpaIcon style={{ fontSize: 12 }} />
                    Mind • Body • Soul
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
