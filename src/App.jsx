import Home from './Pages/Home'
import Project from './Pages/Project/Project'
import UserCard from './Pages/Project/UserCard'
import PokemonGallery from './Pages/Project/PokemonGallery'
import PokemonShop from './Pages/Project/PokemonShop'
import PokemonShopCart from './component/PokemonShopCart'
import PokemonSearch from "./component/PokemonSearch"
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
            <Route path='/PokemonSearch' element={<PokemonSearch/>} />
            <Route path='*' element={<div className='flex items-center justify-center mt-30 bg-crt-white dark:bg-void-black'>
            <img className='inline-block max-w-52 max-h-52' src="/png-icon/error.png" alt="error-png"/>
            </div>} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

