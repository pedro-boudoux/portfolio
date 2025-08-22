'use client'

import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import TerminalPrompt from './TerminalPrompt' // Make sure this exists

const projects = [
  {
    name: 'premier-metrics',
    description: `Premier Metrics is a player statstics comparison website for the Premier League, allowing users to look up specific players' stats, compare and visualize them against other players.`,
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
    description: `A personal class planner for the University of Guelph using public scheduling data.`,
    tech: {
      frontend: ['Next.js', 'Tailwind'],
      backend: ['Firebase'],
      data: [],
    },
  },
  {
    name: 'portfolio-website',
    description: `This site! Built with a Linux-style theme and responsive design using Tailwind, Next.js and React.`,
    tech: {
      frontend: ['Next.js', 'Tailwind'],
      backend: [],
      data: [],
    },
  },
]

export default function ProjectsWindow() {
  const [selected, setSelected] = useState(projects[0])

  const parent = useRef(null)

  useEffect(() => {
    if (parent.current) autoAnimate(parent.current)
  }, [parent])

  return (
    <div className="glass text-white rounded-xl overflow-hidden shadow-lg w-full max-w-5xl min-w-[300px] md:min-w-[80vw] md:min-h-[80vh] min-h-[88vh] font-mono p-4 flex flex-col text-md md:text-xl">

      {/* Terminal Prompt */}
      <div className="w-screen">
        <TerminalPrompt path="~/Projects/" size="4xl" />
      </div>

      {/* Animate content area */}
      <div ref={parent} className="p-4 space-y-2 text-md md:text-xl transition-all duration-300">
        <p>
          <span className="text-green-500">❯ </span> portfolio --get projects
        </p>

        {/* Project List */}
        <div className="flex gap-4 flex-wrap mt-4 mb-4 text-md md:text-xl">
          {projects.map((project) => (
            <button
              key={project.name}
              onClick={() => setSelected(project)}
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

        {/* Title */}
        <h2 className="text-xl md:text-5xl font-bold mt-6">{selected.name}</h2>

        {/* Description */}
        <p className="mt-4 whitespace-pre-wrap md:text-xl text-md">
          {selected.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 space-y-2">
          {Object.entries(selected.tech).map(([section, stack]) =>
            stack.length ? (
              <div key={section}>
                <strong className="capitalize md:text-2xl text-sm">{section}:</strong>
                <div className="flex flex-wrap gap-2 ml-2 mb-4">
                  {stack.map((item) => (
                    <span key={item} className="md:text-xl text-sm">
                      → {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Links */}
        {selected.links && (
          <div className="mt-4">
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
  )
}
