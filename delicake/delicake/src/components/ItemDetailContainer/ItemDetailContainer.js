import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc}from 'firebase/firestore'
import ItemDetail from '../Itemdetail/ItemDetail';
const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const {id}=useParams()
    
    const getData=(id)=>{
      const querydb= getFirestore()
      const queryDoc=doc(querydb, "products", id)
      getDoc(queryDoc)
      .then((respuesta)=> setProducto(({id: respuesta.id,...respuesta.data()})))
    }

    useEffect(()=>{
      getData(id)
    },[id])
  return (
    
    <div>
      <ItemDetail item={producto}/>
    </div>
  )
}

export default ItemDetailContainer
