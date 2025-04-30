import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TeamSection } from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/ui-custom/whatsapp-button";
import { ScrollToTop } from "@/components/ui-custom/scroll-to-top";
import { BackgroundStars } from "@/components/ui-custom/background-stars";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Fondo con estrellas */}
      <BackgroundStars />

      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      {/* <TestimonialsSection />
      <BlogSection /> */}
      <ContactSection />
      <CtaSection />

      {/* Footer */}
      <Footer />

      {/* Elementos flotantes */}
      <WhatsAppButton phoneNumber="5492645834384" />
      <ScrollToTop />
    </main>
  );
}
