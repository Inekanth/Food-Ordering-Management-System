import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { food_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems, foodItems, removeFromCart, getTotalCartAmount} = useContext(StoreContext)

  const navigate = useNavigate ();


  return (
    <div className='Cart'>
        <div className="Cart-items">
          <div className="Cart-Items-Title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,index)=>{
            if (cartItems[item._id]>0){
              return(
                <div>
                  <div className="Cart-Items-Title Cart-Items-Item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart (item._id)} className='Closs'>X</p>
                </div>
                <hr />
                </div> 
              )
            }
          })}
        </div>
        <div className="Cart-Bottom">
          <div className="Cart-Total">
            <h2>Cart Total</h2>
            <div>
              <div className="Cart-Total-Details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="Cart-Total-Details">
                <p>Delivery fee</p>
                <p>{50}</p>
              </div>
              <hr />
              <div className="Cart-Total-Details">
                <p>Total</p>
                <b>${getTotalCartAmount()+50}</b>
              </div>
            </div>
          </div>
          <button onClick={() => navigate('/placeOrder')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="Promo-Code">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="Promo-Code-Input">
              <input type="text" placeholder='Promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart