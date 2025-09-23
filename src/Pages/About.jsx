import ThemeToggleButton from  './../component/ThemeToggleButton'
import Footer from "./Footer"

export default function About() {
  return (
  <>
      <div className="relative flex items-center justify-center w-screen min-h-screen dark:bg-void-black bg-crt-white overflow-hidden">

         <div className='absolute top-5 right-5 flex items-end justify-end w-[90%]'>
            <ThemeToggleButton/>
        </div>

        <div className='flex items-center justify-center absolute bottom-0 left-0 right-0 mx-auto mb-3'>
            <Footer/>
        </div>
               
        <div className="flex flex-col items-center justify-center text-center px-3 text-pastel-glitch-purple">
            <h1 className="text-sm sm:text-xl md:text-4xl font-bold mb-6 w-full">About This Project!</h1>
            <span className='border-2 border-dashed w-full border-vintage-rose mb-4'></span>
             <p className="max-w-xl text-xs md:text-lg leading-relaxed mb-6">
                This project is a pixel-style Pokémon gallery built to practice React and API integration.  
                It uses <span className="text-retro-mint-green">React, TailwindCSS, and PokeAPI</span> to fetch and display data,
                with a nostalgic, retro look.
            </p>
            <ul className="felx items-center justify-center bg-neon-blue/10 p-6 pr-3 rounded-2xl text-left shadow-md space-y-2 text-[10px] md:text-base">
                <li>- Practicing React Hooks</li>
                <li>- Fetching data from an API</li>
                <li>- Styling with TailwindCSS</li>
                <li>- Fully responsive design</li>
            </ul>
        </div>
    </div>
  </>
    
  )
}
