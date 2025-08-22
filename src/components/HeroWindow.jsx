import TerminalPrompt from './TerminalPrompt';
import TextType from './custom/TextType';

export default function Hero() {
  return (
    <div className="w-full max-w-5xl min-w-[300px] md:min-w-[80vw] mx-auto flex items-center justify-center gap-[2vh] flex-col lg:flex-row mt-16">

      <div className="glass p-4 rounded-xl w-full shadow-lg font-mono text-white text-xl h-[325px] lg:h-auto lg:min-h-[85vh] lg:min-w-[39.5vw] flex flex-col justify-center sm:min-h-screen">
        <div className="mb-4">
          <TerminalPrompt path="/home/" size="6xl" />
        </div>

        <div className="p-4 font-mono text-4xl md:text-9xl">
          <p><span className="text-green-500">❯ </span>
            hi
          </p>

          <div className="mt-5"><span className="text-neutral-700">•</span> im <TextType className="text-cyan-200"
            text={"pedro"}
            typingSpeed={60}
            pauseDuration={1500}
            initialDelay={200}
            showCursor={true}
            cursorCharacter="█"
            textColors={['oklch(91.7% 0.08 205.041)']}
          /></div>
        </div>
      </div>

      <div className="glass p-4 rounded-xl w-full shadow-lg font-mono text-white text-xl h-[325px] lg:h-auto lg:min-h-[85vh] lg:min-w-[39.5vw] sm:min-h-screen">

      </div>
      
    </div>
  )
}