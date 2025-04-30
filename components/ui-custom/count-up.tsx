"use client"

import { useState, useEffect } from "react"

interface CountUpProps {
  end: number
  duration?: number
  decimals?: number
}

export function CountUp({ end, duration = 2, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <>{count.toFixed(decimals)}</>
}
