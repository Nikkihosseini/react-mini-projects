import Header from '../../component/Header.jsx'
import ProjectBtn from "./../../component/ProjectBtn.jsx"
import Footer from '../Footer.jsx'

export default function Project(){
    return(
        <>
            <div className="relative flex items-start justify-center w-screen min-h-screen dark:bg-void-black bg-crt-white overflow-x-hidden md:px-16 2xl:px-0">
                    <Header/>

                <div className='flex items-center justify-center absolute bottom-0 left-0 right-0 mx-auto mb-3'>
                    <Footer/>
                </div>

                 <ul className='flex items-start flex-col justify-start gap-5 text-center mt-[5rem] md:mt-[10rem] w-[90%]'>
                        <ProjectBtn link='/Usercard' text="User Card Mini Project"/>
                        <ProjectBtn link='/PokemonGallery' text="Pokemon Gallery Mini Project"/>
                        <ProjectBtn link='/PokemonShop' text="Pokemon Shop Mini Project"/>
                </ul>
            </div>
        </>
    )
}