import Header from "../../component/Header"
import PokemonBox from "../../component/PokemonBox"
import { useState , useEffect } from "react";
import axios from "axios"


export default function PokemonShop (){

    const [pokemonId , setPokemonId] = useState(2);
    const [pokemonData , setPokemonData] = useState([]);
    const [uuid, setUuid] = useState(crypto.randomUUID());

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
            .then((res) => setPokemonData(res.data))
            .catch((error) => alert('Error!\nPlease wait', error))

    }, [pokemonId]);

    useEffect(() => {
       setUuid(crypto.randomUUID());
    }, [1]);

    if (!pokemonData || !pokemonData.sprites) {
        return <div className="text-center mt-20 text-white">Loading...</div>;
    }
    
    console.log(pokemonData)

    return(
        <>
            <Header/>
            <div className="container w-[90%]">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
                    {pokemonData.map(poke => (
                        <PokemonBox key={poke.id} poke={poke}/>
                    ))}
                </div>
            </div>
        </>
    )
}