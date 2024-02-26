import React from 'react'
import './Productdisplay.css'
import {  useContext,useState } from "react";
import start_icon from "../Assets/staricon.png";
import star_dull_icon from "../Assets/star_dull_icon.png"
import {Context} from '../Context/Context'
const Productdisplay = (props) => {
    const {product}=props;
    const{addTocart}=useContext(Context);
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-left">
            <img src={product.image} alt=""/>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            </div>
        <div className="productdisplay-img">
            <img className ='productdisplay-main-img'src={product.image} alt=""/>
        </div>
        </div>
        <div className="productdisplay-right">
            <h1>product.name</h1>
        <div className="productdisplay-right-star">
            <img src={start_icon} alt=""/>
            <img src={start_icon} alt=""/>
            <img src={start_icon} alt=""/>
            <img src={star_dull_icon} alt=""/>
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
             <div className='productdisplay-right-price-new' >${product.new_price}</div>  
        </div>
        <div className="productdisplay-right-description">
      A light ,usually kniited ,pullover shirt,close-fitting and
      a round necking and short sleeves,worn as a undershirt or outer
      garment.
        </div>
        <div className="productdisplay-right-size">
            <h1>select size</h1>
            <div className="">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XX1</div>
            </div>
        </div>
        <button onClick={()=>{addTocart(product.id)}}>Add to cart</button>
        <p className="productdisplay-right-category"><span>category:</span>women,t-shirt,crop-top</p>
        <p className="productdisplay-right-category"><span>tag:</span>Modern,latest</p>
    </div>
</div>
  )
}
export default Productdisplay;
