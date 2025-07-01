import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';

export default function AddNewUser({newUserList , setNewUserList}){

    const [newUser , setNewUser] = useState({
        id: crypto.randomUUID(),
        name: '',
        phone: '',
        username: '',
        email: '',
        website: ''
    })
   
    const addNewUser = ()=>{
        setNewUserList([...newUserList , newUser])
    }

    return(
        <>
           <div className="flex flex-col items-center justify-center w-screen min-h-screen mx-auto">
                
                <div className="flex flex-col items-center justify-center w-[292px] h-[379px] bg-sky-cartridge-blue dark:bg-foggy-lilac p-5 mt-5  shadow-[4px_4px_0px_#FFE5B4] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)]">
                    <label className="text-cosmic-indigo w-full font-bold mb-1.5" htmlFor="fullName">Full Name:</label>
                    <input onChange={(e) => setNewUser(prev =>({...prev , name: e.target.value}))} className="bg-vintage-rose/80 dark:bg-stone-400 text-purple-glitch w-full mb-3 px-1" value={newUser.name} type="text" name="fullName" id="fullName"/>

                    <label className="text-cosmic-indigo w-full font-bold mb-1.5" htmlFor="fullName">Phone:</label>
                    <input onChange={(e) => setNewUser(prev =>({...prev , phone: e.target.value}))} className="bg-vintage-rose/80 dark:bg-stone-400 text-purple-glitch w-full mb-3 px-1" type="text" name="phone" id="phone" value={newUser.phone}/>

                    <label className="text-cosmic-indigo w-full font-bold mb-1.5" htmlFor="fullName">Username:</label>
                    <input onChange={(e) => setNewUser(prev =>({...prev , username: e.target.value}))} className="bg-vintage-rose/80 dark:bg-stone-400 text-purple-glitch w-full mb-3 px-1" type="text" name="username" id="username" value={newUser.username}/>

                    <label className="text-cosmic-indigo w-full font-bold mb-1.5" htmlFor="fullName">Email:</label>
                    <input onChange={(e) => setNewUser(prev =>({...prev , email: e.target.value}))} className="bg-vintage-rose/80 dark:bg-stone-400 text-purple-glitch w-full mb-3 px-1" type="email" name="email" id="email" value={newUser.email}/>

                    <label className="text-cosmic-indigo font-bold w-full mb-1.5" htmlFor="fullName">Website:</label>
                    <input onChange={(e) => setNewUser(prev =>({...prev , website: e.target.value}))} className="bg-vintage-rose/80 dark:bg-stone-400 text-purple-glitch w-full mb-3 px-1" type="text" name="website" id="website" value={newUser.website}/>
                </div>

                <button className="text-sm flex items-center justify-center gap-2 mx-auto outline-none border-none mt-10 px-4 py-1 rounded-none shadow-[4px_4px_0px_#FFE5B4] dark:shadow-[4px_4px_0px_rgba(255,255,0,0.5)] text-white bg-sky-cartridge-blue hover:bg-neon-blue/70 dark:bg-neon-blue dark:hover:bg-cosmic-indigo dark:hover:text-lime-crt-glow focus:outline-none hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_rgba(255,255,0,0.5)] transition" onClick={addNewUser}>
                        <FontAwesomeIcon icon={faPlus} className="text-glitch-red" size="lg" />Add New User
                </button>
           </div>
        </>
    )
}