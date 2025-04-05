import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext);
  
  return (
    <form className='Place-Order'>
        <div className="Place-Order-Left">
          <p className="Title">Delivery Information</p>
          <div className="Multi-Fields">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email'/>
          <input type="text" placeholder='Street'/>
          <div className="Multi-Fields">
            <input type="text" placeholder='Home No'/>
            <input type="text" placeholder='Street'/>
          </div>
          <div className="Multi-Fields">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
          </div>
          <div className="Multi-Fields">
            <input type="text" placeholder='Mobile No'/>
            <input type="text" placeholder='Phone No'/>
          </div>
        </div>
        <div className="Place-Order-Right">
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
          <button >PROCEED TO PAYMENT</button>
        </div>
    </form>
  )
}

export default PlaceOrder