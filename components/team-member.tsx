"use client"

import { User } from "lucide-react"
import { motion } from "framer-motion"

interface TeamMemberProps {
  name: string
  role: string
  color: string
}

export function TeamMember({ name, role, color }: TeamMemberProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#FFBEDD]/10 text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-center mb-4">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${color}30` }}
        >
          <User className="h-12 w-12 text-[#364797]" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-[#364797] mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
    </motion.div>
  )
}
