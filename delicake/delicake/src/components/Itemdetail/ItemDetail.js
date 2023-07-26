
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount.js/ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div className='flex justify-center mt-[20px] mb-[40px]'>
    <div className='flex justify-around items-center pl-[50px] pr-[50px] rounded-[10px] border-pink-200 border-[3px] h-[500px] w-[1100px] bg-white'>
        <Link to={"/"} className='p-[10px_20px] bg-pink-200 relative bottom-[210px] right-7 rounded-[5px] text-white'>volver</Link>
        <div className='mt-[20px] w-[950px]'><img src={item.img} alt={item.name} className='h-[400px] rounded-[10px]'/></div>
      <div className=' flex flex-col text-left justify-between pl-[20px]'>
        <h1 className='text-[28px] font-bold'>{item.name}</h1>
        <h4 className='text-gray-300'>{item.category}</h4>
        <h3>{item.description}</h3>
        <h2 className='text-[20px] pt-[10px]'>${item.price}</h2>
        <ItemCount item={item}/>
      </div>
    </div>
    </div>
  )
}

export default ItemDetail
