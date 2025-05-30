import AddNewUser from '../Pages/props/AddNewUser'
import UserCard from '../Pages/props/UserCard'

export default function Home(){
    return(
        <> 
            <div className="flex flex-col items-center justify-center w-screen bg-slate-800 overflow-x-hidden">
                <AddNewUser/>
                <UserCard/>
            </div>    
        </>
    )
}