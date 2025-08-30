import Header from "./Header"
import PokemonShopHeader from "./PokemonShopHeader"
import {useContext } from "react";
import {CartContext} from "../component/context/CartContext"
import PokemonBox from "./PokemonBoxCart";


export default function PokemonShopCart(){

    const {removeFromCart , cartItems} = useContext(CartContext);

    console.log(cartItems)


    return(
        <>
        <Header />
        <div className="w-screen overflow-x-hidden">
            <div className="fixed right-0 left-0 mx-auto top-20 md:top-36 z-50">
              <PokemonShopHeader/>
            </div>
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between gap-y-8 mt-20 md:mt-32 relative">
        
              <div className="flex items-start justify-start">
                    <div className="z-0 mt-20 sm:mt-16">
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-5">
                          {cartItems.map(poke => (
                            <PokemonBox key={poke.id} poke={poke} />
                          ))}
                        </div>
                    </div>
                </div>

          </div>
          </div>
        </div>
        </>
    )
}