
import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link, useParams} from 'react-router-dom';
import swal from 'sweetalert';
import "../../App.css"


const ItemCount = ({item}) => {
  const {addToCart}=useContext(CartContext)
  const {id}= useParams()
    const [count, setCount]= useState(0)
    document.querySelectorAll("button").forEach((button)=>{
        button.addEventListener("click",(b)=>{
            b.preventDefault();
            if((button.innerHTML === "-") && (count>0)){
                setCount(count-1)
            }else if(button.innerHTML === "+"){
                setCount(count + 1)
            }else if ((button.innerHTML === "-") && (count===0)){
                return count
            }
        })
    })
  return (
    <div>
    <div className='flex gap-7 pt-[30px] pb-[30px]'>
      <button className='bg-pink-200 p-[3px_5px] text-white rounded-[2px] text-[15px]'>+</button>
      <p className='text-[20px] text-gray-500'>{count}</p>
      <button className='bg-pink-200 p-[3px_5px] text-white rounded-[2px] text-[15px]'>-</button>
    </div>
    <Link to={`${count >0 ? "/" : `/item/${id}`} `} onClick={()=>{count > 0 ? addToCart(item, count) : swal({
      title:"error",text:"ingrese un numero valido",icon:"error",button:"entendido"})}} className='p-[7px_30px] ease-out bg-pink-200 text-white no-underline rounded-[5px] hover:ease-out duration-500 hover:text-pink-200 hover:bg-transparent hover:border-pink-200 hover:border-[1px] transition-colors text-[17px]'>comprar</Link>
    </div>
    
  )
}

export default ItemCount
