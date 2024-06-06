import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png' 
import { useNavigate } from 'react-router-dom'
const CartItems = () => {
    const {getTotalCartAmount,all_product, cartItems,removeFromCart} = useContext(ShopContext)
    const navigate = useNavigate()
  return (
    <div className='cartItems'>
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return  <div>
            <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
        }
        return null
       })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>{getTotalCartAmount()}đ</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping</p>
                    <p>{getTotalCartAmount()===0?0:5000}đ</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>{getTotalCartAmount()===0?0:getTotalCartAmount()+5000}đ</h3>
                </div>
            </div>
            <button onClick={()=>navigate('/order')}>PROCESS TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='ma giam gia'/>
                <button>Submit</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems