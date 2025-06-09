import { Link } from "react-router-dom"

export default function Header(){
    return(
     <>
        <header className="fixed top-8 right-0 left-0 w-[90%] h-20 z-50 bg-purple-glitch/20 backdrop-blur-md border-4 border-neon-blue p-3 mx-auto">
           <div className="flex items-center justify-between h-full">
                <h1 className="flex items-center text-md md:text-2xl tracking-widest uppercase text-retro-mint-green">
                🕹️ Projects Archive
                </h1>
                <ul className='flex items-center gap-5 text-center'>
                        <li className="flex items-center justify-center gap-3 text-lime-crt-glow cursor-pointer">
                            <Link to='/'>Home</Link>
                            <img className='inline-block w-7 h-7' src="./public/png-icon/sword.png" alt="sword-png"/>
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lime-crt-glow cursor-pointer">
                            <Link to='/Project'>Projects</Link>
                            <img className='inline-block w-7 h-7' src="./public/png-icon/star.png" alt="star-png"/>
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lime-crt-glow cursor-pointer">
                            <Link to='/About'>About</Link>
                            <img className='inline-block w-7 h-7' src="./public/png-icon/heart.png" alt="heart-png"/>
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lime-crt-glow cursor-pointer">
                            <Link to='/Contact'>Contact</Link>
                            <img className='inline-block w-7 h-7' src="./public/png-icon/chat.png" alt="chat-png"/>
                        </li>
                </ul>
           </div>
        </header>
     </>  
    )    
}

