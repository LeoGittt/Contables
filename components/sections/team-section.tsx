"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Calendar,
  Star,
  Award,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TeamSectionRedesigned() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  interface GalleryMouseEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  const handleMouseMove = (e: GalleryMouseEvent) => {
    if (!galleryRef.current) return;
    const rect = galleryRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const teamMembers = [
    {
      name: "Cintia Martínez",
      role: "Contadora Pública",
      image: "/perfil/cintia.jpg",
      experience: "años de experiencia",
      specialty: "Impuestos corporativos",
      location: "San Juan",
      availability: "Lun-Vie: 9:00-17:00",
      bio: "Descripcion de su perfil",
      achievements: [
        "Premio Contador del Año 2023",
        "Certificación Internacional en NIIF",
        "Más de 200 clientes satisfechos",
      ],
      contact: {
        email: "cintia@estudio.com",
        phone: "+54 11 1234-5678",
        linkedin: "/in/cintia-martinez",
        instagram: "@cintia.contadora",
      },
      accentColor: "#C8A0F2",
      gradientFrom: "#364797",
      gradientTo: "#C8A0F2",
    },
    {
      name: "Laila Barud",
      role: "Contadora Pública",
      image: "/perfil/laila.jpg",
      experience: "años de experiencia",
      specialty: "Descripcion de su perfil",
      location: "San Juan",
      availability: "Lun-Vie: 8:30-16:30",
      bio: "Experta en auditoría financiera con amplia experiencia en empresas multinacionales. Enfoque meticuloso y orientado a resultados.",
      achievements: [
        "Certificación en Auditoría Internacional",
        "Especialista en Due Diligence",
        "Conferenciante internacional",
      ],
      contact: {
        email: "laila@estudio.com",
        phone: "+54 11 2345-6789",
        linkedin: "/in/laila-barud",
        instagram: "@laila.contadora",
      },
      accentColor: "#BFDDFF",
      gradientFrom: "#364797",
      gradientTo: "#BFDDFF",
    },
    {
      name: "Valeria Regalado",
      role: "Ejecutiva en Gestión Contable",
      image: "/perfil/valeria.jpg",
      experience: "años de experiencia",
      specialty: "Descripcion de su perfil",
      location: "San Juan",
      availability: "Lun-Vie: 9:30-17:30",
      bio: "Especializada en planificación fiscal estratégica para emprendedores y pequeñas empresas con un enfoque personalizado.",
      achievements: [
        "Maestría en Tributación Internacional",
        "Asesora fiscal certificada",
        "Especialista en economías digitales",
      ],
      contact: {
        email: "valeria@estudio.com",
        phone: "+54 11 3456-7890",
        linkedin: "/in/valeria-regalado",
        instagram: "@valeria.contadora",
      },
      accentColor: "#FFBEDD",
      gradientFrom: "#364797",
      gradientTo: "#FFBEDD",
    },
  ];

  const galleryImages = [
    {
      src: "/team/office-1.jpg",
      title: "Estrategia Financiera",
      description: "Diseñando soluciones personalizadas para cada cliente",
    },
    {
      src: "/team/office-2.jpg",
      title: "Análisis Detallado",
      description: "Examinando cada aspecto de tus finanzas con precisión",
    },
    {
      src: "/team/office-3.jpg",
      title: "Colaboración Efectiva",
      description: "Trabajando en equipo para resolver desafíos complejos",
    },
    {
      src: "/team/office-4.jpg",
      title: "Celebrando Resultados",
      description: "Compartiendo el éxito con nuestros clientes",
    },
  ];

  const stats = [
    { value: "10+", label: "Años de experiencia" },
    { value: "500+", label: "Clientes satisfechos" },
    { value: "98%", label: "Tasa de retención" },
    { value: "24/7", label: "Soporte disponible" },
  ];

  const nextTeamMember = () => {
    setActiveTeamMember((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const prevTeamMember = () => {
    setActiveTeamMember((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveringGallery) {
        nextTeamMember();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHoveringGallery]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/50 py-24"
    >
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#C8A0F2]/10 blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#BFDDFF]/10 blur-[150px]"
        />
        <motion.div
          style={{ opacity }}
          className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#FFBEDD]/10 blur-[100px]"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      {/* Hero Section Inmersiva */}
      <div className="container mx-auto px-4 mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#364797] z-0">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8"
              >
                <Sparkles className="h-5 w-5 text-[#FFF3AE] mr-2" />
                <span className="text-white font-medium">Nuestro Team</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              >
                Expertas que{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">transforman</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFF3AE]/40 -rotate-1 z-0"></span>
                </span>{" "}
                tus finanzas
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-white/90 text-lg mb-10 max-w-lg"
              >
                Nuestro equipo de profesionales contables combina experiencia,
                pasión y visión estratégica para llevar tus finanzas al
                siguiente nivel.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-purple-400 text-white hover:bg-white/90 rounded-full px-8 shadow-xl group"
                >
                  Conoce al equipo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
               
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-16 relative min-h-[500px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="relative h-full w-full"
              >
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFBEDD]/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#BFDDFF]/30 rounded-full blur-2xl" />

                <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="absolute -top-6 -right-6 bg-[#FFF3AE] text-[#364797] px-4 py-2 rounded-full flex items-center text-sm font-semibold shadow-lg">
                    <Star className="h-4 w-4 mr-2 fill-[#364797]" />
                    Team
                  </div>

                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src="/perfil/eq.jpg"
                      alt="Equipo completo"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#364797]/80 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex -space-x-4">
                          {teamMembers.map((member, index) => (
                            <div
                              key={index}
                              className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                            >
                              <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                fill
                                className="object-cover"
                                sizes="48px"
                              />
                            </div>
                          ))}
                        </div>
                        
                      </div>

                      {/* <div className="grid grid-cols-4 gap-2">
                        {stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <div className="text-[#FFF3AE] text-xl font-bold">
                              {stat.value}
                            </div>
                            <div className="text-white/80 text-xs">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sección de Equipo Interactiva */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-[#364797]/10 text-[#364797] rounded-full text-xs font-medium mb-3">
            Nuestras Profesionales
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#364797] mb-4">
            Conoce a nuestras <span className="text-[#C8A0F2]">expertas</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Un equipo de profesionales apasionadas por los números y
            comprometidas con tu éxito financiero
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeamMember}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
              onMouseEnter={() => setIsHoveringGallery(true)}
              onMouseLeave={() => setIsHoveringGallery(false)}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
                <div className="w-full lg:w-2/5">
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                      style={{
                        background: `linear-gradient(135deg, ${teamMembers[activeTeamMember].gradientFrom}, ${teamMembers[activeTeamMember].gradientTo})`,
                      }}
                    />
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={
                          teamMembers[activeTeamMember].image ||
                          "/placeholder.svg"
                        }
                        alt={teamMembers[activeTeamMember].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                      <div
                        className="absolute inset-0 mix-blend-multiply opacity-60"
                        style={{
                          background: `linear-gradient(to top, ${teamMembers[activeTeamMember].gradientFrom}CC, transparent 70%)`,
                        }}
                      />

                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-md">
                        <Award className="h-4 w-4 text-[#364797] mr-1.5" />
                        <span className="text-[#364797] text-sm font-medium">
                          {teamMembers[activeTeamMember].specialty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-3/5">
                  <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-md shadow-lg border border-white/80">
                    <div
                      className="absolute top-0 right-0 h-16 w-16 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2 blur-xl"
                      style={{
                        backgroundColor:
                          teamMembers[activeTeamMember].accentColor,
                      }}
                    />

                    <div className="relative">
                      <h3 className="text-2xl font-bold text-[#364797] mb-1">
                        {teamMembers[activeTeamMember].name}
                      </h3>
                      <p
                        className="text-base mb-4"
                        style={{
                          color: teamMembers[activeTeamMember].gradientFrom,
                        }}
                      >
                        {teamMembers[activeTeamMember].role}
                      </p>

                      <p className="text-slate-600 text-sm mb-6">
                        {teamMembers[activeTeamMember].bio}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 text-[#364797] mr-2" />
                          <span className="text-slate-700 text-sm">
                            {teamMembers[activeTeamMember].experience}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-[#364797] mr-2" />
                          <span className="text-slate-700 text-sm">
                            {teamMembers[activeTeamMember].location}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-[#364797] mr-2" />
                          <span className="text-slate-700 text-sm">
                            {teamMembers[activeTeamMember].availability}
                          </span>
                        </div>
                        
                      </div>

                      <div className="mb-6">
                        <h4 className="text-base font-semibold text-[#364797] mb-2">
                          Logros destacados
                        </h4>
                        <ul className="space-y-1.5">
                          {teamMembers[activeTeamMember].achievements.map(
                            (achievement, index) => (
                              <li key={index} className="flex items-start">
                                <div
                                  className="h-4 w-4 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0"
                                  style={{
                                    backgroundColor:
                                      teamMembers[activeTeamMember].accentColor,
                                  }}
                                >
                                  <span className="text-white text-[10px]">
                                    ✓
                                  </span>
                                </div>
                                <span className="text-slate-700 text-sm">
                                  {achievement}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <a
                          href={`mailto:${teamMembers[activeTeamMember].contact.email}`}
                          className="p-2 rounded-full bg-[#364797]/10 text-[#364797] hover:bg-[#364797] hover:text-white transition-colors duration-300"
                          aria-label={`Enviar email a ${teamMembers[activeTeamMember].name}`}
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                        <a
                          href={`tel:${teamMembers[activeTeamMember].contact.phone}`}
                          className="p-2 rounded-full bg-[#C8A0F2]/10 text-[#C8A0F2] hover:bg-[#C8A0F2] hover:text-white transition-colors duration-300"
                          aria-label={`Llamar a ${teamMembers[activeTeamMember].name}`}
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                        <a
                          href={`https://linkedin.com${teamMembers[activeTeamMember].contact.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-[#BFDDFF]/10 text-[#BFDDFF] hover:bg-[#BFDDFF] hover:text-white transition-colors duration-300"
                          aria-label={`LinkedIn de ${teamMembers[activeTeamMember].name}`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href={`https://instagram.com/${teamMembers[
                            activeTeamMember
                          ].contact.instagram.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-[#FFBEDD]/10 text-[#FFBEDD] hover:bg-[#FFBEDD] hover:text-white transition-colors duration-300"
                          aria-label={`Instagram de ${teamMembers[activeTeamMember].name}`}
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-[#364797] to-[#C8A0F2] text-white hover:opacity-90 rounded-full shadow-md group text-sm py-2">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        Agendar consulta con{" "}
                        {teamMembers[activeTeamMember].name.split(" ")[0]}
                        <ArrowRight className="ml-1.5 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-1.5">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTeamMember(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeTeamMember === index
                        ? "bg-[#364797] w-8"
                        : "bg-[#364797]/30 hover:bg-[#364797]/50"
                    )}
                    aria-label={`Ver ${teamMembers[index].name}`}
                  />
                ))}
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4">
                <button
                  onClick={prevTeamMember}
                  className="bg-white/80 backdrop-blur-sm text-[#364797] p-2 rounded-full shadow-md hover:bg-[#364797] hover:text-white transition-colors duration-300 hidden md:flex"
                  aria-label="Miembro anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4">
                <button
                  onClick={nextTeamMember}
                  className="bg-white/80 backdrop-blur-sm text-[#364797] p-2 rounded-full shadow-md hover:bg-[#364797] hover:text-white transition-colors duration-300 hidden md:flex"
                  aria-label="Siguiente miembro"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Galería Interactiva
      <div className="container mx-auto px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#C8A0F2]/10 text-[#C8A0F2] rounded-full text-sm font-medium mb-4">
            Nuestro Proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#364797] mb-6">
            Cómo <span className="text-[#C8A0F2]">trabajamos</span> para ti
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Descubre el proceso que seguimos para transformar tus finanzas y
            llevar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <div
          ref={galleryRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHoveringGallery(true)}
          onMouseLeave={() => setIsHoveringGallery(false)}
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#364797]/90 z-10" />

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 z-20"
              style={{
                opacity: isHoveringGallery
                  ? 0
                  : index === activeTeamMember % galleryImages.length
                  ? 1
                  : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#364797]/90 via-[#364797]/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {image.title}
                </h3>
                <p className="text-white/90 text-xl max-w-2xl">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1 z-30"
            style={{
              opacity: isHoveringGallery ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#364797]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {image.title}
                    </h4>
                    <p className="text-white/90">{image.description}</p>
                  </div>
                </motion.div>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="absolute w-20 h-20 rounded-full pointer-events-none z-40 mix-blend-difference"
            style={{
              x: springX,
              y: springY,
              backgroundColor: "white",
              opacity: isHoveringGallery ? 0.5 : 0,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div> */}

      {/* CTA Inmersivo */}
      {/* <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#364797] to-[#C8A0F2]" />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <pattern
                    id="grid-cta"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-cta)" />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FFBEDD]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#BFDDFF]/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 py-20 px-8 md:p-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                Transforma Tus Finanzas Hoy
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight">
                Comienza tu viaje hacia la{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">excelencia financiera</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFF3AE]/40 -rotate-1 z-0"></span>
                </span>
              </h3>
              <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
                Nuestro equipo de expertas está listo para ofrecerte soluciones
                personalizadas que impulsen tu negocio y optimicen tus
                resultados financieros.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#364797] hover:bg-white/90 rounded-full px-8 shadow-lg group"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar consulta gratuita
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  Conocer más servicios
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div> */}
    </section>
  );
}
