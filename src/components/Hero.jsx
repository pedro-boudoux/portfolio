import styles from './Hero.module.css';

export default function Hero() {

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4">
  {/* Terminal Window */}
  <div className="glass text-white rounded-xl overflow-hidden shadow-lg w-full max-w-md min-w-[80vw] min-h-[35vh] md:min-w-[40vw] md:min-h-[80vh]">
    {/* Top Bar */}
    <div className="flex items-center bg-gray-700/80 px-4 py-2">
      <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
      <div className="ml-auto text-gray-300 font-mono text-sm">~</div>
    </div>

    {/* Terminal Content */}
    <div className="p-4 font-mono text-base">
      <p>user@pedros-portfolio:~/Projects/portfolio/home/</p>
      <p><span className="text-green-500">&gt;</span> hi \</p>
      <p className="ml-4">• im <span className="text-cyan-300">pedro</span></p>
    </div>
  </div>

  {/* Image Window */}
  <div className="glass text-white rounded-xl overflow-hidden shadow-lg w-full max-w-md min-w-[80vw] min-h-[35vh] md:min-w-[40vw] md:min-h-[80vh]">
    {/* Image Path Bar */}
    <div className="bg-gray-700/80 text-gray-300 px-4 py-2 font-mono text-sm">
      ~/Projects/portfolio/me.jpg
    </div>

    {/* Image */}
    <img
      src="/path-to-your-image.png"
      alt="Pedro's face"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    )

}