'use client'
import { useState, useRef, useEffect } from 'react'
import TerminalPrompt from './TerminalPrompt'
import autoAnimate from '@formkit/auto-animate'
import TextType from '@/components/custom/TextType'

const AnimatedNumber = ({ target, delay = 0 }) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 800;
      const steps = 50;
      const stepValue = target / steps;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        if (step >= steps) {
          setCurrent(target);
          clearInterval(timer);
        } else {
          setCurrent(Math.floor(stepValue * step));
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [target, delay]);
  
  return <>{current}</>;
};

const skillsData = {
  languages: [
    { name: 'C & C++', level: 70 },
    { name: 'Python', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML & CSS', level: 100 },
    { name: 'SQL', level: 90 },
  ],
  frameworks: [
    { name: 'Pandas', level: 75 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'React.js', level: 85 },
    { name: 'Express', level: 85 },
    { name: 'Node.js', level: 95 },
  ],
  dev_tools: [
    { name: 'Git', level: 95 },
    { name: 'Postman', level: 80 },
    { name: 'ESLint', level: 80 },
  ],
  technologies: [
    { name: 'Linux/Unix', level: 95 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'RestAPIs', level: 85 },
  ],
  other: [
    { name: 'Figma', level: 95 },
    { name: 'Photoshop', level: 85 },
  ],
}

const categories = Object.keys(skillsData)

export default function SkillsWindow() {
  const [activeCategory, setActiveCategory] = useState('languages')

  const parent = useRef(null);

  useEffect( () => {
    if (parent.current) autoAnimate(parent.current);
  }, [parent])

  return (
    
    <div id="skills" className="glass p-4 rounded-xl w-full max-w-5xl min-w-[300px] shadow-lg font-mono text-white text-md md:text-xl min-h-[90vh]  md:min-h-[85vh] md:min-w-[80vw] sm:min-h-[80vh]">
      
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
            type='button'
            onClick={(e) => {
              
              e.preventDefault();
              e.stopPropagation();
              setActiveCategory(category)
              
            }}
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
      
<ul ref={parent} className="space-y-4 text-sm">
  {skillsData[activeCategory].map((skill, index) => {
    const totalHashes = Math.floor(skill.level / 5);
    const totalSpaces = 20 - totalHashes;
    
    return (
      <li key={index}>
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="text-gray-100 text-md md:text-xl">→ {skill.name}</span>
          <span className="text-gray-100 font-bold text-md md:text-xl">
            [<span className="text-white inline-block" style={{ width: `${19}ch` }}>
              <TextType
               key={`${activeCategory}-${index}`}
                text={'#'.repeat(totalHashes)}
                typingSpeed={30}
                initialDelay={index * 200}
                loop={false}
                showCursor={false}
                startOnVisible={true}
                className="inline"
              />
              {' '.repeat(totalSpaces)}
            </span>
            ] <AnimatedNumber target={skill.level} delay={index * 200} key={`${activeCategory}-${index}`} />%
          </span>
        </div>
      </li>
    );
  })}
</ul>

    </div>
  )
}
