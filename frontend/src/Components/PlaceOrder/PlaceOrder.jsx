import React, { useContext, useState } from 'react'
import "./PlaceOrder.css"
import {ShopContext} from '../../Context/ShopContext'
const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(ShopContext)
                  // Đang hoàn thiện
  return (
    <form className='place-order'>
      <div className="place-order-left">
        
        <p className="ordertitle">Ship Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Street Address'/>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='Country' />
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
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
            <button>PROCESS TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder