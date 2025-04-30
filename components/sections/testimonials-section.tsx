"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionHeading } from "@/components/ui-custom/section-heading"
import { TestimonialCard } from "@/components/ui-custom/testimonial-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTestimonialCarousel } from "@/hooks/use-testimonial-carousel"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })
  const carouselRef = useRef<HTMLDivElement>(null)
  const { scrollPrev, scrollNext } = useTestimonialCarousel(carouselRef)

  const testimonials = [
    {
      name: "María Fernández",
      role: "Dueña de Boutique Mariposa",
      content:
        "Desde que trabajo con Aura, mi contabilidad dejó de ser un dolor de cabeza. Explican todo con claridad y siempre están disponibles para resolver mis dudas. ¡Las recomiendo totalmente!",
      rating: 5,
    },
    {
      name: "Carlos Gutiérrez",
      role: "Fundador de TechSoluciones",
      content:
        "Excelente equipo de profesionales. Nos ayudaron a optimizar nuestra carga impositiva y a mantener todo en regla. Su asesoramiento fue clave para el crecimiento de nuestra empresa.",
      rating: 5,
    },
    {
      name: "Laura Sánchez",
      role: "Emprendedora Gastronómica",
      content:
        "Como emprendedora, necesitaba alguien que me guiara en la parte contable sin complicaciones. Aura no solo me ayudó con los números, sino que me enseñó a entenderlos. Son increíbles.",
      rating: 5,
    },
    {
      name: "Martín Rodríguez",
      role: "Arquitecto Independiente",
      content:
        "Trabajar con Aura ha sido una de las mejores decisiones para mi estudio. Su atención personalizada y su capacidad para explicar temas complejos de forma sencilla hacen toda la diferencia.",
      rating: 4,
    },
    {
      name: "Sofía Méndez",
      role: "Directora de Academia de Danza",
      content:
        "Gracias a Aura pude formalizar mi academia y tener todo en regla. Su asesoramiento fue fundamental para dar el salto de emprendimiento a empresa establecida.",
      rating: 5,
    },
    {
      name: "Javier López",
      role: "Consultor Independiente",
      content:
        "Como freelancer, necesitaba un equipo contable que entendiera mi modelo de negocio. Aura no solo lo entendió, sino que me ayudó a optimizarlo fiscalmente. Son excelentes profesionales.",
      rating: 5,
    },
  ]

  return (
    <section ref={sectionRef} id="testimonios" className="py-20 md:py-28 bg-[#f8f9fc] relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          badge="Testimonios"
          title="Lo que dicen nuestros clientes"
          description="Descubre por qué nuestros clientes confían en nosotras para gestionar su contabilidad y asesoría fiscal."
        />

        <div className="relative mt-12">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white border-[#a17fb8]/20 text-[#364798] hover:bg-[#a17fb8]/10 shadow-sm"
              onClick={scrollPrev}
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white border-[#a17fb8]/20 text-[#364798] hover:bg-[#a17fb8]/10 shadow-sm"
              onClick={scrollNext}
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <motion.div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 -mx-4 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-[#364798] mb-6">Más de 200 clientes satisfechos confían en nosotras</p>
          <Button className="bg-[#364798] hover:bg-[#364798]/90 text-white">Solicitar asesoría gratuita</Button>
        </div>
      </div>
    </section>
  )
}
