import './index.css'
import React from 'react'
import UserCard from "./Pages/props/UserCard.jsx"

export default function App() {
  return (
    <>

    <UserCard img="https://api.dicebear.com/9.x/adventurer/svg?seed=Easton"
    name='John Mark'
    age={22}
    job='Programing'/>
      
    </>
  )
}

