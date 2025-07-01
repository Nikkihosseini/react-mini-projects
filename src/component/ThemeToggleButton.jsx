import { useState , useEffect } from "react";

export default function ThemeToggleButton(){

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
               {/* <img src={isDark ? "/icons/sun.png" : "/icons/moon.png"} alt="theme-icon" /> */}
            </div>
        </>
    )
}