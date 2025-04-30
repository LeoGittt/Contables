"use client"

import { User, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

interface TeamMemberProps {
  name: string
  role: string
  description?: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
  }
}

export function TeamMember({ name, role, description, socialLinks }: TeamMemberProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-aura-purple/10 text-center h-full"
      whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(200, 160, 242, 0.2)" }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-aura-purple/20">
          <User className="h-12 w-12 text-aura-blue" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-aura-blue mb-1">{name}</h3>
      <p className="text-aura-purple text-sm mb-3">{role}</p>
      {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}

      {socialLinks && (
        <div className="flex justify-center gap-3 mt-4">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-aura-purple/10 p-2 rounded-full hover:bg-aura-purple/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 text-aura-blue" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-aura-purple/10 p-2 rounded-full hover:bg-aura-purple/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4 text-aura-blue" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}
