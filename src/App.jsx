import Home from './Pages/Home'
import UserCard from './Pages/props/UserCard'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './index.css'


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/UserCard' element={<UserCard/>} />
        </Routes>
      </Router>
    </>
  )
}

