"use client";

import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/section-heading";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-white"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          badge={<span className=" p-2 rounded-lg text-[#C8A0F2]">Contacto</span>}
          title="Estamos para ayudarte"
          description="Contactanos para resolver tus dudas o solicitar una asesoría personalizada."
        />

        <div className="mt-14 flex justify-center">
          <motion.div
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border-2 border-[#C8A0F2] w-full md:w-4/5 lg:w-1/2 transition-all duration-500 hover:shadow-2xl hover:border-[#FFBEDD]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#C8A0F2] mb-6 text-center">
              Información de contacto
            </h3>

            <div className="space-y-6 text-base text-gray-700">
              {[
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Dirección",
                  text: "Rivadavia 1019 oeste, Capital",
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: "Teléfono / WhatsApp",
                  text: "+54 264 583 4384",
                  link: {
                    href: "https://wa.me/5492645834384",
                    label: "Enviar mensaje",
                  },
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email",
                  text: "aura.asesoriacontable@gmail.com",
                  link: {
                    href: "mailto:aura.asesoriacontable@gmail.com",
                    label: "Enviar email",
                  },
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white/50 text-[#C8A0F2] shadow-sm hover:bg-[#FFBEDD] transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-[#C8A0F2] text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.text}</p>
                    {item.link && (
                      <a
                        href={item.link.href}
                        className="text-sm text-[#FFBEDD] hover:text-[#C8A0F2] transition-colors mt-1 inline-block"
                      >
                        {item.link.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Redes Sociales */}
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-full bg-white/50 text-[#C8A0F2] shadow-sm hover:bg-[#FFBEDD] transition-all">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-[#C8A0F2] text-lg">
                    Redes Sociales
                  </h4>
                  <p>Instagram: @aura.asesoriacontable</p>
                  <p>Facebook: Aura Asesoría Contable</p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://instagram.com/aura.asesoriacontable"
                      className="p-3 rounded-full bg-[#BFDDFF]  transition-colors"
                      aria-label="Instagram"
                      target="_blank"
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://facebook.com/AuraAsesoriaContable"
                      className="p-3 rounded-full bg-[#FFBEDD]  transition-colors"
                      aria-label="Facebook"
                      target="_blank"
                    >
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
                        className="text-white"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
