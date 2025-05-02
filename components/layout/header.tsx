"use client"
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger,SheetHeader,SheetTitle} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";  // Import VisuallyHidden

const SECTIONS = [
  "hero",
  "sobre-nosotras",
  "servicios",
  "equipo",
  "testimonios",
  "faq",
  "blog",
  "contacto",
] as const;

const NAV_LINKS = [
  { href: "#sobre-nosotras", label: "Sobre Nosotras" },
  { href: "#servicios", label: "Servicios" },
  { href: "#equipo", label: "Equipo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const detectActiveSection = useCallback(() => {
    let currentSection = "";

    for (const section of SECTIONS) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          currentSection = section;
          break;
        }
      }
    }

    setActiveSection(currentSection);
  }, []);

  useMotionValueEvent(scrollY, "change", () => {
    setIsScrolled(scrollY.get() > 50);
    detectActiveSection();
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-josefin-sans",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-aura-purple/10 py-2"
          : "bg-transparent py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 relative z-10" aria-label="Ir al inicio">
          {/* Logo para desktop */}
          <div className="hidden lg:block relative h-10 w-32 md:h-12 md:w-40">
            <Image
              src="/logoheader.svg"
              alt="Aura Logo"
              fill
              className="object-contain"
              priority
              sizes="160px"
            />
          </div>
          {/* Logo para mobile */}
          <div className="lg:hidden relative h-10 w-10">
            <Image
              src="/logoo.jpg"
              alt="Aura Logo"
              fill
              className="object-contain"
              priority
              sizes="40px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative px-1 py-2 font-josefin-sans",
                activeSection === link.href.substring(1)
                  ? "text-aura-purple"
                  : "text-aura-blue hover:text-aura-purple"
              )}
              aria-current={activeSection === link.href.substring(1) ? "page" : undefined}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-aura-purple"
                  layoutId="activeSection"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="bg-aura-blue hover:bg-aura-blue/90 text-white font-josefin-sans">
            <Link href="#contacto" className="flex items-center gap-1">
              Contactanos <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-aura-blue"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white/95 backdrop-blur-md border-l border-aura-purple/10 w-full max-w-xs p-0 font-josefin-sans"
              onInteractOutside={() => setIsMenuOpen(false)}
            >
              {/* Título accesible para lectores de pantalla */}
              <SheetHeader>
  <SheetTitle className="sr-only">Menú principal</SheetTitle>
</SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-6 px-6 border-b border-aura-purple/10">
                  <Link href="/" className="relative h-8 w-24" onClick={() => setIsMenuOpen(false)}>
                    <Image
                      src="/logoheader.svg"
                      alt="Aura Logo"
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </Link>
                </div>
                <nav className="flex flex-col gap-1 py-4 px-4 flex-1" aria-label="Navegación móvil">
                  {NAV_LINKS.map((link) => (
                    <SheetTrigger key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-lg font-medium py-3 px-4 rounded-lg transition-colors font-josefin-sans",
                          activeSection === link.href.substring(1)
                            ? "text-aura-purple bg-aura-purple/10"
                            : "text-aura-blue hover:text-aura-purple hover:bg-aura-purple/5"
                        )}
                        aria-current={activeSection === link.href.substring(1) ? "page" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetTrigger>
                  ))}
                </nav>
                <div className="py-6 px-6 border-t border-aura-purple/10">
                  <Button 
                    asChild 
                    className="w-full bg-aura-blue hover:bg-aura-blue/90 text-white py-4 text-lg font-josefin-sans"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="#contacto" className="flex items-center justify-center gap-2">
                      Contactanos
                      <ChevronRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
