"use client"

import { motion } from "framer-motion"

interface ValueCardProps {
  icon: string
  title: string
  color: string
}

export function ValueCard({ icon, title, color }: ValueCardProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-[#FFBEDD]/10 text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3"
        style={{ backgroundColor: `${color}30` }}
      >
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-sm font-medium text-[#364797]">{title}</h3>
    </motion.div>
  )
}
