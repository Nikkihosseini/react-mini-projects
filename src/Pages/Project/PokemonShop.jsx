import { useState, useEffect } from "react";
import axios from "axios";
import PokemonBox from "../../component/PokemonBox";
import Header from "../../component/Header";
import PokemonShopHeader from "../../component/PokemonShopHeader"

export default function PokemonShop() {

  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 10;

  useEffect(() => {
    loadPokemons();
  }, []);

function loadPokemons() {
  setLoading(true);

  axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then(res => {
      const results = res.data.results;
      let counter = 0;

      results.forEach(poke => {
        axios.get(poke.url)
          .then(res => {
            const newPokemon = res.data;
            setPokemonList(prev => {
              const exists = prev.find(p => p.id === newPokemon.id);
              if (exists) return prev;
              return [...prev, newPokemon];
            });
          })
          .finally(() => {
            counter++;
            if (counter === results.length) {
            
              setOffset(prev => prev + limit);
              setLoading(false);
            }
          });
      });

      if (results.length === 0) {
        setLoading(false);
      }
    })
    .catch(error => {
      alert("Oops! Failed to load the initial list of Pokémons.");
      setLoading(false);
    });
}




  return (
    <>
      <Header />
     <div className="w-screen overflow-x-hidden">
         <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-8 mt-20 md:mt-32 relative mb-8">
          
              <div className="absolute right-0 left-0 top-0 w-full">
                <PokemonShopHeader/>
              </div>

              <div className="z-0 mt-20 sm:mt-16">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
                  {pokemonList.map(poke => (
                    <PokemonBox key={poke.id} poke={poke} />
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                  <button
                  onClick={loadPokemons}
                  disabled={loading}
                  className="px-4 py-2 text-retro-mint-green bg-neon-blue/10 hover:bg-neon-blue/20 transition-all       outline-none border-none focus:outline-none"
                  >
                  {loading ? "Loading..." : "Show More"}
                  </button>
              </div>
  
        </div>
      </div>
     </div>
    </>
  );
}