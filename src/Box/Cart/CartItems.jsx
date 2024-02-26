import React, { useContext } from 'react'
import './CartItems.css'
import {Context} from '../../Context/Context'
const CartItems = () => {
    const {all_product,cartItems,removefromCart}=useContext{Context}
  return (
    <div className='CartItems'>
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
            <p>remove</p>
        </div>
        <hr />
        <div>
            <div className="">
                <img src="" alt="" className="carticon-product-icon" />
                <p></p>
                <p></p>
                <button className="cartitems-quantity"></button>
                <p></p>
                <img src={remove_icon} onClick={()=>{removefromCart()}} alt="" />

            </div>
            <hr />
            {all_product.map((e)=>{
                if{cartItems[e.id]>0}
                {
                    return <div>
                        <div className="cartItems-format  cartItems-format-main">
                            <img src={e.image} site="" classname='carticon-product'>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className="cartItems-remove-icon"src={remove_icon} onClick={()=>{removefromCart()}}/>
                            </img>
                            </div>
                            <hr />
                            </div>

                }
                return null;
            })}
            <div className="cart-icons">
                <div classname="cartitems-total">
                    <h1>cart totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                            <div className="cartitems-total-item">
                                <p>shipping free</p>
                                <p>free</p>
                            </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>total</h3>
                            <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button>proceed to checkout</button>
                </div>
                <div className='cartitems-promocols'>
                    <p>if you have  a promo code,enter it here </p>
                    <div className="cartitems-promobox">
                        <input type="text" />
                        <button>submit</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
  )}
export default CartItems;
