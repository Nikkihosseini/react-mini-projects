import {useContext , useState , useRef , useEffect} from "react";
import {CartContext} from "../component/context/CartContext"
import { useNavigate } from "react-router-dom";
import PokemonSearch from "./PokemonSearch"

export default function PokemonShopHeader(){
    
    const formRef = useRef(null);
    const searchRef = useRef(null);
    const {cartItems} = useContext(CartContext)
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
           if (
            formRef.current && 
            !formRef.current.contains(event.target) &&
           // Added useRef(hamburgerRef) for the hamburger button and excluded it from handleClickOutside
           // checks. Now clicking the hamburger correctly toggles the mobile menu.
            !searchRef.current.contains(event.target)
           ) {
            setShowMobileSearch(false);
           }
        }
        document.addEventListener("click", handleClickOutside);
          return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const navigate = useNavigate();

    const totalquantity = cartItems.reduce((sum , item) => sum + item.quantity , 0)

    return(
        <>
           <div className="container">
                <div className="flex items-center justify-between w-full border-2 border-neon-blue uppercase text-retro-mint-green p-2 mx-auto dark:bg-purple-glitch/20 bg-soft-lavender/20 backdrop-blur-md z-40">
                    <h1 onClick={()=> navigate("/PokemonShop")} className="text-sm xs:text-base sm:text-3xl cursor-pointer">Shop</h1>
                    <div className="flex items-center justify-end text-left gap-x-5 md:gap-x-10">
                       <div className="hidden md:inline-block">
                        <PokemonSearch/>
                       </div>
                       <div ref={searchRef} onClick={() => setShowMobileSearch((prev) => !prev)} className="inline-block md:hidden">
                        <h2 className="text-sm sm:text-base cursor-pointer">Search</h2>
                       </div>
                        <span onClick={()=> navigate("/PokemonShopCart")} className="flex items-center text-sm sm:text-base cursor-pointer"><img className="hidden xs:inline-block w-4 h-4 sm:w-6 sm:h-6 mb-2" src="/png-icon/shopping_cart.png" alt="shopping_cart"/>cart:{totalquantity}</span>
                    </div>
                </div>
           </div>
           <div ref={formRef} className={`fixed right-0 left-0 mx-auto p-2 max-w-[300px] border-2 border-neon-blue dark:bg-purple-glitch/20 bg-soft-lavender/20 backdrop-blur-md z-50 md:hidden ${showMobileSearch ? 'top-32' : '-top-36'}`}>
             <PokemonSearch/>
           </div>
        </>
    )
}