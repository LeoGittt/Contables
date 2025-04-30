"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

export function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-aura-purple/10 flex-shrink-0 w-full md:w-[350px] snap-center h-full"
      whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(200, 160, 242, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">{`"${content}"`}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-aura-purple/20 flex items-center justify-center">
          <span className="text-aura-blue font-medium">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-medium text-aura-blue">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
