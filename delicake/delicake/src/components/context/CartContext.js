import { createContext, useState } from "react";
import json from "../../data/Products.json"
export const CartContext=createContext()

const CartContextProvider=({children})=>{
    const [cartList, setCartList]=useState(JSON.parse(localStorage.getItem("carrito"))||[]);

    localStorage.setItem("carrito",JSON.stringify(cartList))

    const getQuantity=()=>{
        const cantidad=cartList.reduce((acc,i)=>acc+i.quantity,0)
        return cantidad
    }
    const addToCart=(producto, cantidadNueva)=>{
        const cantidad= cartList.some((prod)=> prod.id === producto.id)
        if(!cantidad){
            const encontrar= json.find((prod)=>prod.id === producto.id) 
            setCartList([...cartList,{...encontrar, quantity: cantidadNueva}])
            
        }else{
            const encontrar= cartList.find((prod)=>prod.id===producto.id)
            encontrar.quantity=encontrar.quantity+cantidadNueva
            setCartList(cartList)
        }
        getQuantity()
        localStorage.setItem("carrito",JSON.stringify(cartList))
        console.log(cartList)
    }
    const clearCart=()=>{
        setCartList([])
    }
    const removeFromCart=(e)=>{
        const encontrar= cartList.find((p)=> p.id === e.id)
        const index= cartList.indexOf(encontrar)
        encontrar.quantity=encontrar.quantity-1
        if(encontrar.quantity===0){
            cartList.splice(index,1)
            setCartList(cartList)
            getQuantity()
        }
        localStorage.setItem("carrito", JSON.stringify(cartList))
    }

    const removeProductFromCart=(e)=>{
        setCartList(cartList.filter((p)=> {return p.id !== e.id}))
        localStorage.setItem("carrito", JSON.stringify(cartList))
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clearCart, removeFromCart, removeProductFromCart, getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider