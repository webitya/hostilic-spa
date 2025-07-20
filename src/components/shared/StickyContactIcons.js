"use client"

import { useState } from "react"
import MessageIcon from "@mui/icons-material/Message"
import CallIcon from "@mui/icons-material/Call"
import CloseIcon from "@mui/icons-material/Close"

export default function StickyContactIconsAdvanced() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Main Contact Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#e7b36e] via-[#ffd375] to-[#ffcb6b] hover:opacity-90 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
          aria-label="Contact Options"
        >
          {isExpanded ? <CloseIcon fontSize="small" /> : <MessageIcon fontSize="small" />}

          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6EE7B7] via-[#3ABAB4] to-[#A7F3D0] opacity-50 animate-ping"></div>
        </button>

        {/* Expanded Contact Options */}
        <div
          className={`absolute bottom-16 right-0 flex flex-col gap-3 p-2 rounded-xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20 transition-all duration-300 ease-in-out ${
            isExpanded
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {/* WhatsApp Option */}
          <a
            href="https://wa.me/916306366978"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-white/60 hover:bg-green-50 text-gray-800 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-green-200 transform hover:scale-105 transition-all duration-300 ease-in-out min-w-max"
            aria-label="Chat on WhatsApp"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full">
              <MessageIcon fontSize="small" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm">WhatsApp</span>
              <span className="text-xs text-gray-500">Chat with us</span>
            </div>
          </a>

          {/* Call Option */}
          <a
            href="tel:+916306366978"
            className="flex items-center gap-3 px-4 py-3 bg-white/60 hover:bg-blue-50 text-gray-800 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-200 transform hover:scale-105 transition-all duration-300 ease-in-out min-w-max"
            aria-label="Call Us"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
              <CallIcon fontSize="small" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm">Call Now</span>
              <span className="text-xs text-gray-500">+91 630 636 6978</span>
            </div>
          </a>
        </div>

        {/* Glassmorphism Backdrop */}
        {isExpanded && (
          <div
            className="fixed inset-0 bg-white/10 backdrop-blur-md border border-white/10 shadow-inner transition-all duration-300 -z-10"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </div>
    </div>
  )
}
