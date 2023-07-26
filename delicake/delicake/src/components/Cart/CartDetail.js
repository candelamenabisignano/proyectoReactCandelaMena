import { useContext } from "react"
import { CartContext } from "../context/CartContext"



const CartDetail = () => {
    const {cartList, paintCart} = useContext(CartContext)
  return (
    <div>
      <h1>mi carrito</h1>
      <section >
      <p>{(cartList.length) > 0? paintCart(cartList) : "no hay nada" }</p>
      </section>
    </div>
  )
}

export default CartDetail
