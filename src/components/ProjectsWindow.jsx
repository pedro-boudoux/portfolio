'use client'

import { useState } from 'react'

const projects = [
  {
    name: 'premier-metrics',
    description:`Premier Metrics is a player statstics comparison website for the Premier League, allowing users to look up specific players' stats, compare and visualize them against other players.`,
    tech: {
      frontend: ['React', 'CSS'],
      backend: ['Supabase (PostgreSQL)', 'Vercel'],
      data: ['Python', 'Pandas'],
    },
  },
  {
    name: 'gryph planner',
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

  return (
    <div className="glass text-white rounded-xl overflow-hidden shadow-lg w-full max-w-5xl min-w-[300px] md:min-w-[80vw] md:min-h-[80vh] min-h-[88vh] font-mono p-4 flex flex-col">

      {/* Terminal Content */}
      <div className="p-4 space-y-2 text-xl">
        <p>
          <span className="text-green-500">&gt;</span> portfolio -get projects
        </p>

        {/* Project List */}
        <div className="flex gap-2 flex-wrap">
          {projects.map((project) => (
            <button
              key={project.name}
              onClick={() => setSelected(project)}
              className={`px-2 py-1 rounded-sm border ${
                selected.name === project.name
                  ? 'bg-white text-black'
                  : 'border-transparent text-white hover:border-white'
            } transition`}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Script simulation */}
        <p className="sm:text-md">&gt; ./{selected.name.replace(/\s+/g, '-').toLowerCase()}.sh</p>

        {/* Description */}
        <p className="mt-4 whitespace-pre-wrap sm:text-md">{selected.description}</p>

        {/* Tech stack */}
        <div className="mt-4 space-y-2">
          {Object.entries(selected.tech).map(([section, stack]) =>
            stack.length ? (
              <div key={section}>
                <strong className="capitalize">{section}:</strong>
                <div className="flex flex-wrap gap-2 ml-2">
                  {stack.map((item) => (
                    <span key={item}>→ {item}</span>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  )
}
