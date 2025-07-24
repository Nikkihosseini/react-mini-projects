import {useContext } from "react";
import {CartContext} from "../component/context/CartContext"
import { useNavigate } from "react-router-dom";

export default function PokemonShopHeader(){
    
    const {cartItems} = useContext(CartContext)

    const navigate = useNavigate();

    const totalquantity = cartItems.reduce((sum , item) => sum + item.quantity , 0)

    return(
        <>
            <div className="flex items-center justify-between w-full border-2 border-neon-blue uppercase text-retro-mint-green p-2 mx-auto z-10 dark:bg-purple-glitch/20 bg-soft-lavender/20 backdrop-blur-md">
                <h1 className="text-sm xs:text-base sm:text-3xl">Pokemon Shop</h1>
                <div className="flex items-center justify-end w-36 text-left">
                    <span onClick={()=> navigate("/PokemonShopCart") } className="flex items-center text-sm sm:text-base cursor-pointer"><img className="hidden xs:inline-block w-4 h-4 sm:w-6 sm:h-6 mb-2" src="/png-icon/shopping_cart.png" alt="shopping_cart"/>cart:{totalquantity}</span>
                </div>
            </div>
        </>
    )
}