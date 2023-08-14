import { useContext} from "react"
import { CartContext } from "../context/CartContext"
import ItemSubstract from "./ItemSubstract"
import swal from "sweetalert"
import { Link} from "react-router-dom"
import { Toast } from "bootstrap"
import Swal from "sweetalert2"



const CartDetail = () => {
    const {cartList, cartReduce, clearCart} = useContext(CartContext)


  return (
    <div>
      <h1 className="flex justify-center text-[40px] mt-[15px] mb-[35px]">mi carrito</h1>
      <section className="flex justify-center items-center mb-[40px]">
        <div className="h-[400px] w-[1000px] border-[3px] border-pink-200 overflow-x-hidden overflow-y-auto p-[50px] rounded-md ">
        <ul className="grid grid-rows-1 gap-4 ">
          {
                  (cartList.length) > 0? cartList.map(p=>(
                    <li key={p.id}>

                    <div className=" flex items-center bg-pink-100 rounded-md">
                      <div className="pr-[30px]"><img src={p.img} alt={p.name} className="h-[150px] rounded-l-md"/></div>
                      <div className="flex gap-5">
                        <h4 className="text-gray-400 font-semibold">{p.name}</h4>
                        <p className="text-gray-400">{p.quantity}</p>

                        <ItemSubstract item={p}/>
                      </div>
                    </div>

                    </li>
                  )) : <h2 className="flex justify-center text-[25px] text-gray-400">upss! tu carrito esta vacio</h2> 
          }
        </ul>
        </div>
      </section>

      <section className="">
        <div className="flex justify-center"><h2 className="text-[25px]">total: ${cartReduce()}</h2></div>
        <div className="m-[40px] gap-[40px] flex justify-center">
        <button className='p-[7px_30px] ease-out bg-pink-200 text-white no-underline rounded-[5px] hover:ease-out duration-500 hover:text-pink-200 hover:bg-transparent hover:border-pink-200 hover:border-[1px] transition-colors text-[20px]' onClick={()=> cartList <1 ? Swal.fire({toast:true,title:"su carrito ya se encuentra vacio",icon:"question", timer:1000, position:"top-right", showConfirmButton:false, timerProgressBar:true}): Swal.fire({title:"¿estas seguro que quieres borrar todo tu carrito?", icon:"warning", showCancelButton:true, showConfirmButton:true}).then((willDelete)=>{
          if(willDelete.isConfirmed){
            Swal.fire({title:"se ha limpiado el carrito con exito", icon:"success", timer:1000, showConfirmButton:false})
            clearCart()
          }else{
            Swal.fire({title:"se ha cancelado el proceso",icon:"error", showConfirmButton:false, footer:"", timer:1000})
          }
        })}>limpiar carrito</button>
        <Link to={cartList <1 ? "/cart" : "/checkout"} className='p-[7px_30px] ease-out bg-pink-200 text-white no-underline rounded-[5px] hover:ease-out duration-500 hover:text-pink-200 hover:bg-transparent hover:border-pink-200 hover:border-[1px] transition-colors text-[20px]' onClick={()=> cartList < 1 ? Swal.fire({title:"ups!no tienes productos en tu carrito", icon:"error", confirmButtonColor:"pink"}) : true}>checkout</Link>
        </div>
      </section>
    </div>
  )
}

export default CartDetail
