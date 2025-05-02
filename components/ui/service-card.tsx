"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  gradient: string
  className?: string
  index?: number
}

export function ServiceCard({ title, description, icon: Icon, gradient, className, index = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white border border-gray-100",
        "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        "before:absolute before:inset-0 before:z-0 before:bg-gradient-to-br before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
        gradient && `before:${gradient}`,
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-[1px] bg-white rounded-[11px] z-10" />

      <div className="relative z-20 p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div
            className={cn(
              "w-12 h-12 rounded-lg flex items-center justify-center text-white",
              "transition-all duration-300 bg-gradient-to-br shadow-md",
              gradient,
            )}
          >
            <Icon className="w-5 h-5" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 5,
            }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ArrowRight className="w-4 h-4 text-gray-600" />
          </motion.div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#364797] transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mt-auto">{description}</p>
      </div>
    </motion.div>
  )
}
