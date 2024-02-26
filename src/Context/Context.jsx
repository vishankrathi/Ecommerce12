import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import all_product from "./Box/Assets/all_product"
export const ShopContext=createContext(null);
const getDefaultCart=()=>{
    let Cart={};
    for(let index=0;index<all_product.length+1;index++){
        Cart[index]=0;
    }
    return Cart;
}
const ShopContextProvider=(props)=>{

    const [CartItems,setcartItems]=useState(getDefaultCart());
    const addToCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(CartItems);
    }
    const removefromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue={all_product,CartItems,addToCart,removefromCart};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider;
