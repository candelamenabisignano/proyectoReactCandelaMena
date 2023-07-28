import { createContext, useState } from "react";
import json from "../../data/Products.json"
export const CartContext=createContext()

const CartContextProvider=({children})=>{
    const [cartList, setCartList]=useState(JSON.parse(localStorage.getItem("carrito"))||[]);

    localStorage.setItem("carrito",JSON.stringify(cartList))



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
    const removeFromCart=(e, carrito, cantidadAEliminar)=>{
        const encontrar= carrito.find((p)=> p.id === e.id)
        encontrar.quantity=encontrar.quantity-cantidadAEliminar
        const index= carrito.indexOf(encontrar)

        if(encontrar.quantity<=0){
            setCartList(carrito.splice(index,1))
            localStorage.setItem("carrito",JSON.stringify(carrito))
        }else if(cantidadAEliminar>encontrar.quantity){
            return console.log("no se puede")
        }

        setCartList(carrito)
        localStorage.setItem("carrito",JSON.stringify(carrito))
        getQuantity(carrito)
        console.log(carrito)
        
    }
    const removeProductFromCart=(e,carrito)=>{
            const encontrar=carrito.find((p)=>p.id===e.id)
            const index=carrito.indexOf(encontrar)
            setCartList(carrito.splice(index,1))
            localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    const getQuantity=(carrito)=>{
        let cantidades=carrito.reduce((acc, i)=>acc+i.quantity,0)
        return cantidades
    }


    return(
        <CartContext.Provider value={{cartList, addToCart, clearCart, removeFromCart,removeProductFromCart, getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider