
import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCount = ({item}) => {
  const {addToCart}=useContext(CartContext)
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
    <div className='flex gap-7 pt-[30px] pb-[30px]'>
      <button className='bg-pink-200 p-[3px_5px] text-white rounded-[2px] text-[15px]'>+</button>
      <p className='text-[20px] text-gray-500'>{count}</p>
      <button className='bg-pink-200 p-[3px_5px] text-white rounded-[2px] text-[15px]'>-</button>
      <div className='pt-[30px]'>
      <button onClick={()=> addToCart(item, count)} >comprar</button>
      </div>
    </div>
  )
}

export default ItemCount
