"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  Linkedin,
  Calendar,
  Briefcase,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TeamSectionGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  interface TeamMember {
    name: string;
    role: string;
    image: string;
    experience: string;
    specialty: string;
    location: string;
    availability: string;
    bio: string;
    achievements: string[];
    contact: {
      email: string;
      phone: string;
      linkedin: string;
    };
    accentColor: string;
    abre: string;
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
      abre: "C.M", // Azul oscuro
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
      abre: "L.B", // Lila claro
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
      abre: "V.R", // Rosa claro
    },
  ];

  return (
    <section ref={containerRef} className="relative py-16 ">
      {" "}
      {/* Fondo azul claro */}
      {/* Encabezado elegante y compacto */}
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl  font-semibold text-[#364797] mb-3 font-josefin-sans">
            {" "}
            {/* Texto azul oscuro */}
            Nuestro{" "}
            <span className="font-semibold font-josefin-sans">Team</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C8A0F2] to-[#FFBEDD] mx-auto mb-3 rounded-full"></div>{" "}
          {/* Degradado lila a rosa */}
          <p className="text-[#364797]/80 max-w-lg mx-auto text-sm font-semibold">
            {" "}
            {/* Texto azul oscuro con opacidad */}
            Profesionales dedicados a brindarte soluciones contables precisas y
            personalizadas.
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
              <div
                className="bg-white rounded-2xl shadow-lg border border-white/30 overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow duration-300 group relative"
                style={{ borderBottom: `4px solid ${member.accentColor}` }}
              >
                {/* Imagen del miembro */}
                <div className="relative aspect-[3/2] group">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.abre}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none rounded-t-2xl"
                    style={{
                      background: `linear-gradient(to top, ${member.accentColor}33 0%, transparent 100%)`,
                    }}
                  />
                </div>
                {/* Solo nombre y rol */}
                <div className="p-6 flex flex-col items-center justify-center flex-grow">
                  <h3 className="text-lg font-bold font-josefin-sans text-[#364797] text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#C8A0F2] text-center">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
