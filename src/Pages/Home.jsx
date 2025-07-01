import {Link} from 'react-router-dom'
import ThemeToggleButton from  './../component/ThemeToggleButton'


export default function Home(){

    return(
        <> 
            <div className="flex flex-col items-center w-screen min-h-screen max-h-screen dark:bg-void-black overflow-hidden bg-crt-white">

                <div className='flex items-end justify-end w-[90%] mt-8'>
                    <ThemeToggleButton/>
                </div>
               
                <ul className='flex items-center justify-center min-h-screen flex-col gap-5 text-center -mt-10'>
                        <li>
                            <Link to='/'
                            className="flex items-center justify-center gap-3 font-pixel text-purple-600 border-[3px] border-purple-600 bg-gameboy-green dark:bg-black px-5 py-2 shadow-[4px_4px_0px_rgba(255,229,180,1)] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_rgba(255,255,0,0.5)] transition cursor-pointer">Home
                             <img className='inline-block w-7 h-7' src="./public/png-icon/sword.png" alt="sword-png"/></Link> 
                        </li>
                        <li>
                            <Link to='/Project'
                            className="flex items-center justify-center gap-3 font-pixel text-purple-600 border-[3px] border-purple-600 bg-gameboy-green dark:bg-black px-5 py-2 shadow-[4px_4px_0px_rgba(255,229,180,1)] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_rgba(255,255,0,0.5)] transition cursor-pointer">Projects
                            <img className='inline-block w-7 h-7' src="./public/png-icon/star.png" alt="star-png"/></Link>
                        </li>
                        <li>
                            <Link to='/About'
                            className="flex items-center justify-center gap-3 font-pixel text-purple-600 border-[3px] border-purple-600 bg-gameboy-green dark:bg-black px-5 py-2 shadow-[4px_4px_0px_rgba(255,229,180,1)] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_rgba(255,255,0,0.5)] transition cursor-pointer">About
                            <img className='inline-block w-7 h-7' src="./public/png-icon/heart.png" alt="heart-png"/></Link>
                        </li>
                        <li>
                            <Link to='/Contact'
                            className="flex items-center justify-center gap-3 font-pixel text-purple-600 border-[3px] border-purple-600 bg-gameboy-green dark:bg-black px-5 py-2 shadow-[4px_4px_0px_rgba(255,229,180,1)] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_rgba(255,255,0,0.5)] transition cursor-pointer">Contact
                            <img className='inline-block w-7 h-7' src="./public/png-icon/chat.png" alt="chat-png"/></Link>
                        </li>
                </ul>
            </div>    
        </>
    )
}