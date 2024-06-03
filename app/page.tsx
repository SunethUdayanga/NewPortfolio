// import Image from "next/image";
import AboutMe from "@/components/main/AboutMe";
import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

import { Inter, Exo_2 } from "next/font/google";

const exo = Exo_2({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className={exo.className}>
        <div className="flex flex-col gap-10">

          <Hero />
          <Contact />
          <Skills />
          <Projects />
          <AboutMe />

        </div>
      </div>

    </main>
  );
}
