import { useContext } from "react"
import React from 'react'
import { CartContext } from "../context/CartContext"
const ItemSubstract = ({item}) => {
    const{removeFromCart,removeProductFromCart}=useContext(CartContext)


  return (
    <div className="flex gap-[20px]">
        <div className="flex gap-4">
            <button onClick={()=> {removeFromCart(item)}} className="bg-white p-[5px] rounded-sm text-gray-400">eliminar</button>
            <button onClick={()=> {removeProductFromCart(item)}} className="bg-white p-[5px] rounded-sm text-gray-400">limpiar</button>
        </div>
    </div>
  )
}

export default ItemSubstract
