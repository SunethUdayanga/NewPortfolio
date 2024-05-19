// import Image from "next/image";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col h-[850px]  gap-10">
        
        <Hero />
        <Skills />

      </div>
    
    </main>
  );
}
