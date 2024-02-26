import React,{useContext} from 'react'
import {ShopContext} from '../Context/Context';
import {useParams} from 'react-router-dom';
import Bread from '../Box/Breadcrums/Bread';
import Productdisplay from '../Box/Productdisplay/Productdisplay';
import Descriptionbox from '../Box/Descriptionbox/Descriptionbox';
import Relatedproducts from '../Box/Relatedproducts/Relatedproduct';
const Product = () => {
  const {all_products}=useContext(ShopContext);
  const{productId}=useParams();
  const product=all_products.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Bread product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproducts/>
    </div>
  )
}
export default Product;
