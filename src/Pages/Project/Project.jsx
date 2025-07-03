import Header from '../../component/Header.jsx'
import ProjectBtn from "./../../component/ProjectBtn.jsx"

export default function Project(){
    return(
        <>
            <div className="flex items-start justify-start w-screen min-h-screen dark:bg-void-black bg-crt-white overflow-x-hidden px-20">
                    <Header/>
                 <ul className='flex items-start flex-col justify-start gap-5 text-center mt-[10rem]'>
                        <ProjectBtn link='/Usercard' text="User Card Mini Project"/>
                        <ProjectBtn link='/PokemonGallery' text="Pokemon Gallery Mini Project"/>
                </ul>
            </div>
                
        </>
    )
}