import { createContext, useState } from "react";
import json from "../../data/Products.json"
export const CartContext=createContext()

const CartContextProvider=({children})=>{
    const [cartList, setCartList]=useState(JSON.parse(localStorage.getItem("carrito"))||[]);

    localStorage.setItem("carrito",JSON.stringify(cartList))

    const getQuantity=()=>{
        const cantidades=cartList.reduce((acc, i)=>acc=acc+i.quantity,0)
        return cantidades
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
        localStorage.setItem("carrito",JSON.stringify(cartList))
        getQuantity(cartList)
    }
    const clearCart=()=>{
        setCartList([])
    }
    const removeFromCart=(e, cantidadAEliminar)=>{
        const encontrar= cartList.find((p)=> p.id === e.id)
        encontrar.quantity=encontrar.quantity-cantidadAEliminar
        const index= cartList.indexOf(encontrar)

        if(encontrar.quantity<=0){
            setCartList(cartList.splice(index,1))
            localStorage.setItem("carrito",JSON.stringify(cartList))
        }else if(cantidadAEliminar>encontrar.quantity){
            return console.log("no se puede")
        }

        setCartList(cartList)
        localStorage.setItem("carrito",JSON.stringify(cartList))
        getQuantity()
        console.log(cartList)
        
    }

    const removeProductFromCart=(e)=>{
        setCartList(cartList.filter((p)=> {return p.id !== e.id}))
    }


    return(
        <CartContext.Provider value={{cartList, addToCart, clearCart, removeFromCart, removeProductFromCart, getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider