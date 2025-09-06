import { useState , useEffect , useContext } from "react";
import {CartContext} from "../component/context/CartContext"



export default function PokemonBox({poke , onAdd}){

      const [uuid, setUuid] = useState(crypto.randomUUID());
      const {addToCart} = useContext(CartContext);

        useEffect(() => {
        setUuid(crypto.randomUUID());
    }, [2]);

    
    return(
        <>
            <div className="flex flex-col items-center justify-between bg-transparent backdrop-blur-md border-2 border-neon-blue uppercase text-retro-mint-green p-1 w-auto xs:w-full z-0">

               <div className="w-full">
                    <h2 className="text-lg md:text-2xl text-left w-full line-clamp-1">{poke.name}</h2>
                   <div className="w-full aspect-square max-w-sm">
                        <img
                            className="w-full h-full object-contain bg-retro-mint-green/50"
                            src={poke?.sprites?.front_default} alt={poke?.name}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-between w-full">
                     <div className='flex gap-1 items-start mt-1'>
                        <span className='inline-block text-sm bg-retro-mint-green p-1  text-crt-white dark:text-void-blackwhitespace-nowrap'>{poke?.types?.[0]?.type?.name || "Loading..."}</span>
                        <span className='hidden sm:inline-block text-sm bg-retro-mint-green p-1 text-crt-white dark:text-void-blackwhitespace-nowrap'>{poke?.types?.[1]?.type?.name || "-"}</span>
                    </div>
                    <div className="mt-1 text-sm text-left">
                        <span className='inline-block'>SEC CODE:</span>
                        <span className='inline-block transition-all text-retro-mint-green/50'>{uuid.slice(0 , 6)}</span>
                    </div>
                    <div>
                        <span className='block text-[13px]'>ATTACK POWER:</span>
                        <span className='block text-retro-mint-green/50'>{poke?.stats?.[0]?.base_stat || "Loading..."} {uuid.slice(0 , 2)}</span>
                    </div>
                </div>
               <div className="flex items-center justify-center mt-1 w-full text-retro-mint-green bg-neon-blue/10 hover:bg-neon-blue/20 transition-all">
                <button onClick={onAdd} className="w-full bg-transparent outline-none border-none focus:outline-none">َ
                    <span className="hidden sm:inline-block">
                        ADD POKEMON
                    </span>
                    <span className="inline-block sm:hidden">
                        ADD
                    </span>
                </button>
               </div>
            </div>
        </>
    )
}