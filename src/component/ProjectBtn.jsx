import {Link} from 'react-router-dom'


export default function ProjectBtn(props){
    return(
        <>
            <li className="flex items-center justify-center gap-3 font-pixel text-purple-600 border-[3px] border-purple-600 bg-gameboy-green dark:bg-black px-5 py-2 shadow-[4px_4px_0px_rgba(255,229,180,1)] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_rgba(255,255,0,0.5)] transition cursor-pointer">
                <img className='inline-block w-7 h-7' src="./public/png-icon/star.png" alt="star-png"/>
                <Link to={props.link}>{props.text}</Link>
            </li>
        </>
    )
}