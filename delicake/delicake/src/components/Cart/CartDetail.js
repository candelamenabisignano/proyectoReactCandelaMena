import { useContext} from "react"
import { CartContext } from "../context/CartContext"
import ItemSubstract from "./ItemSubstract"



const CartDetail = () => {
    const {cartList} = useContext(CartContext)

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

                        <ItemSubstract item={p}/>
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
