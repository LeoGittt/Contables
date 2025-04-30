"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffect({ words, className = "", cursorClassName = "bg-[#a17fb8]" }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Typing effect is complete after typing all words
    if (currentWordIndex === words.length) {
      setIsComplete(true)
      return
    }

    const currentWord = words[currentWordIndex].text
    const typingSpeed = isDeleting ? 50 : 100 // Faster when deleting

    if (!isDeleting && currentText === currentWord) {
      // Pause at the end of typing a word
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1500)
    } else if (isDeleting && currentText === "") {
      // Move to the next word
      setIsDeleting(false)
      setCurrentWordIndex((prev) => prev + 1)
    } else {
      // Update text based on whether typing or deleting
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? prev.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1),
        )
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  // Once all words are typed, show the complete text
  if (isComplete) {
    return (
      <div className={className}>
        {words.map((word, index) => (
          <span key={index} className={word.className}>
            {word.text}{" "}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={className}>
      {words.slice(0, currentWordIndex).map((word, index) => (
        <span key={index} className={word.className}>
          {word.text}{" "}
        </span>
      ))}
      <span className={words[currentWordIndex]?.className}>{currentText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className={`inline-block w-1 h-6 ml-1 ${cursorClassName}`}
      />
    </div>
  )
}
