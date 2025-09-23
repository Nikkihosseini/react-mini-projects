import ThemeToggleButton from '../component/ThemeToggleButton'
import Footer from './Footer'

export default function Contact() {
  return (
   <>
    <div className="relative flex items-center justify-center w-full min-h-screen dark:bg-void-black bg-crt-white overflow-hidden">

        <div className='absolute top-5 right-5 flex items-end justify-end w-[90%]'>
            <ThemeToggleButton/>
        </div>
        
        <div className='flex items-center justify-center absolute bottom-0 left-0 right-0 mx-auto mb-3'>
            <Footer/>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-3 text-pastel-glitch-purple">
            <h1 className="text-xl md:text-4xl font-bold mb-6 font-pixel">Contact Me</h1>
            <span className='border-2 border-dashed w-full border-vintage-rose mb-4'></span>
            <p className="max-w-xl text-xs md:text-lg leading-relaxed mb-6">
                I'd love to hear your thoughts about this project.  
                Send me a message using the form below:
            </p>
             <form className="flex flex-col gap-4 w-auto">
                <input type="text" placeholder="Your Name" className="p-3 border border-gray-500 bg-gray-900 text-crt-white w-full"/>
                <input type="email" placeholder="Your Email" className="p-3 border border-gray-500 bg-gray-900 text-crt-white w-full"/>
                <textarea placeholder="Your Message" className="p-3 border border-gray-500 bg-gray-900 text-crt-white h-32 w-full"/>
               <button type="submit" className="rounded-none bg-pixel text-crt-white border-gray-500 bg-gray-900 py-3 shadow-md hover:scale-105 transition-all w-full">
                Send Message
                </button>
            </form>
        </div>
    </div>
   </>
  )
}
