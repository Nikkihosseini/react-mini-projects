import { Link } from "react-router-dom"
import { useState , useEffect } from "react";
import ThemeToggleButton from './../component/ThemeToggleButton'

export default function Header(){

    const [isOpen , setIsOpen] = useState(false)

    function toggleMenu(){
        setIsOpen(prev => !prev)
    }

    return(
     <>
        <header className="hidden md:flex fixed top-8 right-0 left-0 w-[90%] h-20 z-50 dark:bg-purple-glitch/20 bg-soft-lavender/20 backdrop-blur-md border-4 border-neon-blue p-3 mx-auto">
           <div className="flex items-center justify-between h-full w-full">
                <h1 className="flex items-center w-full md:w-[43%] text-sm lg:text-xl tracking-widest uppercase text-sky-cartridge-blue dark:text-retro-mint-green">
                <span className="hidden xl:inline-block w-6 h-6 xl:w-7 xl:h-7 mb-2 mr-1">🕹️</span>Projects Archive
                </h1>
                <ul className='flex items-center justify-between text-center text-[12px] xl:text-sm'>
                        <li>
                            <Link to='/'
                            className="flex items-center justify-center gap-1 mr-4  text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-green cursor-pointer">Home
                            <img className='hidden lg:inline-block w-6 h-6 xl:w-7 xl:h-7' src="./public/png-icon/sword.png" alt="sword-png"/></Link>
                        </li>
                        <li>
                            <Link to='/Project'
                             className="flex items-center justify-center gap-1 mr-4 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-green cursor-pointer">Projects
                             <img className='hidden lg:inline-block w-6 h-6 xl:w-7 xl:h-7' src="./public/png-icon/star.png" alt="star-png"/></Link>
                        </li>
                        <li>
                            <Link to='/About'
                            className="flex items-center justify-center gap-1 mr-4 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-green cursor-pointer">About
                            <img className='hidden lg:inline-block w-6 h-6 xl:w-7 xl:h-7' src="./public/png-icon/heart.png" alt="heart-png"/></Link>
                        </li>
                        <li>
                            <Link to='/Contact'
                            className="flex items-center justify-center gap-1 mr-4 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-green cursor-pointer">Contact
                            <img className='hidden lg:inline-block w-6 h-6 xl:w-7 xl:h-7' src="./public/png-icon/chat.png" alt="chat-png"/></Link>
                        </li>
                          <li className="flex items-center justify-center gap-1 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-green cursor-pointer">
                               <ThemeToggleButton/>
                        </li>
                </ul>
           </div>
        </header>
            {/* Mobile Meno */}
                <div className="flex items-center justify-between md:hidden fixed right-0 left-0 w-full h-18 z-50 dark:bg-purple-glitch/20 bg-soft-lavender/20 backdrop-blur-md border-b-2 border-b-neon-blue p-2 mx-auto">
            {/* Mobile Meno Logo */}
                    <div>
                        <h1 className={`${isOpen ? 'hidden' : 'flex'} items-center w-full md:w-[43%] text-sm lg:text-xl tracking-widest uppercase text-sky-cartridge-blue dark:text-retro-mint-green`}>
                        <span className="hidden xl:inline-block w-6 h-6 xl:w-7 xl:h-7 mb-2 mr-1">🕹️</span>Projects Archive
                    </h1>
                    </div>
            {/* Mobile Hamburger Menu */}
                    <div onClick={toggleMenu} className={`flex items-center justify-center cursor-pointer overflow-hidden w-10 h-10 ${isOpen ? 'active' : ''}`}>
                        <span className="hamburger-line"></span>
                    </div>
                </div>
            {/* Mobile Menu List  */}
                <div className={`${!isOpen ? "-left-52" : "left-0"} inline-block md:hidden dark:bg-void-black bg-crt-white border-r-2 border-r-neon-blue w-52 fixed top-0 bottom-0 bg-gray-250 px-2 pt-2 z-50`}>
                    <h2 className="font-PoppinsBold text-neon-blue text-center tracking-widest text-sm border-b-2 border-b-neon-blue mb-4 w-full pb-2">
                        Projects Archive
                    </h2>
                    <ul className='flex flex-col gap-8 items-start justify-between text-[12px] xl:text-sm'>
                        <li>
                            <Link to='/'
                            className="mobile-menu__link flex gap-3 items-center justify-center gap-1mr-4  text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-greencursor-pointer">Home
                            <img className='inline-block w-5 h-5 xl:w-7 xl:h-7' src="/public/png-icon/sword.png" alt="sword-png"/></Link>
                        </li>
                        <li>
                            <Link to='/Project'
                            className="mobile-menu__link flex gap-3 items-center justify-center gap-1mr-4 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-greencursor-pointer">Projects
                            <img className='inline-block w-5 h-5 xl:w-7 xl:h-7' src="/public/png-icon/star.png" alt="star-png"/></Link>
                        </li>
                        <li>
                            <Link to='/About'
                            className="mobile-menu__link flex gap-3 items-center justify-center gap-1mr-4 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-greencursor-pointer">About
                            <img className='inline-block w-5 h-5 xl:w-7 xl:h-7' src="/public/png-icon/heart.png" alt="heart-png"/></Link>
                        </li>
                        <li>
                            <Link to='/Contact'
                            className="mobile-menu__link flex gap-3 items-center justify-center gap-1mr-4 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-greencursor-pointer">Contact
                            <img className='inline-block w-5 h-5 xl:w-7 xl:h-7' src="/public/png-icon/chat.png" alt="chat-png"/></Link>
                        </li>
                        <li className="mobile-menu__link flex items-center justify-center gap-1 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-green cursor-pointer">
                                <ThemeToggleButton isOpen={isOpen}/>
                        </li>
                    </ul>
                </div>
           
     </>  
    )    
}