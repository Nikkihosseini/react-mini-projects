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
        <div className="w-screen overflow-x-hidden mt-36 mb-10">
          {/* PokemonShopHeader */}
            <div className="flex items-center justify-center fixed right-0 left-0 mx-auto top-20 md:top-36 z-40">
              <PokemonShopHeader/>
            </div>
          <div className="container mx-auto">

            <div className="flex items-center justify-center">
        
                    <div className="flex items-start justify-start mt-5 md:mt-20">
                        {/* Pokemon Shop Items */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-10">
                          {cartItems.map(poke => (
                            <PokemonBox key={poke.id} poke={poke} />
                          ))}
                        </div>
                    </div>

            </div>
          </div>
        </div>
        </>
    )
}