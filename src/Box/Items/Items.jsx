import React from 'react'
import './Items.css'
import {Link} from 'react-router-dom'
const Items = (props) => {
  return (
    <div className='Item'>
    <Link to={'/product/${props.id}'}><img onClick={window.scrollTo(0,0)}/></Link>
    <p>{props.name}</p>
        <div className="Item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="Item-price-old">
                ${props.old_price}
        </div>
    </div>
  </div>
  )}
export default Items;
