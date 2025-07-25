import Home from './Pages/Home'
import Project from './Pages/Project/Project'
import UserCard from './Pages/Project/UserCard'
import PokemonGallery from './Pages/Project/PokemonGallery'
import PokemonShop from './Pages/Project/PokemonShop'
import PokemonShopCart from './component/PokemonShopCart'
import {CartProvider} from './component/context/CartContext'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import './index.css'


export default function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Project' element={<Project/>} />
            {/* <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} /> */}
            <Route path='/UserCard' element={<UserCard/>} />
            <Route path='/PokemonGallery' element={<PokemonGallery/>} />
            <Route path='/PokemonShop' element={<PokemonShop/>} />
            <Route path='/PokemonShopCart' element={<PokemonShopCart/>} />
            <Route path='*' element={<div className='flex flex-col items-center justify-center gap-2 mt-30 text-5xl font-pixel min-h-screen text-glitch-red bg-crt-white dark:bg-void-black w-screen'>
            <img className='inline-block max-w-52  max-h-52' src="./public/png-icon/error.png" alt="error-png"/>
            Page Not Found !</div>} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

