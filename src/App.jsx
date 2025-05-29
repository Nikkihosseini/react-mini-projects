import React from 'react'
import UserCard from "./Pages/props/UserCard.jsx"
import users from './Pages/props/UsersData.jsx'
import './index.css'


export default function App() {
  return (
    <>

    <div className="flex flex-wrap justify-center items-center gap-8 min-h-screen bg-slate-800 overflow-x-hidden">
      {
        users.map(user =>(
          <UserCard key={user.id} img={user.img}
            name={user.name} 
            age={user.age}
            job={user.job}
            />
        ))}
    </div>
    </>
  )
}

