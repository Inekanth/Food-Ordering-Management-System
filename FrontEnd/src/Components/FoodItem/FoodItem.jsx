import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets.js'
import { StoreContext } from '../../Context/StoreContext.jsx'

const FoodItem = ({id,name, price, description, image}) => {


  const {cartItems, addToCart, removeFromCart} = useContext (StoreContext);

  return (
    <div className='Food-Item'>
      <div className="Food-Item-Img-Container">
        <img src={image} alt="" className="Food-Item-Img" />
        {!cartItems[id]
          ?<img className="Add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
          :<div className='Food-Item-Counter' >
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />  
          </div>
        }
      </div>
      <div className="Food-Item-Info">
        <div className="Food-Item-Rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="Food-Item-Desc">{description}</p>
        <p className="Food-Item-Price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem