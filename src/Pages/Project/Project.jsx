import Header from '../../component/Header.jsx'
import {Link} from 'react-router-dom'

export default function Project(){
    return(
        <>
            <div className="flex items-start justify-start w-screen min-h-screen dark:bg-void-black bg-crt-white overflow-x-hidden px-20">
                    <Header/>
                 <ul className='flex items-start flex-col justify-start gap-5 text-center mt-[10rem]'>
                        <li className="flex items-center justify-center gap-3 font-pixel text-purple-600 border-[3px] border-purple-600 bg-gameboy-green dark:bg-black px-5 py-2 shadow-[4px_4px_0px_rgba(255,229,180,1)] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_rgba(255,255,0,0.5)] transition cursor-pointer">
                            <img className='inline-block w-7 h-7' src="./public/png-icon/star.png" alt="star-png"/>
                            <Link to='/UserCard'>User Card Mini Project</Link>
                        </li>
                        <li className="flex items-center justify-center gap-3 font-pixel text-purple-600 border-[3px] border-purple-600 bg-gameboy-green dark:bg-black px-5 py-2 shadow-[4px_4px_0px_rgba(255,229,180,1)] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_rgba(255,255,0,0.5)] transition cursor-pointer">
                            <img className='inline-block w-7 h-7' src="./public/png-icon/star.png" alt="star-png"/>
                            <Link to='/PokemonGallery'>Pokemon Gallery Mini Project</Link>
                        </li>
                </ul>
            </div>
                
        </>
    )
}