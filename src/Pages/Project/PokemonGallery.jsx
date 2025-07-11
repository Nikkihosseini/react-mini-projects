import Header from '../../component/Header'
import { useState , useEffect } from 'react'
import axios from "axios"

export default function PokemonGallery(){

    const [pokemonId , setPokemonId] = useState(2);
    const [pokemonData , setPokemonData] = useState(null);
    const [description, setDescription] = useState(null);
    const [uuid, setUuid] = useState(crypto.randomUUID());


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then((res) => setPokemonData(res.data))
            .catch((error) => alert('Error!\nPlease wait', error))

    }, [pokemonId]);

    useEffect(()=>{
        if (pokemonData?.species?.url){
            axios.get(pokemonData.species.url)
            .then((res)=>{
                const speciesData = res.data;
                const engDescription = speciesData.flavor_text_entries.find(
                entry => entry.language.name === "en"
            );
            setDescription(engDescription ? engDescription.flavor_text : "No description available");
            })
        } 
    }, [pokemonData])

    useEffect(() => {
       setUuid(crypto.randomUUID());
    }, [pokemonId]);



    console.log(pokemonData)
    
    if (!pokemonData || !pokemonData.sprites || !description) {
        return <div className="text-center mt-20 text-white">Loading...</div>;
    }
    
    return(
        <>
            <Header/>
            <div className='container flex items-center justify-center min-h-screen'>
                <div className='flex flex-col items-center justify-between mt-0 sm:mt-12 md:mt-28 w-[324px] sm:w-[460px] h-auto border-2 border-neon-blue bg-transparent backdrop-blur-md text-retro-mint-green uppercase overflow-hidden'>
            <div className='flex items-start justify-between w-full border-b-2 border-b-neon-blue p-2 px-1'>
                <h1 className='text-retro-mint-green text-[25px] md:text-[35px] text-left mt-1'>POKEMON</h1>
               <div className='text-[10px] text-right dark:opacity-40'>
                    <span className='block'>ACCESS</span>
                    <span className='block'>******</span>
               </div>
            </div>
            <div className='flex items-start justify-between p-1 w-full bg-neon-blue/10 border-b-2 border-b-neon-blue'>
                <div className='text-left basis-2/3'>
                    <span className='text-[15px]'>NAME</span>
                    <h2 className='text-[20px] md:text-[30px] -mb-2 line-clamp-1'>{pokemonData.name}</h2>
                </div>
                <div className='text-[10px] text-right basis-1/3'>
                    <span className='block'>AGGNSS</span>
                    <span className='block'>*************</span>
                </div>
            </div>
            <div className='flex items-center justify-between h-auto sm:h-[227px] w-full border-b-2 border-b-neon-blue'>
                <div className='basis-[60%] h-full p-1 border-r-2 border-r-neon-blue overflow-hiddenborder-void-black'>
                    <img className='inline-block w-full h-full object-cover  bg-retro-mint-green/70' src={`${pokemonData.sprites ? pokemonData.sprites.front_default : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}`} alt="POKEMON.pic"/>
                </div>
                <div className='flex flex-col justify-start items-start gap-2 h-full basis-[40%] p-1 text-[10px]'>
                    <div className='flex items-start justify-between w-full'>
                        <div className='flex flex-col items-start'>
                            <span className='inline-block bg-retro-mint-green p-1 sm:mb-2 text-crt-white dark:text-void-black whitespace-nowrap'>{pokemonData?.types?.[0]?.type?.name || "Loading..."}</span>
                            <span className='hidden sm:inline-block bg-retro-mint-green p-1 text-crt-white dark:text-void-black whitespace-nowrap'>{pokemonData?.types?.[1]?.type?.name || "-"}</span>
                        </div>
                        <span className='line sm:block opacity-40'></span>
                    </div>
                    <span className='block text-[13px] -mt-1'>SEC CODE</span>
                    <span className='block transition-all'>{uuid.slice(0 , 6)}</span>
                    <span className='block text-[13px]'>ATTACK POWER</span>
                    <span className='block'>{pokemonData?.stats?.[0]?.base_stat || "Loading..."} {uuid.slice(0 , 2)}</span>
                    <div className='flex flex-col items-start'>
                        <span className='inline-block bg-retro-mint-green p-1 sm:mb-2 text-crt-white dark:text-void-black whitespace-nowrap'>{pokemonData?.moves?.[0]?.move?.name || "Loading..."}</span>
                        {pokemonData?.moves?.[5] ? (
                            <span className='hidden sm:inline-block bg-retro-mint-green p-1 text-crt-white dark:text-void-black whitespace-nowrap'>
                                  {pokemonData.moves[5].move.name}
                            </span>
                        ) :  <span className='hidden sm:inline-block bg-retro-mint-green p-1 text-crt-white dark:text-void-black whitespace-nowrap'>
                            No move
                            </span>}
                    </div>
                </div>
            </div>
            <div className='w-full p-1 border-b-2 border-b-neon-blue h-[95px] sm:h-[150px]'>
                <p className='line-clamp-5 text-[12px] md:text-[17px] h-full'>
                    {description}
                </p>
            </div>
            <div className='flex items-center justify-between p-1 w-full'>
                <div className='flex items-center justify-center bg-neon-blue/10 hover:bg-neon-blue/20 transition-all basis-[30%]'>
                    <button onClick={()=> setPokemonId(prev => Math.max(prev - 1 , 1))} className='w-[90%] bg-transparent outline-none border-none focus:outline-none'>Pre</button>
                </div>
                <div className='hidden sm:inline-block basis-[60%] dark:opacity-40 px-1 text-center'>
                    <span className='text-[10px] md:text-[13px]'><strong className='text-sm md:text-[15px]'>weight:</strong>{pokemonData.weight}kg</span>
                </div>
                <div className='flex items-center justify-center bg-neon-blue/10 hover:bg-neon-blue/20 transition-all basis-[30%]'>
                    <button onClick={()=> setPokemonId(prev => prev + 1)} className='w-[90%] bg-transparent outline-none border-none focus:outline-none'>Next</button>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}