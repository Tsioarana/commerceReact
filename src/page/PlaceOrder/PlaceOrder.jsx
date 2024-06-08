import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

export default function PlaceOrder() {
  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form action="" className='place-order container'>
      <div className="plave-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input type="text" placeholder='city' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount() } MGA</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{getTotalCartAmount()===0?0:2000} MGA</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2000} MGA</b>
            </div>
          </div>
          <button>PROCEED TO PAYEMENT</button>
        </div>
      </div>
    </form>
  )
}
