import React from 'react'
import './Bread.css'
import arrow_icon from '../Assets/braedcrum.png'
const Bread = (props) => {
    const{product}=props;
  return (
    <div className="bread">
        Home<img src={arrow_icon} alt="" />shop<img src={arrrow_icon} alt=""/>{product.category}<img src=""/>{product.name}
    </div>
  )
}
export default Bread;