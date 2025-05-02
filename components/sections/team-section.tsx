"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionHeading } from "@/components/ui-custom/section-heading"
import { ArrowRight } from "lucide-react"

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  const teamMembers = [
    { name: "CPN Cintia Martinez", role: "Contadora Pública Nacional" },
    { name: "CPN Laila Barud", role: "Contadora Pública Nacional" }, 
    { name: "Lic. Laura Más", role: "Licenciada en Contaduría" },
    { name: "CPN Valeria Regalado", role: "Contadora Pública Nacional" }
  ]

  // Colores pastel para los avatares
  const avatarColors = [
    "bg-blue-100 text-blue-800",
    "bg-purple-100 text-purple-800",
    "bg-emerald-100 text-emerald-800",
    "bg-amber-100 text-amber-800"
  ]

  return (
    <section 
      ref={sectionRef} 
      id="equipo" 
      className="py-20 md:py-28 bg-white"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <SectionHeading
          badge="Nuestro equipo"
          title="Nuestro equipo profesional"
          description="Expertas en soluciones contables personalizadas"
          className="mb-16 text-center font-josefin-sans"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {teamMembers.map((member, index) => {
            // Extraer iniciales del nombre y apellido
            const parts = member.name.split(' ')
            const nameInitial = parts[1][0].toUpperCase()  // Inicial del primer nombre
            const lastNameInitial = parts[parts.length - 1][0].toUpperCase()  // Inicial del apellido
            const initials = nameInitial + lastNameInitial
            const colorIndex = index % avatarColors.length
            
            return (
              <motion.div
                key={index}
                className="flex flex-col h-full"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col items-center text-center hover:shadow-sm transition-all duration-300">
                  <div className={`w-20 h-20 rounded-full ${avatarColors[colorIndex]} flex items-center justify-center text-2xl font-medium mb-6`}>
                    {initials} {/* Iniciales: primera letra del nombre y apellido */}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-auto">
                    {member.role} {/* Cargo del miembro */}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
