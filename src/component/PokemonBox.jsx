

export default function PokemonBox(){

    return(
        <>
            <div className="flex flex-col items-center justify-between bg-transparent backdrop-blur-md border-2 border-neon-blue
            w-[300px] uppercase text-retro-mint-green p-1">

               <div className="w-full">
                    <h1 className="text-2xl text-left w-full line-clamp-1">ivysaur</h1>
                    <div className="w-full h-[200px]">
                        <img className="inline-block w-full h-full object-cover bg-retro-mint-green/70" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${2}.png`} alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-between w-full">
                     <div className='flex gap-1 items-start mt-1'>
                        <span className='inline-block text-sm bg-retro-mint-green p-1  text-crt-white dark:text-void-blackwhitespace-nowrap'>grass</span>
                        <span className='inline-block text-sm bg-retro-mint-green p-1 text-crt-white dark:text-void-blackwhitespace-nowrap'>poison</span>
                    </div>
                    <div className="flex items-start gap-1 mt-1 text-sm">
                        <span className='inline-block'>SEC CODE:</span>
                        <span className='inline-block transition-all'>{uuid.slice(0 , 6)}</span>
                    </div>
                    <div>
                        <span className='block text-[13px]'>ATTACK POWER:</span>
                        <span className='block'>60  {uuid.slice(0 , 2)}</span>
                    </div>
                </div>
               <div className="flex items-center justify-center mt-1 w-full bg-neon-blue/10 hover:bg-neon-blue/20 transition-all">
                <button className="w-full bg-transparent outline-none border-none focus:outline-none">َADD POKEMON</button>
               </div>


            </div>
        </>
    )
}