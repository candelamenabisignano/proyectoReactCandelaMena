import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader.js/Loader';

const ItemListContainer = () => {
  const[loader, setLoader]=useState(false)

  
    const [productos, setProductos]=useState([])

    const {id}=useParams()
    
    const getData= async (categoria)=>{
      setLoader(true)
      const querydb=getFirestore()
      const queryCollection= categoria ? query(collection(querydb, "products"), where("category", "==", categoria)) : collection(querydb, "products")
      await getDocs(queryCollection)
      .then((resultado)=>setProductos(resultado.docs.map(p=>({id: p.id, ...p.data()}))))
      setLoader(false)
    }
    
    useEffect(()=>{
      getData(id)

    },[id])
    if(loader){
      return(
        <Loader/>
      )
    }
  return (
    <div>
      <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer
