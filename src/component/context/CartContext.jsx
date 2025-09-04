import { createContext , useState} from "react";


export const CartContext= createContext()

export function CartProvider({children}){
    const [cartItems , setCartItems] = useState([])

const addToCart = (poke, qty = 1) => {
  setCartItems(prevItems => {
    const existingItem = prevItems.find(item => item.id === poke.id);

    if (existingItem) {
      return prevItems.map(item =>
        item.id === poke.id
          ? { ...item, quantity: item.quantity + qty }
          : item
      );
    } else {
      return [...prevItems, { ...poke, quantity: qty }];
    }
  });
};



    function removeFromCart(id){
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    function decreaseQuantity(id){
      setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
      );
    }

    return(
        <CartContext.Provider value={{cartItems , addToCart , removeFromCart, decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
}


