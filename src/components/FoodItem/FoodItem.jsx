import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

export default function FoodItem({id, name, description,image, price}) {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='container food-item'>
        <div className="food-item-img-container">
            <img src={image} alt=""  className="food-item-image" />
            {!cartItems[id]
                ?<i className='add fa fa-plus-circle' onClick={()=>addToCart(id)}></i>
                :<div className="food-item-counter">
                    <i onClick={()=>removeFromCart(id)} className='fa fa-minus-circle text-danger'></i>
                    <p>{cartItems[id]}</p>
                    <i onClick={()=>addToCart(id)} className='fa fa-plus-circle text-success'></i>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <div className="stars">
                <i className='star fa fa-star'></i>
                <i className='star fa fa-star'></i>
                <i className='star fa fa-star'></i>
                <i className='star fa fa-star'></i>
                <i className='fa fa-star'></i>
                </div>
            </div>
            <p className="food-item-description">{description}</p>
            <p className='food-item-price'>{price} MGA </p>
        </div>
    </div>
  )
}
