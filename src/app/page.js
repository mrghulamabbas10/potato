import AboutSection from "@/components/about/About";
import CTA from "@/components/CTA";
import Fresh from "@/components/Fresh/Fresh";
import HeroSection from "@/components/hero/Hero";
import MenuSection from "@/components/Menu";
import TasteaBite from "@/components/TasteaBite";
import Header from "@/layout/Header";
export default function Home() {
  return (
    <>
      <main className="relative space-y-8 md:space-y-14 lg:space-y-28">
        <Header />
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <Fresh />
        <TasteaBite />
      </main>
      <CTA />
    </>
  );
}
