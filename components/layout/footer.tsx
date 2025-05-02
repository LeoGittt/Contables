import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin, Mail, Phone, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#a17fb8]/10 pt-16 pb-8 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Footer principal */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="relative h-10 w-32">
              <Image 
                src="/images/logo-principal-color.svg" 
                alt="Aura Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Asesoría contable con calidez y claridad para emprendedores y pymes. Transformamos la experiencia contable
              tradicional.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/aura.asesoriacontable?igsh=MXQxemoyejd1d2JtaQ"
                className="bg-[#a17fb8]/10 p-2 rounded-full hover:bg-[#a17fb8]/20 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 text-[#364798]" />
              </Link>
              <Link
                href="https://www.facebook.com/share/18hi5AhKqF/"
                className="bg-[#a17fb8]/10 p-2 rounded-full hover:bg-[#a17fb8]/20 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4 text-[#364798]" />
              </Link>
              <Link
                href="https://linkedin.com/company/aura-asesoria-contable"
                className="bg-[#a17fb8]/10 p-2 rounded-full hover:bg-[#a17fb8]/20 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 text-[#364798]" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-[#364798] mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {[
                { href: "#sobre-nosotras", text: "Sobre Nosotras" },
                { href: "#servicios", text: "Servicios" },
                { href: "#equipo", text: "Equipo" },
        
                { href: "#contacto", text: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-500 hover:text-[#a17fb8] transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-[#364798] mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#a17fb8] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-500">Rivadavia 10190 oeste, Capital</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#a17fb8] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-500">+54 264 583 4384</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#a17fb8] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-500">aura.asesoriacontable@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xs font-medium text-[#364798] mb-2">Horario de atención</h4>
              <p className="text-xs text-gray-500">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-xs text-gray-500">Sábados: 9:00 - 13:00</p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="mt-10 pt-8 border-t border-[#a17fb8]/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} Aura Asesoría Contable. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              {[
                { href: "#", text: "Términos y Condiciones" },
                { href: "#", text: "Política de Privacidad" },
                { href: "#", text: "Cookies" },
              ].map((link) => (
                <Link 
                  key={link.text}
                  href={link.href} 
                  className="text-xs text-gray-500 hover:text-[#a17fb8] transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}