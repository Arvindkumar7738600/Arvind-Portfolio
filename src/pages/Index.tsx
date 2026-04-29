import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { ParticlesBg } from "@/components/ParticlesBg";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Certificates } from "@/components/sections/Certificates";
import { Footer } from "@/components/sections/Footer";
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  useLenis();

  return (
    <main className="relative">
      <Preloader />
      <CustomCursor />
      <ParticlesBg />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates />
      <Footer />
    </main>
  );
};

export default Index;
