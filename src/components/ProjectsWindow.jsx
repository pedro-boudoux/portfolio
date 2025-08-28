'use client'

import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import TerminalPrompt from './TerminalPrompt' // Make sure this exists
import { Divide } from 'lucide-react'

const projects = [
  {
    name: 'premier-metrics',
    description: `Premier Metrics is a player statstics comparison website for the Premier League, allowing users to look up specific players' stats, compare and visualize them against other players. The frontend was built in React and vanilla CSS, with a Supabase backend, using PostgreSQL as the database. The data scraping and processing was done in Python with Pandas, and the site is hosted on Vercel.`,
    tech: {
      frontend: ['React', 'CSS'],
      backend: ['Supabase (PostgreSQL)', 'Vercel'],
      data: ['Python', 'Pandas'],
    },
    links: {
      github: 'https://github.com/pedro-boudoux/premier-metrics',
      live: 'https://premier-metrics.vercel.app/',
    },
  },
  {
    name: 'gryph-planner',
    description: `Built at GDSC Hacks 2025, Gryph Planner is a tool that extracts key academic deadlines from course outlines and gives the user the option to download the .csv file of all the events, or directly adds them to the user's Google Calendar via OAuth2 and the Google Calendar API. It features a frontend in React with RESTful API integration to a Node.js backend, which handles the file uploads and downloads. `,
    tech: {
      frontend: ['React',],
      backend: ['Node.js', 'Express', 'Google Cloud', 'Gemini', 'OAuth2'],
      data: [],
    },
    links: {
      github: 'https://github.com/pedro-boudoux/gryph-planner'
    }
  },
  {
    name: 'portfolio-website',
    description: `The site you're currently on! This portfolio website is built with Next.js and Tailwind CSS, featuring a sleek terminal-style interface, inspired by my very own Hyprland setup (i use arch btw). It showcases all my projects, skills, and contact information in a fun and interactive way.`,
    tech: {
      frontend: ['Next.js', 'Tailwind'],
      backend: ['Vercel'],
      data: [],
    },
    links: {
      github: 'https://github.com/pedro-boudoux/portfolio',
      live: '#about-me'
    }
  },
]

export default function ProjectsWindow() {
  const [selected, setSelected] = useState(projects[0])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const parent = useRef(null)

  useEffect(() => {
    if (parent.current) autoAnimate(parent.current)
  }, [parent])

  const handleProjectChange = (project, index) => {
    setSelected(project)
    setSelectedIndex(index)
  }

  return (
    <div id="projects" className="glass text-white rounded-xl overflow-hidden shadow-lg w-full max-w-5xl min-w-[300px] md:min-w-[80vw] md:min-h-[80vh] min-h-[88vh] font-mono p-4 flex flex-col text-md md:text-xl">

      {/* Terminal Prompt */}
      <div className="w-screen">
        <TerminalPrompt path="~/Projects/" size="4xl" />
      </div>

      {/* Static content area */}
      <div className="p-4 space-y-2 text-md md:text-xl">
        <p>
          <span className="text-green-500">❯ </span> portfolio --get projects
        </p>

        {/* Project List */}
        <div className="flex gap-4 flex-wrap mt-4 mb-4 text-md md:text-xl">
          {projects.map((project, index) => (
            <button
              key={project.name}
              onClick={() => handleProjectChange(project, index)}
              className={`px-2 py-1 rounded-sm border ${
                selected.name === project.name
                  ? 'bg-white text-black'
                  : 'text-white border-white hover:bg-white hover:text-black'
              } transition`}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Script simulation */}
        <p className="sm:text-md">
          <span className="text-green-500">❯ </span> cat
          {' ' + selected.name.replace(/\s+/g, '-').toLowerCase()}.txt
        </p>
      </div>

      {/* Animate content area - key prop forces re-render */}
      <div ref={parent} className="p-4 space-y-2 text-md md:text-xl transition-all duration-300">
        <div key={selectedIndex} className="space-y-4">
          {/* Title */}
          <h2 className="text-xl md:text-5xl font-bold">{selected.name}</h2>

          {/* Description */}
          <p className="whitespace-pre-wrap md:text-xl text-md">
            {selected.description}
          </p>

          {/* Tech Stack */}
          <div className="space-y-2">
            {Object.entries(selected.tech).map(([section, stack]) =>
              stack.length ? (
                <div key={section}>
                  <strong className="capitalize md:text-2xl text-sm">{section}:</strong>
                  <div className="flex flex-wrap gap-2 ml-2 mb-4">
                    {stack.map((item) => (
                      <div key={item} className="md:text-xl text-sm">
                        → {item}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>

          {/* Links */}
          {selected.links && (
            <div>
              <strong className="text-md md:text-2xl">Links:</strong>
              <div className="flex flex-col gap-2 ml-2">
                {selected.links.github && (
                  <a
                    href={selected.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline md:text-xl text-sm"
                  >
                    → GitHub Repository
                  </a>
                )}
                {selected.links.live && (
                  <a
                    href={selected.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline md:text-xl text-sm"
                  >
                    → Live Demo
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}