import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function User({user, newUserList, setNewUserList }){

    
    const [showMore , setShowmore] = useState(false)
    const [like , setLike] = useState(false)
    
    const moreDetails = ()=>{
        setShowmore(!showMore)
    }

    const deleteUser = (id)=>{
        setNewUserList(newUserList.filter(user => user.id !== id))
    }

    

    return(
        <>
            <div className="flex items-center justify-center w-screen min-h-screen overflow-x-hidden">
                <div className={`flex flex-col justify-between bg-sky-cartridge-blue dark:bg-foggy-lilac text-purple-glitch shadow-[4px_4px_0px_#FFE5B4] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)] w-[292px] ${!showMore ? "h-[450px]" : "h-auto"} p-3 text-center overflow-wrap break-words`}>
                   <div className="flex items-center justify-between">
                     <button className="text-cosmic-indigo text-sm bg-inherit flex items-center gap-2 outline-none border-none focus:outline-none" onClick={() => deleteUser(user.id)}>
                        <FontAwesomeIcon icon={faTrash} className="text-glitch-red mb-0.5" />Delete User
                    </button>
                   </div>
                <div className="overflow-hidden rounded-full w-[200px] h-[200px] mx-auto">
                    <img className="inline-block w-full h-full object-cover" src={`https://api.dicebear.com/8.x/bottts/svg?seed=${user.id}`}  alt="user-img"/>
                </div>
                    <h1 className={`text-xl font-bold mb-1 text-cosmic-indigo ${!showMore ? 'line-clamp-2' : 'line-clamp-none'}`}>{user.name}</h1>
                    <h3 className={`mb-1 font-semibold text-[12px] w-full ${!showMore ? 'line-clamp-2' : 'line-clamp-none'}`}>Phone:{user.phone}</h3>
                    <h4 className={`mb-1 text-sm w-full ${!showMore ? 'line-clamp-2' : 'line-clamp-none'}`}>Company:{user.username}</h4>
                    {showMore && <span className="block mb-1 text-sm">email:{user.email}</span>}
                    {showMore && <span className="block text-sm">Address:{user.website}</span>}
                    <div className="flex items-center gap-1 max-h-[36px] mt-3">
                        <button onClick={moreDetails} className="h-full basis-[60%] text-sm rounded-none p-2 bg-stone-200 hover:bg-slate-300 dark:bg-stone-800 text-cosmic-indigo dark:text-lime-crt-glow dark:hover:bg-stone-700 transition duration-200 border-none outline-none focus:outline-none">{!showMore ? 'Show More' : 'Show Less'}</button>
                        <button className="h-full basis-[40%] text-sm rounded-none bg-stone-200 hover:bg-slate-300 text-cosmic-indigo border-none outline-none focus:outline-none p-2" onClick={()=>setLike(!like)}>{like ? "💖Liked" : "🤍Like"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}