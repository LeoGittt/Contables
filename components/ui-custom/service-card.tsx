"use client"

import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-aura-purple/10 hover:shadow-lg transition-shadow h-full"
      whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(200, 160, 242, 0.2)" }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-aura-purple/20">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-aura-blue mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  )
}
