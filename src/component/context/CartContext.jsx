import { createContext , useState} from "react";
import SuccessModal from "../Modal/SuccessModal"


export const CartContext= createContext()

export function CartProvider({children}){
    const [cartItems , setCartItems] = useState([])

const addToCart = (poke, qty = 1) => {
  let message = ''
  setCartItems(prevItems => {
    const existingItem = prevItems.find(item => item.id === poke.id);

    if (existingItem) {
      message = `Quantity updated! Now you have ${existingItem.quantity + qty} ${poke.name} in your cart`;
      return prevItems.map(item =>
        item.id === poke.id
          ? { ...item, quantity: item.quantity + qty }
          : item
      );
    } else {
       const newItems = [...prevItems, { ...poke, quantity: qty }];
       message=`${poke.name} joined your team!`;
      return newItems;
    }
  });

  return message;
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


