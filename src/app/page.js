import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectsWindow from "@/components/ProjectsWindow";

export default function Home() {
  return (
    <div>
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

    </div>

    
  )
}

