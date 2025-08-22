import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/HeroWindow";
import Skills from "@/components/SkillsWindow";
import ProjectsWindow from "@/components/ProjectsWindow";
import ContactWindow from "@/components/ContactWindow";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      <Navbar />
      <section className="min-h-screen flex items-center justify-center p-5">
        <Hero />
      </section>

      <section className="min-h-screen flex items-center justify-center p-5">
        <Skills />
      </section>
      
<section className="min-h-screen flex items-center justify-center p-5">
        <ProjectsWindow />
      </section>

      <section className="min-h-screen flex items-center justify-center p-5">
        <ContactWindow />
      </section>

    </div>

    
  )
}

