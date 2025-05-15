"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone, Linkedin, Calendar, Briefcase, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeamSectionGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  interface TeamMember {
    name: string
    role: string
    image: string
    experience: string
    specialty: string
    location: string
    availability: string
    bio: string
    achievements: string[]
    contact: {
      email: string
      phone: string
      linkedin: string
    }
    accentColor: string,
    abre:string
  }

  const teamMembers: TeamMember[] = [
    {
      name: "Cintia Martínez",
      role: "Contadora Pública",
      image: "/perfil/cintia.jpg",
      experience: "10+ años de experiencia",
      specialty: "Impuestos corporativos",
      location: "San Juan",
      availability: "Lun-Vie: 9:00-17:00",
      bio: "Escribí una breve presentación sobre tu rol, experiencia y enfoque profesional dentro del equipo.",
      achievements: [
        "Premio Contador del Año 2023",
        "Certificación Internacional en NIIF",
        "Más de 200 clientes satisfechos",
      ],
      contact: {
        email: "cintia@estudio.com",
        phone: "+54 11 1234-5678",
        linkedin: "/in/cintia-martinez",
      },
      accentColor: "#364797",
      abre: "C.M" // Azul oscuro
    },
    {
      name: "Laila Barud",
      role: "Contadora Pública",
      image: "/perfil/laila.jpg",
      experience: "8+ años de experiencia",
      specialty: "Auditoría financiera",
      location: "San Juan",
      availability: "Lun-Vie: 8:30-16:30",
      bio: "Escribí una breve presentación sobre tu rol, experiencia y enfoque profesional dentro del equipo.",
      achievements: [
        "Certificación en Auditoría Internacional",
        "Especialista en Due Diligence",
        "Conferenciante internacional",
      ],
      contact: {
        email: "laila@estudio.com",
        phone: "+54 11 2345-6789",
        linkedin: "/in/laila-barud",
      },
      accentColor: "#C8A0F2",
       abre: "L.B" // Lila claro
    },
    {
      name: "Valeria Regalado",
      role: "Ejecutiva en Gestión Contable",
      image: "/perfil/valeria.jpg",
      experience: "5+ años de experiencia",
      specialty: "Planificación fiscal",
      location: "San Juan",
      availability: "Lun-Vie: 9:30-17:30",
      bio: "Escribí una breve presentación sobre tu rol, experiencia y enfoque profesional dentro del equipo.",
      achievements: [
        "Maestría en Tributación Internacional",
        "Asesora fiscal certificada",
        "Especialista en economías digitales",
      ],
      contact: {
        email: "valeria@estudio.com",
        phone: "+54 11 3456-7890",
        linkedin: "/in/valeria-regalado",
      },
      accentColor: "#FFBEDD",
       abre: "V.R" // Rosa claro
    },
  ]

  return (
    <section ref={containerRef} className="relative py-16 "> {/* Fondo azul claro */}
      {/* Encabezado elegante y compacto */}
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl  font-semibold text-[#364797] mb-3 font-josefin-sans"> {/* Texto azul oscuro */}
            Nuestro <span className="font-semibold font-josefin-sans">Team</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C8A0F2] to-[#FFBEDD] mx-auto mb-3 rounded-full"></div> {/* Degradado lila a rosa */}
          <p className="text-[#364797]/80 max-w-lg mx-auto text-sm font-semibold"> {/* Texto azul oscuro con opacidad */}
            Profesionales dedicados a brindarte soluciones contables precisas y personalizadas.
          </p>
        </motion.div>
      </div>

      {/* Grid de miembros del equipo */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="bg-white rounded-xl shadow-lg border border-white/30 overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                {/* Imagen del miembro */}
                <div className="relative aspect-[3/2] group">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.abre}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${member.accentColor}88 0%, ${member.accentColor}22 50%, transparent 100%)`,
                    }}
                  /> */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    
                    <h3 className="text-sm text-gray-200 font-semibold font-josefin-sans ">{member.name}</h3>
                  </div>
                </div>

                {/* Información del miembro */}
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold font-josefin-sans text-[#364797]">{member.name}</h3>
                      <p className="text-sm font-semibold text-[#C8A0F2]">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex space-x-1.5">
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="p-1.5 rounded-full bg-[#C8A0F2] text-gray-50 hover:bg-[#FFF3AE]/90 transition-colors duration-200 border border-[#FFF3AE]/50 shadow-sm"
                        aria-label={`Enviar email a ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={`tel:${member.contact.phone}`}
                        className="p-1.5 rounded-full bg-[#C8A0F2] text-gray-50 hover:bg-[#FFF3AE]/90 transition-colors duration-200 border border-[#FFF3AE]/50 shadow-sm"
                        aria-label={`Llamar a ${member.name}`}
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                      <a
                        href={`https://linkedin.com${member.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-[#C8A0F2] text-gray-50 hover:bg-[#FFF3AE]/90 transition-colors duration-200 border border-[#FFF3AE]/50 shadow-sm"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8A0F2] to-transparent my-3"></div>

                  <p className="text-[#364797]/90 text-sm mb-3 line-clamp-3 font-josefin-sans">{member.bio}</p>

                  <div className="grid grid-cols-1 gap-2 mb-4 text-xs">
                    <div className="flex items-center p-2 rounded-lg bg-[#FFF3AE]/30 border border-[#FFF3AE]/50">
                      <Briefcase className="h-4 w-4 mr-2 text-[#364797]" />
                      <span className="text-[#364797]">+ experiencia</span>
                    </div>
                    <div className="flex items-center p-2 rounded-lg bg-[#FFBEDD]/30 border border-[#FFBEDD]/50">
                      <MapPin className="h-4 w-4 mr-2 text-[#364797]" />
                      <span className="text-[#364797]">{member.location}</span>
                    </div>
                    <div className="flex items-center p-2 rounded-lg bg-[#C8A0F2]/30 border border-[#C8A0F2]/50">
                      <Clock className="h-4 w-4 mr-2 text-[#364797]" />
                      <span className="text-[#364797]">{member.availability}</span>
                    </div>
                  </div>

                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}