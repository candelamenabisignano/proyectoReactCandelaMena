import { useCallback, useContext, useState } from "react"
import { CartContext } from "../context/CartContext"



const CartDetail = () => {
    const {cartList, removeFromCart,removeProductFromCart, getQuantity} = useContext(CartContext)
    const [count, setCount]=useState(0)

    const add= useCallback(()=>{
        setCount(count+1)
    },[count])
    const substract= useCallback(()=>{
        const condicion= count === 1 ? count : setCount(count-1)
        return condicion
    },[count])
  return (
    <div>
      <h1>mi carrito</h1>
      <section className="flex justify-center items-center">
        <ul>
          {
                  (cartList.length) > 0? cartList.map(p=>(
                    <li key={p.id} className="grid grid-rows-1">

                    <div className=" flex items-center bg-red-200">
                      <div ><img src={p.img} alt={p.name} className="h-[150px]"/></div>
                      <div className="flex gap-5">
                        <h4>{p.name}</h4>
                        <p>{p.quantity}</p>

                        <div className="flex">
                          <button onClick={()=>add()}>+</button>
                          <p>{count}</p>
                          <button onClick={()=>substract()}>-</button>
                          </div>

                        <button onClick={()=>{removeFromCart(p, cartList, count, setCount(0), getQuantity(cartList))}} key={p.id}>eliminar</button>
                        <button onClick={()=>{removeProductFromCart(p,cartList)}}>limpiar</button>
                      </div>
                    </div>

                    </li>
                  )) : <p>no hay nada</p> 
          }
        </ul>
      </section>
    </div>
  )
}

export default CartDetail
