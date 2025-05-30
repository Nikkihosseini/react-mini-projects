import { useState } from "react"
import User from './User.jsx'
import users from './UsersData.jsx'
import AddNewUser from "./AddNewUser.jsx"

export default function UserCard(){

    const [newUserList , setNewUserList] = useState(users)

    return (
        <>
           <AddNewUser 
                newUserList={newUserList}
                setNewUserList={setNewUserList}
            />
            
            <div className="flex flex-wrap justify-center items-center gap-8 bg-slate-800 overflow-x-hidden my-10">
             {newUserList.map(user =>(
               <User key={user.id} {...user} newUserList={newUserList} setNewUserList={setNewUserList} />
            ))}
           </div>
        </>
    )
}