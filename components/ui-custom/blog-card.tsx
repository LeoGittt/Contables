"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  slug: string
}

export function BlogCard({ title, excerpt, date, category, author, slug }: BlogCardProps) {
  return (
    <motion.div
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-md border border-[#a17fb8]/10 dark:border-[#a17fb8]/20 overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(161, 127, 184, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium bg-[#a17fb8]/10 dark:bg-[#a17fb8]/20 text-[#364798] dark:text-white px-2 py-1 rounded">
            {category}
          </span>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-lg font-bold text-[#364798] dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#a17fb8]/10 dark:border-[#a17fb8]/20">
          <span className="text-xs text-gray-500 dark:text-gray-400">{author}</span>
          <Link
            href={`/blog/${slug}`}
            className="text-sm font-medium text-[#364798] dark:text-[#a17fb8] hover:text-[#a17fb8] dark:hover:text-[#a17fb8]/80"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
