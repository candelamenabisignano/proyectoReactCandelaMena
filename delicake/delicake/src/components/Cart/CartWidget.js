
import { useContext} from 'react';
import Cart from '../../assets/shopping-cart.png';
import { CartContext } from '../context/CartContext';
const CartWidget = () => {
  const {getQuantity}=useContext(CartContext)

  return (
    <div>
    <img src={Cart} alt='carrito' className='h-[30px]'/>
    <span className='bg-pink-300 rounded-full h-[20px] w-[20px] text-white absolute '>{getQuantity()}</span>
    </div>
  )
}

export default CartWidget
