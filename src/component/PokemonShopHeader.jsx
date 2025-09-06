import {useContext } from "react";
import {CartContext} from "../component/context/CartContext"
import { useNavigate } from "react-router-dom";
import PokemonSearch from "./PokemonSearch"

export default function PokemonShopHeader(){
    
    const {cartItems} = useContext(CartContext)

    const navigate = useNavigate();

    const totalquantity = cartItems.reduce((sum , item) => sum + item.quantity , 0)

    return(
        <>
           <div className="container">
                <div className="flex items-center justify-between w-full border-2 border-neon-blue uppercase text-retro-mint-green p-2 mx-auto dark:bg-purple-glitch/20 bg-soft-lavender/20 backdrop-blur-md z-40">
                    <h1 onClick={()=> navigate("/PokemonShop")} className="text-sm xs:text-base sm:text-3xl cursor-pointer">Shop</h1>
                    <div className="flex items-center justify-end  text-left gap-x-5 md:gap-x-10">
                       <div>
                        <PokemonSearch/>
                       </div>
                        <span onClick={()=> navigate("/PokemonShopCart")} className="flex items-center text-sm sm:text-base cursor-pointer"><img className="hidden xs:inline-block w-4 h-4 sm:w-6 sm:h-6 mb-2" src="/png-icon/shopping_cart.png" alt="shopping_cart"/>cart:{totalquantity}</span>
                    </div>
                </div>
           </div>
        </>
    )
}