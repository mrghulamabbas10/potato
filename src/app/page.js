import AboutSection from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Fresh from "@/components/Fresh";
import HeroSection from "@/components/Hero";
import MenuSection from "@/components/Menu";
import TasteaBite from "@/components/TasteaBite";
import Header from "@/layout/Header";
export default function Home() {
  return (
    <main className="relative space-y-8 md:space-y-14 lg:space-y-28">
      <Header />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <Fresh />
      {/* Section 2: Taste a Bite */}
      <TasteaBite />
      {/* Section 3: Contact */}
      <Contact />
      {/* Section 4: CTA */}
      <CTA />
    </main>
  );
}
