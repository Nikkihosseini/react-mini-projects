import Header from '../../component/Header.jsx'
import ProjectBtn from "./../../component/ProjectBtn.jsx"

export default function Project(){
    return(
        <>
            <div className="flex items-start justify-center w-screen min-h-screen dark:bg-void-black bg-crt-white overflow-x-hidden md:px-16 2xl:px-0">
                    <Header/>
                 <ul className='flex items-start flex-col justify-start gap-5 text-center mt-[5rem] md:mt-[10rem] w-[90%]'>
                        <ProjectBtn link='/Usercard' text="User Card Mini Project"/>
                        <ProjectBtn link='/PokemonGallery' text="Pokemon Gallery Mini Project"/>
                        <ProjectBtn link='/PokemonShop' text="Pokemon Shop Mini Project"/>
                </ul>
            </div>
        </>
    )
}