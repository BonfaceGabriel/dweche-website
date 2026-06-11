import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function SectionDivider() {
  return (
    <div className="section-divider bg-surface-50">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <Clients />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
