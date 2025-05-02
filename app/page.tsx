import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TeamSection } from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/ui-custom/whatsapp-button";
import { ScrollToTop } from "@/components/ui-custom/scroll-to-top";
import { BackgroundStars } from "@/components/ui-custom/background-stars";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white">
      <BackgroundStars /> 
      <Header/>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton phoneNumber="5492645834384" />
      <ScrollToTop />
    </main>
  );
}
