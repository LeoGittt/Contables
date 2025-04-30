"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Star {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export function FloatingStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const colors = ["#FFF3AE", "#BFDDFF", "#C8A0F2", "#FFBEDD"]
    const newStars: Star[] = []

    for (let i = 0; i < 15; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })
    }

    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: 0.3,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
