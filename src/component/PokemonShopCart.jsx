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
        <div className="flex flex-col items-center justify-between gap-y-8 mt-20 md:mt-32 mb-8">
          
              <div className="z-50 w-full">
                <PokemonShopHeader/>
              </div>

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