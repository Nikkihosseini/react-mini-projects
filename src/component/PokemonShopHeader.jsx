

export default function PokemonShopHeader(){
    return(
        <>
            <div className="flex items-center justify-between border-2 border-neon-blue uppercase text-retro-mint-green p-2">
                <h1 className="text-3xl">Pokemon Shop</h1>
                <div className="w-36 text-left">
                    <span className="flex items-center gap-1"><img className="inline-block w-6 h-6 mb-1.5" src="/png-icon/shopping_cart.png" alt="shopping_cart"/>cart:</span>
                </div>
            </div>
        </>
    )
}