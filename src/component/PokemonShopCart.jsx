import Header from "./Header"
import PokemonShopHeader from "./PokemonShopHeader"
import {useContext } from "react";
import {CartContext} from "../component/context/CartContext"


export default function PokemonShopCart(){

    const {removeFromCart , cartItems} = useContext(CartContext);


    return(
        <>
            <Header />
            <div className="container mx-auto">
                
                <div className="fixed right-0 left-0 top-32">
                    <PokemonShopHeader/>
                </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">

                            <div className="flex flex-col items-center justify-between bg-transparent backdrop-blur-md border-2 border-neon-blue uppercase text-retro-mint-green p-1 w-full">

                                <div className="w-full">
                                    <h2 className="text-2xl text-left w-full line-clamp-1"></h2>
                                <div className="w-full aspect-square max-w-sm">
                                    <img
                                    className="w-full h-full object-contain bg-retro-mint-green/50"
                                    
                                    alt="pokemon"
                                    />
                                </div>
                                </div>
              
                            </div>
                        </div>

            </div>
        </>
    )
}