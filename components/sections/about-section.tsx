"use client";

import { JSX, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import {
  Star, Award, Users, Heart, Sparkles, Lightbulb, Handshake, Flame
} from "lucide-react";

type CoreItem = {
  icon: JSX.Element;
  title: string;
  description: string;
  bg?: string;
};

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const visionMission: CoreItem[] = [
    {
      icon: <Star className="w-5 h-5 text-white" />,
      title: "Misión",
      description:
        "En Aura Asesoría Contable somos un grupo de amigas que unimos nuestras pasiones y conocimientos para ofrecer un servicio contable profesional, claro y cercano. Nuestra misión es transformar la manera en que los emprendedores y PYMEs viven la gestión de sus negocios: con confianza, simplicidad y soluciones innovadoras. Queremos que te sientas acompañado, entendido y libre para crecer.",
      bg: "bg-gradient-to-br from-[#7d5d96] to-[#a17fb8]",
    },
    {
      icon: <Award className="w-5 h-5 text-white" />,
      title: "Visión",
      description:
        "Revolucionar la forma de hacer asesoría contable en Argentina, siendo un equipo de referencia por nuestra calidez humana, creatividad y compromiso real con cada cliente. Soñamos con ser elegidas por quienes buscan algo distinto: un espacio profesional, dinámico y transparente, donde los números hablan claro y las personas importan.",
      bg: "bg-gradient-to-br from-[#364798] to-[#2a3a7a]",
    },
  ];

  const valores: CoreItem[] = [
    {
      icon: <Handshake className="w-5 h-5 text-[#a17fb8]" />,
      title: "Confianza real",
      description: "Vínculos auténticos y transparentes.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#a17fb8]" />,
      title: "Claridad ante todo",
      description: "Lenguaje simple para lo complejo.",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#a17fb8]" />,
      title: "Calidez profesional",
      description: "Te escuchamos y entendemos.",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#a17fb8]" />,
      title: "Innovación constante",
      description: "Herramientas creativas y actuales.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#a17fb8]" />,
      title: "Cercanía humana",
      description: "Trabajamos en equipo con vos.",
    },
    {
      icon: <Flame className="w-5 h-5 text-[#a17fb8]" />,
      title: "Pasión compartida",
      description: "Lo que hacemos nos apasiona.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="bg-white py-24 overflow-hidden relative"
    >
      {/* Decorativos */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#a17fb8]/10 blur-md -z-10" />
      <div className="absolute -top-20 -right-32 w-72 h-72 rounded-full bg-[#364798]/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#7d5d96]/10 blur-3xl -z-10" />

      <div className="container px-4 md:px-6 max-w-7xl">
        {/* Logo decorativo */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="w-14 h-14 rounded-full bg-[#a17fb8]/5 flex items-center justify-center"
          >
            <Image src="/images/logo-variante-azul.png" alt="Aura logo" width={50} height={50} />
          </motion.div>
        </div>

        <SectionHeading
          badge={
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#a17fb8]/10 rounded-full text-[#a17fb8] text-sm">
              <Star className="w-4 h-4" />
              Sobre Nosotras
            </span>
          }
          title="Más que números, somos un equipo con alma"
          description="Unimos profesionalismo, empatía y tecnología para acompañarte en tu crecimiento con claridad y confianza."
        />

        {/* Imagen + Misión/Visión */}
        <div className="grid md:grid-cols-2 gap-10 mt-16 items-start">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/cont.jpg"
              alt="Equipo Aura"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md max-w-xs">
              <h3 className="text-md font-bold text-[#364798]">Un equipo con propósito</h3>
              <p className="text-gray-600 text-sm mt-1">
                Nos une algo más que la profesión: la pasión por acompañar con claridad y calidez.
              </p>
            </div>
          </motion.div>

          {/* Misión y Visión */}
          <div className="space-y-6">
            {visionMission.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`${item.bg} p-5 md:p-6 rounded-2xl text-white font-josefin-sans shadow-lg`}
              >
                <div className="bg-white/20 p-2 rounded-full inline-block mb-2">{item.icon}</div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center text-2xl md:text-3xl font-bold text-[#364798] mt-24 mb-10"
        >
          Nuestros valores
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-white border border-[#e6d5f1] font-josefin-sans rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-base font-semibold text-[#a17fb8] mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-snug">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
