import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';

export default function AddNewUser({newUserList , setNewUserList}){
    const [newUser , setNewUser] = useState({
        id: crypto.randomUUID(),
        name: '',
        age: '',
        job: '',
        email: '',
        description: ''
    })

   
    const addNewUser = ()=>{
        setNewUserList([...users , newUser])
    }

    return(
        <>
           <div className="flex flex-col items-center justify-center w-screen min-h-screen mx-auto">
                
                <div className="flex flex-col items-center justify-center w-[292px] h-[379px] bg-foggy-lilac p-5 mt-5  shadow-[4px_4px_0px_rgba(255,255,0,0.5)]">
                    <label className="text-cosmic-indigo w-full font-bold mb-1.5" htmlFor="fullName">Full Name:</label>
                    <input onChange={(e) => setNewUser(prev =>({...prev , name: e.target.value}))} className="rounded-md bg-stone-400 text-purple-glitch w-full mb-3 px-1" value={newUser.name} type="text" name="fullName" id="fullName"/>

                    <label className="text-cosmic-indigo w-full font-bold mb-1.5" htmlFor="fullName">Age:</label>
                    <input onChange={(e) => setNewUser(prev =>({...prev , age: e.target.value}))} className="rounded-md bg-stone-400 text-purple-glitch w-full mb-3 px-1" type="number" name="age" id="age" value={newUser.age}/>

                    <label className="text-cosmic-indigo w-full font-bold mb-1.5" htmlFor="fullName">job:</label>
                    <input onChange={(e) => setNewUser(prev =>({...prev , job: e.target.value}))} className="rounded-md bg-stone-400 text-purple-glitch w-full mb-3 px-1" type="text" name="job" id="job" value={newUser.job}/>

                    <label className="text-cosmic-indigo w-full font-bold mb-1.5" htmlFor="fullName">Email:</label>
                    <input onChange={(e) => setNewUser(prev =>({...prev , email: e.target.value}))} className="rounded-md bg-stone-400 text-purple-glitch w-full mb-3 px-1" type="email" name="email" id="email" value={newUser.email}/>

                    <label className="text-cosmic-indigo font-bold w-full mb-1.5" htmlFor="fullName">Description:</label>
                    <textarea onChange={(e) => setNewUser(prev =>({...prev , description: e.target.value}))} className="px-1 w-full min-h-[45px] max-h-[45x] rounded-md bg-stone-400 text-purple-glitch" type="text" name="description" id="description" value={newUser.description}/>
                </div>

                <button className="text-sm flex items-center justify-center gap-2 mx-auto outline-none border-none mt-10 px-4 py-1 rounded-md text-white bg-neon-blue hover:bg-cosmic-indigo hover:text-lime-crt-glow  transition duration-200 focus:outline-none" onClick={addNewUser}>
                        <FontAwesomeIcon icon={faPlus} className="text-glitch-red" size="lg" />Add New User
                </button>
           </div>
        </>
    )
}