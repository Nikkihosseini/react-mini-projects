import Header from '../../component/Header'

export default function PokemonGallery(){
    return(
        <>
            <Header/>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='flex flex-col items-center justify-between mt-28 w-[460px] h-auto border-2 border-neon-blue bg-transparent backdrop-blur-md text-retro-mint-green'>
            <div className='flex items-start justify-between w-full border-b-2 border-b-neon-blue p-1'>
                <h1 className='text-retro-mint-green text-[35px] text-left'>POKEMON</h1>
               <div className='text-[10px] text-right opacity-40'>
                    <span className='block'>ACCESS</span>
                    <span className='block'>******</span>
               </div>
            </div>
            <div className='flex items-start justify-between p-1 w-full bg-neon-blue/10 border-b-2 border-b-neon-blue'>
                <div className='text-left basis-2/3'>
                    <span className='text-[15px]'>TRAINER</span>
                    <h2 className='text-[30px] -mb-2 line-clamp-1'>KD6–3.7</h2>
                </div>
                <div className='text-[10px] text-right basis-1/3'>
                    <span className='block'>AGGNSS</span>
                    <span className='block'>*************</span>
                </div>
            </div>
            <div className='flex items-center justify-between h-[250px] border-b-2 border-b-neon-blue'>
                <div className='basis-[60%] h-full p-1 border-r-2 border-r-neon-blue'>
                    <img className='h-full object-fill' src="./public/png-icon/chat.png" alt="chat"/>
                </div>
                <div className='flex flex-col justify-start items-start gap-2 h-full basis-[40%] p-1 text-[10px]'>
                    <div className='flex items-start justify-between w-full'>
                        <div>
                            <span className='block bg-retro-mint-green w-auto p-1 mb-2 text-void-black'>GRASS</span>
                            <span className='block bg-retro-mint-green w-auto p-1 text-void-black'>POISON</span>
                        </div>
                        <span className='line opacity-40'></span>
                    </div>
                    <span className='block text-[13px]'>SEC CODE</span>
                    <span className='block'>X2581</span>
                    <span className='block text-[13px]'>ATTACK POWER</span>
                    <span className='block'>207</span>
                </div>
            </div>
            <div className='w-full p-1 border-b-2 border-b-neon-blue h-[150px]'>
                <p className='line-clamp-5 text-[17px] h-full'>
                    SAID TO LIVE NEAR WARM AND HUMAN PLACES IT ISSUES A WARNING CRY WHENEVER IT FEELS THREATENED.
                </p>
            </div>
            <div className='flex items-center justify-between p-1'>
                <div className='flex items-center justify-center bg-neon-blue/10 hover:bg-neon-blue/20 transition-all basis-[30%]'>
                    <button className='w-[90%] bg-transparent outline-none border-none focus:outline-none'>Pre</button>
                </div>
                <div className='basis-[60%] text-[13px] opacity-40 px-1'>
                    <h3 className='line-clamp-2 text-center'>PROPERTY OF KANTO LEAGUE</h3>
                </div>
                <div className='flex items-center justify-center bg-neon-blue/10 hover:bg-neon-blue/20 transition-all basis-[30%]'>
                    <button className='w-[90%] bg-transparent outline-none border-none focus:outline-none'>Next</button>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}