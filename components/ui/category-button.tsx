"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface CategoryButtonProps {
  title: string
  icon: LucideIcon
  isActive: boolean
  onClick: () => void
  className?: string
}

export function CategoryButton({ title, icon: Icon, isActive, onClick, className }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300",
        "text-sm font-medium whitespace-nowrap",
        isActive ? "text-white shadow-lg" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80",
        className,
      )}
    >
      {isActive && (
        <motion.div
          layoutId="activeCategory"
          className="absolute inset-0 bg-gradient-to-r from-[#364797] to-[#6366f1] rounded-xl"
          initial={{ borderRadius: 12 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-gray-500")} />
        <span>{title}</span>
      </span>
    </button>
  )
}
