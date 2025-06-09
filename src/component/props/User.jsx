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
                <div className="bg-stone-200 w-[292px] h-auto p-5 rounded-md text-stone-900 text-center shadow-md shadow-stone-100">
                   <div className="flex items-center justify-between">
                     <button className="text-sm bg-inherit flex items-center gap-1 outline-none border-none focus:outline-none" onClick={() => deleteUser(user.id)}>
                        <FontAwesomeIcon icon={faTrash} className="text-red-500" />Delete User
                    </button>
                   </div>
                <div className="overflow-hidden rounded-full w-[200px] h-[200px] mx-auto">
                    <img className="inline-block w-full h-full object-cover" src={`https://api.dicebear.com/8.x/bottts/svg?seed=${user.id}`}  alt="user-img"/>
                </div>
                <h1 className="text-xl font-bold mb-1">{user.name}</h1>
                    <span className="block mb-1 font-semibold">Phone: {user.phone}</span>
                    <span className="block mb-1">Company: {user.company.name}</span>
                    {showMore && <span className="block mb-1">email: {user.email}</span>}
                    {showMore && <span className="block">Address: {user.address.city}</span>}
                    <div>
                        <button onClick={moreDetails} className="mt-3 px-4 py-1 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition duration-200 focus:outline-none">{!showMore ? 'Show More' : 'Show Less'}</button>
                        <button className="bg-stone-200 border-none outline-none focus:outline-none" onClick={()=>setLike(!like)}>{like ? "💖 Liked" : "🤍 Like"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}