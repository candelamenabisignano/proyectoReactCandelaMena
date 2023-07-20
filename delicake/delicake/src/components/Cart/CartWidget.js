import React from 'react'
import Cart from '../../assets/shopping-cart.png'
const CartWidget = () => {
  return (
    <div>
    <img src={Cart} alt='carrito' className='h-[30px]'/>
    <span className='bg-pink-300 rounded-full h-[20px] w-[20px] text-white absolute '>0</span>
    </div>
  )
}

export default CartWidget
