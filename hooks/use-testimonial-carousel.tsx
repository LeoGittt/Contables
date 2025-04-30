"use client"

import { useCallback, type RefObject } from "react"

export function useTestimonialCarousel(ref: RefObject<HTMLDivElement>) {
  const scrollPrev = useCallback(() => {
    if (!ref.current) return

    const scrollAmount = ref.current.offsetWidth * 0.8
    ref.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    })
  }, [ref])

  const scrollNext = useCallback(() => {
    if (!ref.current) return

    const scrollAmount = ref.current.offsetWidth * 0.8
    ref.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }, [ref])

  return { scrollPrev, scrollNext }
}
