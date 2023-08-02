import { useContext } from "react"
import React from 'react'
import { CartContext } from "../context/CartContext"
const ItemSubstract = ({item}) => {
    const{removeFromCart, getQuantity, removeProductFromCart}=useContext(CartContext)


  return (
    <div className="flex gap-[20px]">
        <div className="flex gap-4">
            <button onClick={()=> {removeFromCart(item); console.log(getQuantity())}}>eliminar</button>
            <button onClick={()=> removeProductFromCart(item, getQuantity())}>limpiar</button>
        </div>
    </div>
  )
}

export default ItemSubstract
