import { createContext, useState } from "react";
import json from "../../data/Products.json"
export const CartContext=createContext()

const CartContextProvider=({children})=>{
    const [cartList, setCartList]=useState([]);

    const addToCart=(producto, cantidadNueva)=>{
        const cantidad= cartList.some((prod)=> prod.id === producto.id)
        if(!cantidad){
            const encontrar= json.find((prod)=>prod.id === producto.id) 
            setCartList(cartList.push({...encontrar, quantity: cantidadNueva}))
        }else{
            const encontrar= cartList.find((prod)=>prod.id===producto.id)
            encontrar.quantity=+cantidadNueva
            setCartList(cartList)
        }
        console.log(cartList)
    }
    const clearCart=()=>{

    }
    const removeFromCart=()=>{

    }
    return(
        <CartContext.Provider value={{cartList, addToCart, clearCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
 export default CartContextProvider