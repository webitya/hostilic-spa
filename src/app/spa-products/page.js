'use client'

import { Spa, LocalFlorist, EmojiNature, WbTwilight, Opacity } from '@mui/icons-material'
import { motion } from 'framer-motion'

export default function SpaComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full"
      >
        <div className="flex justify-center mb-4 space-x-2 text-pink-500">
          <Spa fontSize="large" />
          <LocalFlorist fontSize="large" />
          <EmojiNature fontSize="large" />
          <WbTwilight fontSize="large" />
          <Opacity fontSize="large" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Spa Products</h1>
        <p className="text-lg text-gray-600 mb-6">Coming Soon</p>

        <p className="text-sm text-gray-500">
          We are working on something relaxing and beautiful just for you. Stay tuned!
        </p>
      </motion.div>
    </div>
  )
}
