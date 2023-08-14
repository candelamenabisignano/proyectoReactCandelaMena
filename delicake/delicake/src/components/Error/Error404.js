import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[100px]'>
      <h1 className='text-[50px]'>error 404</h1>
      <h2 className='text-[20px] pb-[30px]'>pagina no encontrada</h2>
      <Link to={"/"} className='p-[7px_30px] ease-out bg-pink-200 text-white no-underline rounded-[5px] hover:ease-out duration-500 hover:text-pink-200 hover:bg-transparent hover:border-pink-200 hover:border-[1px] transition-colors text-[17px]'>inicio</Link>
    </div>
  )
}

export default Error404
