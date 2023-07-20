import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductosJson from '../../data/Products.json';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [productos, setProductos]=useState([])
    const {id}=useParams()
    
    useEffect(()=>{
        const promise=new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(id ? (ProductosJson.filter((i)=>i.category===id)) : ProductosJson)
            },1000)
        });
        promise.then((data)=>{
            setProductos(data)
            console.log(data)
        })
    },[id])
  return (
    <div>
      <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer
