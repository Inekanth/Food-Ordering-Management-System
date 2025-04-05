import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({Catagory}) => {

    const {food_list} = useContext (StoreContext)
  return (

    <div className='FoodDisplay' id='foodDisplay'>
        <h2>Best Dishes of this year</h2>
        <div className="Food-Display-List">
            {food_list.map((item, index) => {
              {console.log (Catagory, item.Catagory);}
              if (Catagory==="All" || Catagory===item.Catagory) {
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} />
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay