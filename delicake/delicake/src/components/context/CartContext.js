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
    console.log(cartList)
    const clearCart=()=>{
        setCartList([])
    }
    const removeFromCart=()=>{

    }

    const getQuantity=(carrito)=>{
        let cantidades=carrito.reduce((i,acc)=>acc=acc+i.quantity,0)
        console.log(cantidades)
    }

    const paintCart=(cartList)=>{
        cartList.map((p)=>{
            return(
                <div key={p.id}><img src={p.img} alt={p.name}/> <p>{p.name}</p></div>
            )
        })
    }
    return(
        <CartContext.Provider value={{cartList, addToCart, clearCart, removeFromCart, getQuantity, paintCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider