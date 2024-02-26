import React from 'react';
import './Navigation.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import  { useContext } from 'react';

// ...
const Navigation = () => {
  const[menu,setMenu]=useState("shop");
  const{getTotalCartItems}=useContext("Context");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>shopper</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to='/login'> <button>login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt=""/></Link> 
       <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navigation;