import { createContext, useState } from "react";
export const CartContext=createContext()

const CartContextProvider=({children})=>{
    const [cartList, setCartList]=useState(JSON.parse(localStorage.getItem("carrito"))||[]);

    localStorage.setItem("carrito",JSON.stringify(cartList))

    const getQuantity=()=>{
        const cantidad=cartList.reduce((acc,i)=>acc+i.quantity,0)
        return cantidad
    }

    const cartReduce=()=>{
        const total= cartList.reduce((acc, item)=> acc+ item.quantity*item.price,0)
        return total
    }

    const IsInCart=(id)=>cartList.find((product) => product.id === id) ? true : false;
    const addToCart=(producto, cantidadNueva)=>{
        if(IsInCart(producto.id)){
            setCartList (cartList.map(product =>{
                return product.id === producto.id ?{...product,quantity:product.quantity + cantidadNueva} : product
              }))
        }else{
            setCartList ([...cartList,{...producto,quantity:cantidadNueva}])
        }
        localStorage.setItem("carrito",JSON.stringify(cartList))
    }
    const clearCart=()=>{
        setCartList([])
    }

    const removeFromCart = (item) => {
        const updatedCartList = cartList.map((product) => {
            if (product.id === item.id) {
              
                if (product.quantity > 1) {
                    return { ...product, quantity: product.quantity - 1 };
                } else {
                    return null;
                }
            } else {
                return product;
            }
        }).filter(Boolean); 
    
        setCartList(updatedCartList);
    };

    const removeProductFromCart=(e)=>{
        setCartList(cartList.filter((p)=> {return p.id !== e.id}))
        localStorage.setItem("carrito", JSON.stringify(cartList))
    }

    return(
        <CartContext.Provider value={{setCartList,cartList, cartReduce, addToCart, clearCart, removeFromCart, removeProductFromCart, getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider
