"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TeamMember } from "@/components/ui-custom/team-member"
import { SectionHeading } from "@/components/ui-custom/section-heading"

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  const teamMembers = [
    {
      name: "CPN Cintia Martinez",
      role: "Contadora Pública Nacional",
      description: "Especialista en impuestos y planificación fiscal para empresas y emprendedores.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/cintia-martinez",
        twitter: "https://twitter.com/cintiamartinez",
      },
    },
    {
      name: "CPN Laila Barud",
      role: "Contadora Pública Nacional",
      description: "Experta en contabilidad general y estados financieros con enfoque en claridad y precisión.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/laila-barud",
        twitter: "https://twitter.com/lailabarud",
      },
    },
    {
      name: "Lic. Laura Más",
      role: "Licenciada en Administración",
      description: "Especializada en gestión administrativa y optimización de procesos empresariales.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/laura-mas",
        twitter: "https://twitter.com/lauramasadmin",
      },
    },
    {
      name: "CPN Valeria Regalado",
      role: "Contadora Pública Nacional",
      description: "Enfocada en asesoría laboral y gestión de recursos humanos para pequeñas empresas.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/valeria-regalado",
        twitter: "https://twitter.com/valeriaregalado",
      },
    },
  ]

  return (
    <section ref={sectionRef} id="equipo" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          badge="Nuestro Equipo"
          title="Conocé a las profesionales"
          description="Un equipo de contadoras apasionadas por brindar soluciones claras y accesibles."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              socialLinks={member.socialLinks}
            />
          ))}
        </motion.div>

        <div className="mt-16 bg-[#f8f9fc] rounded-xl p-8 text-center shadow-sm border border-[#a17fb8]/10">
          <h3 className="text-xl font-bold text-[#364798] mb-4">¿Querés formar parte de nuestro equipo?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Siempre estamos en búsqueda de talento para sumar a nuestro equipo. Si te apasiona la contabilidad y
            compartís nuestros valores, ¡nos encantaría conocerte!
          </p>
          <motion.a
            href="mailto:aura.asesoriacontable@gmail.com?subject=Quiero%20formar%20parte%20del%20equipo"
            className="inline-flex items-center gap-2 bg-[#364798] hover:bg-[#364798]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Envianos tu CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
