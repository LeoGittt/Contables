"use client"

import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export function ServiceCard({ title, description, icon, color }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#FFBEDD]/10 hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
        style={{ backgroundColor: `${color}30` }}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-[#364797] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  )
}
