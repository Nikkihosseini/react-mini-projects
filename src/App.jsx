import Home from './Pages/Project/Home'
import Project from './Pages/Project/Project'
import UserCard from './Pages/props/UserCard'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './index.css'


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Project' element={<Project/>} />
          {/* <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} /> */}
          <Route path='/UserCard' element={<UserCard/>} />
        </Routes>
      </Router>
    </>
  )
}

