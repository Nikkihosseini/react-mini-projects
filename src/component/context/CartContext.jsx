import { createContext , useState , useEffect} from "react";


export const CartContext= createContext()

export function CartProvider({children}){
    const [cartItems , setCartItems] = useState([])

  const addToCart = (poke) => {
  setCartItems(prevItems => {
    const existingItem = prevItems.find(item => item.id === poke.id);
    if (existingItem) {
      return prevItems.map(item =>
        item.id === poke.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevItems, { ...poke, quantity: 1 }];
    }
  });
};

    useEffect(() => {
     console.log("Cart updated:", cartItems);
    }, [cartItems]);


    function removeFromCart(id){
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    return(
        <CartContext.Provider value={{cartItems , addToCart , removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}


