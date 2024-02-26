import React from 'react';
import './Css/Shopcategory.css'
import Items from '../Box/Items/Items';
import  { useContext } from 'react';
import dropdown_icon from './Box/Assets/dropdown_icon.png';
import {ShopContext} from '../Context/Context'
const Shopcategory = (props) => {
 const {all_product}=useContext(ShopContext);
  return (
    <div className="Shop-category">
      <img className='shopCategory-banner' src={props.banner} alt=""/>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
      <div className="shopcategory-sort">
        sort by<img src={dropdown_icon} alt="" />
        </div>
        </div>
        <div className="shop-category">
          {all_product.map((item,i)=>{
              if(props.Category===item.Category){
                return<Items key={i} id={Items.id} name={Items.name} images={Items.image} new_price={Items.new_price} old_price={Items.old_price}/>
              }
              else{
                   return null;
              }
            }
          )}
        </div>
        <div className="shopCategory-loadmore">
         Explore more
        </div>
        </div>

  )
}
export default Shopcategory;
