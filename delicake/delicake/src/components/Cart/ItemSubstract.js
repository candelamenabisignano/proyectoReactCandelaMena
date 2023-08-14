import { useContext } from "react"
import React from 'react'
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"
const ItemSubstract = ({item}) => {
    const{removeFromCart,removeProductFromCart}=useContext(CartContext)


  return (
    <div className="flex gap-[20px]">
        <div className="flex gap-4">
            <button onClick={()=> {removeFromCart(item,Swal.fire({toast:true, position:'top-right', title:"producto eliminado", icon:'success', timer:1000, timerProgressBar:true, showConfirmButton:false}) )}} className="bg-white p-[5px] rounded-sm text-gray-400">eliminar</button>
            <button onClick={()=> {removeProductFromCart(item, Swal.fire({toast:true, position:'top-right', title:"producto eliminado", icon:'success', timer:1000, timerProgressBar:true, showConfirmButton:false}))}} className="bg-white p-[5px] rounded-sm text-gray-400">limpiar</button>
        </div>
    </div>
  )
}

export default ItemSubstract
