// import Image from "next/image";
import AboutMe from "@/components/main/AboutMe";
import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col gap-10">
        
        <Hero />
        <Contact />
        <Skills />
        <Projects />
        <AboutMe />

      </div>
    
    </main>
  );
}
