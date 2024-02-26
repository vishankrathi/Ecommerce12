import React from 'react'
import './Relatedproduct.css'
import Items from '../Items/Items'
const Relatedproduct = () => {
  return (
    <div className='relatedproducts'>
    <h1>telated products</h1>
    <hr/>
    <div className="relatedproducts-item">
        {
            data_product.map((item,i)=>{
                return <Items key={i} id={Items.id} name={Items.name} Image={Items.image} new_price={Items.new_prices} old_price={Items.old_price}/>
            })
        }
    </div>
    </div>
  )
}
export default Relatedproduct;