import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({product}) => {
  return (
    <div>
      <div className="relative w-[280px] h-[400px] m-[20px] rounded-[10px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:scale-110 hover:ease-out duration-300">
  <div className='absolute top-0 left-0 w-full h-250px overflow-hidden rounded-[10px] '>
    <img src={product.img} alt={product.name} className='w-full h-full object-cover '/>
  </div>
  <div className='absolute bottom-0 left-0 w-full p-[20px] bg-white text-left '>
    <p className="text-[24px] font-bold mb-[10px] text-pink-200">{product.name}</p>
    <p className='font-[16px] leading-[1.5] mb-[20px] text-gray-400'>${product.price}</p>
    <Link to={`/item/${product.id}`}  className='inline-block p-[10px_20px] relative left-[150px] bg-pink-200 text-white no-underline rounded-[5px] hover:ease-out duration-300 hover:scale-110 hover:text-pink-200 hover:bg-transparent hover:border-pink-200 hover:border-[1px]'>detalles</Link>
  </div>
</div>
    </div>
  )
}

export default Item
