"use client"

import { motion } from "framer-motion"

interface ValueCardProps {
  icon: string
  title: string
}

export function ValueCard({ icon, title }: ValueCardProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-aura-purple/10 text-center"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(200, 160, 242, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 bg-aura-purple/20">
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-sm font-medium text-aura-blue">{title}</h3>
    </motion.div>
  )
}
