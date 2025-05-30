import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';

export default function AddNewUser(){
    const [newUser , setNewUser] = useState([])

 
    const addNewUser = ()=>{


    }

    return(
        <>
           <div className="flex flex-col  items-center justify-center w-screen min-h-screen mx-auto">
                <button className="text-sm flex items-center justify-center gap-1 mx-auto outline-none border-none mt-10 px-4 py-1 text-white rounded-md bg-sky-700 hover:bg-slate-600 transition duration-200 focus:outline-none" onClick={addNewUser}>
                        <FontAwesomeIcon icon={faPlus} className="text-red-500" />Add New User
                </button>

                <div className="flex flex-col items-center justify-center w-[292px] h-[379px] bg-stone-200 p-5 mt-5 rounded-md shadow-md shadow-stone-100">
                    <label className="text-stone-900 font-bold" htmlFor="fullName">Full Name:</label>
                    <input className="rounded-md bg-stone-400 text-stone-900" type="text" name="fullName" id="fullName"/>

                    <label className="text-stone-900 font-bold" htmlFor="fullName">Age:</label>
                    <input className="rounded-md bg-stone-400 text-stone-900" type="number" name="age" id="age"/>

                    <label className="text-stone-900 font-bold" htmlFor="fullName">job:</label>
                    <input className="rounded-md bg-stone-400 text-stone-900" type="text" name="job" id="job"/>

                    <label className="text-stone-900 font-bold" htmlFor="fullName">Email:</label>
                    <input className="rounded-md bg-stone-400 text-stone-900" type="email" name="email" id="email"/>

                    <label className="text-stone-900 font-bold" htmlFor="fullName">Description:</label>
                    <input className="rounded-md bg-stone-400 text-stone-900" type="text" name="description" id="description"/>
                </div>
           </div>
        </>
    )
}