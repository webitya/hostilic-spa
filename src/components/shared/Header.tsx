"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const menuItems = ["Home", "About", "Contact"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        dropdownRef.current instanceof HTMLElement &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white py-5 px-8 border-b border-gray-200 shadow-md z-30">
      <nav className="flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 select-none">
          <img
            src="/logo.jpg"
            alt="SR Holistic Wellness Logo"
            className="h-10 w-auto object-contain"
          />
          <span
            className="text-black text-[1.8rem] font-bold leading-none"
            style={{ fontFamily: "cursive", whiteSpace: "nowrap" }}
          >
            SR Holistic Wellness
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0 relative">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-[#7b4b1a] hover:text-[#5a3613] transition-colors whitespace-nowrap"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Our Services Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="text-[#7b4b1a] hover:text-[#5a3613] transition-colors whitespace-nowrap"
            >
              Our Services
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-md p-2 z-40 whitespace-nowrap"
                >
                  <li>
                    <Link
                      href="/holistic-therapies"
                      className="block px-4 py-2 text-[#7b4b1a] hover:bg-gray-100 whitespace-nowrap"
                    >
                      SR Holistic Spa Therapies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ayurvedic-panchkarma"
                      className="block px-4 py-2 text-[#7b4b1a] hover:bg-gray-100 whitespace-nowrap"
                    >
                      SR Ayurvedic Panchkarma & Wellness Rituals
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Partner With Us */}
          <li>
            <Link
              href="/partner-with-us"
              className="text-[#7b4b1a] hover:text-[#5a3613] transition-colors whitespace-nowrap"
            >
              Partner With Us
            </Link>
          </li>

          {/* Phone Button */}
          <li>
            <motion.a
              href="tel:+916306366978"
              className="flex items-center gap-2 bg-[#7b4b1a] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#5a3613] focus:outline-none whitespace-nowrap"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <PhoneIcon fontSize="small" />
              </motion.span>
              +91 6306366978
            </motion.a>
          </li>
        </ul>

        {/* HAMBURGER MENU ICON */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle navigation"
          className="md:hidden text-[#7b4b1a]"
        >
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <motion.ul
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden flex flex-col gap-6 mt-4 list-none px-8"
      >
        {menuItems.map((item) => (
          <li key={item}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-[#7b4b1a] py-1 whitespace-nowrap"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/holistic-therapies"
            className="block text-[#7b4b1a] py-1 whitespace-nowrap"
            onClick={() => setMenuOpen(false)}
          >
            SR Holistic Spa Therapies
          </Link>
        </li>
        <li>
          <Link
            href="/ayurvedic-panchkarma"
            className="block text-[#7b4b1a] py-1 whitespace-nowrap"
            onClick={() => setMenuOpen(false)}
          >
            SR Ayurvedic Panchkarma & Wellness Rituals
          </Link>
        </li>
        <li>
          <Link
            href="/partner-with-us"
            className="block text-[#7b4b1a] py-1 whitespace-nowrap"
            onClick={() => setMenuOpen(false)}
          >
            Partner With Us
          </Link>
        </li>
        <li>
          <motion.a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 bg-[#7b4b1a] text-white px-5 py-2 rounded-full font-semibold shadow-md"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.span
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneIcon fontSize="small" />
            </motion.span>
            +91‑9876543210
          </motion.a>
        </li>
      </motion.ul>
    </header>
  );
}
