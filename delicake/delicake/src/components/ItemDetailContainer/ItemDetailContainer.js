import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ProductosJson from '../../data/Products.json'
import ItemDetail from '../Itemdetail/ItemDetail';
const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const {id}=useParams()
    
    useEffect(()=>{
        const promise=new Promise((resolve)=>{
                resolve(id ? (ProductosJson.find(i=>i.id === parseInt(id))) : ProductosJson);
        });
        promise.then((data)=>{
            setProducto({...data})
            console.log(data)
        })
    },[id])
  return (
    
    <div>
      <ItemDetail item={producto}/>
    </div>
  )
}

export default ItemDetailContainer
