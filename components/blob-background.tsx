"use client"

import { motion } from "framer-motion"

interface BlobBackgroundProps {
  color1?: string
  color2?: string
  opacity?: number
}

export function BlobBackground({ 
  color1 = "#a17fb8", 
  color2 = "#364798",
  opacity = 0.03
}: BlobBackgroundProps) {
  return (
    <>
      <motion.div 
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full filter blur-[100px] opacity-[0.03]"
        style={{ background: `radial-gradient(circle, ${color1} 0%, transparent 70%)` }}
        animate={{
          x: ["-20%", "0%", "-20%"],
          y: ["-20%", "0%", "-20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full filter blur-[120px] opacity-[0.03]"
        style={{ background: `radial-gradient(circle, ${color2} 0%, transparent 70%)` }}
        animate={{
          x: ["20%", "0%", "20%"],
          y: ["20%", "0%", "20%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  )
}