import Hero from "@/components/layout/Hero";
import Header from "@/components/layout/Header";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import AboutSection from "@/components/layout/AboutSection";
import ContactSection from "@/components/layout/ContactSection";

export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <HomeMenu />
    <AboutSection />
    <ContactSection />
   </>
  )
}
