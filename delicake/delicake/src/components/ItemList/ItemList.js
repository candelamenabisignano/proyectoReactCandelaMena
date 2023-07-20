import React from 'react';
import Item from '../Item/Item';
const ItemList = ({item}) => {
  return (
    <div className='grid grid-cols-4 m-[30px]'>
        {
         item.map(i=>
            <Item key={i.id}name={i.name} price={i.price} id={i.id} img={i.img} product={i} />          )
        }
    </div>
  )
}

export default ItemList
