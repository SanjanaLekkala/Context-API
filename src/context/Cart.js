import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

//useCart is a custom hook
export const useCart =()=>{             
    const cart = useContext(CartContext);
    return cart;
}
///////////


export const CartProvider = (props) =>{
    const [item,setItem] = useState([]);
   
    return(
        <CartContext.Provider value={{item,setItem}}>
            {props.children}
        </CartContext.Provider>
    )
}
