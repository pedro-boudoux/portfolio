'use client'
import { useState } from 'react'
import TerminalPrompt from './TerminalPrompt'
const skillsData = {
  languages: [
    { name: 'C & C++', level: 67 },
    { name: 'Python', level: 75 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'SQL', level: 90 },
  ],
  frameworks: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
  ],
  'dev tools': [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'ESLint', level: 80 },
  ],
  technologies: [
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'GraphQL', level: 60 },
  ],
  other: [
    { name: 'Linux', level: 95 },
    { name: 'Figma', level: 70 },
    { name: 'Agile', level: 80 },
  ],
}

const categories = Object.keys(skillsData)

export default function SkillsWindow() {
  const [activeCategory, setActiveCategory] = useState('languages')

  return (
    
    <div  className="glass p-4 rounded-xl w-full max-w-5xl min-w-[300px] shadow-lg font-mono text-white text-md md:text-xl min-h-[90vh]  md:min-h-[85vh] md:min-w-[80vw] sm:min-h-[80vh]">
      
      <div className="w-full">
        <TerminalPrompt path="~/Skills/" size="4xl"/>
      </div>

      {/* Command line */}
      <p className="text-white mt-4">
        <span className="text-green-500">❯ </span> portfolio --get skills
      </p>

      {/* Category buttons */}
      <div className="flex flex-wrap gap-4 mb-4 text-md md:text-xl mt-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-2 py-1 rounded-sm border ${
              activeCategory === category
                ? 'bg-white text-black'
                : 'text-white border-white hover:bg-white hover:text-black'
            } transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Fetching animation */}
      <p className="text-white mb-4 text-md md:text-xl">Fetching {activeCategory}...</p>

      {/* Skills list */}
      <ul className="space-y-4 text-sm">
        {skillsData[activeCategory].map((skill, index) => (
          <li key={index}>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-gray-100 text-md md:text-xl">→ {skill.name}</span>
              <span className="text-green-500 font-bold text-md md:text-xl">
                [<span className="text-white">
                  {'#'.repeat(Math.floor(skill.level / 7))}
                </span>
                {'░'.repeat(15 - Math.floor(skill.level / 7))}
                ] {skill.level}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
