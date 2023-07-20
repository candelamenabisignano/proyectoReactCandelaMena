import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import CartWidget from '../Cart/CartWidget'
const Navbar = () => {
  return (
    <div className='sticky top-0 z-[1]'>
      <header className=' flex justify-between items-center bg-pink-100'>
        <Link to={"/"}><img src={Logo} alt='logo' className="h-[130px]"/></Link>
        <nav className='pr-[30px]'>
            <ul className='flex gap-[20px]'>
                <li><Link to={"/category/cakes"} className="text-white no-underline text-[18px]">tortas</Link></li>
                <li><Link to={"/category/muffins"} className="text-white no-underline text-[18px]">muffins</Link></li>
                <li><Link to={"/category/drinks"} className="text-white no-underline text-[18px]">bebidas</Link></li>
                <li><Link to={"/category/macarons"} className="text-white no-underline text-[18px]">macarons</Link></li>
                <li><Link to={"/cart"}><CartWidget/></Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
