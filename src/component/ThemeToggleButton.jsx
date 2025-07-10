import { useState , useEffect } from "react";

export default function ThemeToggleButton(props){

    const [isDark , setIsDark] = useState(false)

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark')
        setIsDark(!isDark) 
    }

    useEffect(() => {
        const darkModeOn = document.documentElement.classList.contains("dark");
        setIsDark(darkModeOn);
    }, []);

    return(
        <>
            <div
                onClick={toggleTheme}
                className="flex items-center justify-center gap-3 text-pastel-glitch-purple dark:text-lime-crt-glow hover:text-soft-lavender dark:hover:text-retro-mint-green cursor-pointer" 
                >
                    Theme
               <img className={`${props.isOpen ? "inline-block" : 'hidden'} lg:inline-block w-5 h-5 lg:w-6 lg:h-6 mb-1.5`} src={isDark ? "/png-icon/sun.png" : "/png-icon/moon.png"} alt="theme-icon" />
            </div>
        </>
    )
}