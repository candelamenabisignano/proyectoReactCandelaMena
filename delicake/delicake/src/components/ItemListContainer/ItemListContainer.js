import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [productos, setProductos]=useState([])

    const {id}=useParams()

    const getData= async (categoria)=>{

      const querydb=getFirestore()
      const queryCollection= categoria ? query(collection(querydb, "products"), where("category", "==", categoria)) : collection(querydb, "products")
      await getDocs(queryCollection)
      .then((resultado)=>setProductos(resultado.docs.map(p=>({id: p.id, ...p.data()}))))
    }
    
    useEffect(()=>{
      getData(id)

    },[id])
  return (
    <div>
      <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer
