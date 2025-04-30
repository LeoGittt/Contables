"use client"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ButtonProps } from "@/components/ui/button"

interface GlowingButtonProps extends ButtonProps {
  glowColor?: string
}

export const GlowingButton = forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, glowColor = "rgba(200, 160, 242, 0.5)", children, ...props }, ref) => {
    return (
      <div className="relative group">
        <motion.div
          className="absolute -inset-1 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(45deg, #FFBEDD, #C8A0F2)`,
            filter: `blur(15px)`,
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        />
        <Button
          ref={ref}
          className={cn(
            "relative bg-gradient-to-r from-[#FFBEDD] to-[#C8A0F2] hover:opacity-90 text-[#364797] font-medium shadow-lg",
            className,
          )}
          {...props}
        >
          {children}
        </Button>
      </div>
    )
  },
)

GlowingButton.displayName = "GlowingButton"
