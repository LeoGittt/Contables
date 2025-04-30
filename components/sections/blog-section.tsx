"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { SectionHeading } from "@/components/ui-custom/section-heading"
import { BlogCard } from "@/components/ui-custom/blog-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  const blogPosts = [
    {
      title: "Cambios en el monotributo para 2023: Todo lo que necesitas saber",
      excerpt:
        "Analizamos las nuevas categorías, montos y requisitos del monotributo para este año y cómo afectan a tu actividad.",
      date: "15 de marzo, 2023",
      category: "Impuestos",
      author: "CPN Cintia Martinez",
      slug: "cambios-monotributo-2023",
    },
    {
      title: "Guía completa para constituir una SAS en Argentina",
      excerpt:
        "Te explicamos paso a paso cómo crear una Sociedad por Acciones Simplificada, sus ventajas y requisitos legales.",
      date: "28 de abril, 2023",
      category: "Sociedades",
      author: "CPN Laila Barud",
      slug: "guia-constituir-sas-argentina",
    },
    {
      title: "5 estrategias para optimizar la carga impositiva de tu PyME",
      excerpt:
        "Descubre cómo reducir legalmente la presión fiscal de tu empresa y mejorar tu planificación tributaria.",
      date: "10 de junio, 2023",
      category: "Planificación Fiscal",
      author: "CPN Valeria Regalado",
      slug: "estrategias-optimizar-carga-impositiva-pyme",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#a17fb8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#364798]/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          badge="Blog"
          title="Artículos y novedades"
          description="Mantente al día con las últimas novedades fiscales, consejos contables y recursos para tu negocio."
        />

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              author={post.author}
              slug={post.slug}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant="outline"
            className="border-[#a17fb8]/30 text-[#364798] dark:text-white hover:bg-[#a17fb8]/10 dark:hover:bg-[#a17fb8]/20"
          >
            <Link href="#" className="flex items-center gap-2">
              Ver todos los artículos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
