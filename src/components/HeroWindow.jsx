import TerminalPrompt from './TerminalPrompt';
import TextType from './custom/TextType';

export default function Hero() {
  return (
<div className="w-full max-w-5xl mt-[calc(104px+20px)] lg:mt-20 min-w-[300px] md:min-w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[2vh] items-stretch justify-center">

  <div className="glass p-4 rounded-xl w-full shadow-lg font-mono text-white text-xl h-[325px] lg:h-auto flex flex-col justify-center sm:min-h-screen">
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

  <div id="about-me" className="glass p-4 rounded-xl w-full shadow-lg font-mono text-white text-md md:text-xl h-auto mt-[40px] lg:mt-0 min-h-[325px] lg:min-h-0">
        
        <div className="mb-4">
          <TerminalPrompt path="/home/about-me" size="6xl" />
        </div>

        <p className="text-white mt-4">
        <span className="text-green-500">❯ </span> cat me.txt
      </p>

      <div className="flex gap-4 flex-wrap mt-4 mb-4 text-md md:text-xl">
        <p className="md:text-xl text-md whitespace-pre-wrap">
          Hi, I'm Pedro
        </p>


        <p className="md:text-xl text-md whitespace-pre-wrap">
          I'm glad you found my portfolio! (hope you like it as much as I enjoyed building it). I'm a Computer Science student based out of Hamilton. I'm passionate about computers, programming and building cool stuff! It all started one day when I was about 10 years old and had to set up my first Minecraft server, ever since then, I've been hooked and I've been loving every line of code I've written since. When I'm away from the terminal, I'm either teaching myself new things, getting into serious arguments about soccer, or listening to music. 
        </p>

        <p className="md:text-xl text-md whitespace-pre-wrap">
          If you'd like to contact me or see what I'm up to, you can find my LinkedIn and GitHub below, if you'd like to send me an email, you can do so at the bottom of the page! :)
        </p>

        <div className="md:text-xl text-md whitespace-pre-wrap flex gap-[10vw] mt-4 justify-center items-center min-w-full">
          <a className="hover:bg-white hover:text-black transition px-2 py-1 rounded-sm border" href="https://github.com/pedro-boudoux" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a className="hover:bg-white hover:text-black transition px-2 py-1 rounded-sm border" href="https://www.linkedin.com/in/pedroboudoux/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>

        </div>

      </div>
      
    </div>
  )
}