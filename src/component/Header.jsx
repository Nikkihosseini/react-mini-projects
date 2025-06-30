import { Link } from "react-router-dom"
import { useState , useEffect } from "react";

export default function Header(){

    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        setIsDark(!isDark);
    };

    useEffect(() => {
        const darkModeOn = document.documentElement.classList.contains("dark");
        setIsDark(darkModeOn);
    }, []);

    return(
     <>
        <header className="fixed top-8 right-0 left-0 w-[90%] h-20 z-50 bg-purple-glitch/20 backdrop-blur-md border-4 border-neon-blue p-3 mx-auto">
           <div className="flex items-center justify-between h-full">
                <h1 className="flex items-center text-md md:text-2xl tracking-widest uppercase text-retro-mint-green">
                🕹️ Projects Archive
                </h1>
                <ul className='flex items-center gap-5 text-center'>
                        <li>
                            <Link to='/'
                            className="flex items-center justify-center gap-3 text-lime-crt-glow hover:text-retro-mint-green cursor-pointer">Home
                            <img className='inline-block w-7 h-7' src="./public/png-icon/sword.png" alt="sword-png"/></Link>
                        </li>
                        <li>
                            <Link to='/Project'
                             className="flex items-center justify-center gap-3 text-lime-crt-glow hover:text-retro-mint-green cursor-pointer">Projects
                             <img className='inline-block w-7 h-7' src="./public/png-icon/star.png" alt="star-png"/></Link>
                        </li>
                        <li>
                            <Link to='/About'
                            className="flex items-center justify-center gap-3 text-lime-crt-glow hover:text-retro-mint-green cursor-pointer">About
                            <img className='inline-block w-7 h-7' src="./public/png-icon/heart.png" alt="heart-png"/></Link>
                        </li>
                        <li>
                            <Link to='/Contact'
                            className="flex items-center justify-center gap-3 text-lime-crt-glow hover:text-retro-mint-green cursor-pointer">Contact
                            <img className='inline-block w-7 h-7' src="./public/png-icon/chat.png" alt="chat-png"/></Link>
                        </li>
                         <li onClick={toggleTheme}
                                className="flex items-center justify-center gap-3 text-lime-crt-glow hover:text-retro-mint-green cursor-pointer">
                                Them
                                {/* <img src={isDark ? "/icons/sun.png" : "/icons/moon.png"} alt="theme-icon" /> */}
                        </li>
                </ul>
           </div>
        </header>
     </>  
    )    
}

