import { useState , useEffect } from "react"
import User from '../component/props/User.jsx'
import AddNewUser from "../component/props/AddNewUser.jsx"
import axios from "axios"

export default function UserCard(){

    const [newUserList , setNewUserList] = useState([])

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setNewUserList(res.data))
        .catch((error) => console.error("خطا در گرفتن کاربران:", error));
    }, []);

    console.log(newUserList)

    return (
        <>
           <AddNewUser 
                newUserList={newUserList}
                setNewUserList={setNewUserList}
            />
            
            <div className="flex flex-wrap justify-center items-center gap-8 bg-slate-800 overflow-x-hidden my-10">
             {newUserList.map(user =>(
               <User key={user.id} user={user} newUserList={newUserList} setNewUserList={setNewUserList} />
            ))}
           </div>
        </>
    )
}