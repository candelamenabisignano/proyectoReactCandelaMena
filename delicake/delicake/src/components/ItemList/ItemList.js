import React from 'react';
import Item from '../Item/Item';
const ItemList = ({products}) => {
  return (
    <div className='grid grid-cols-4 m-[30px]'>
        {
         products.map(p=>
            <Item key={p.id} name={p.name} price={p.price} id={p.id} img={p.img} product={p} />          )
        }
    </div>
  )
}

export default ItemList
