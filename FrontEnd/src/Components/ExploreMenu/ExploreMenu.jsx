import React from 'react'
import './ExploreMenu.css'
import { assets, menu_list } from '../../assets/assets.js'
import FoodDisplay from '../FoodDisplay/FoodDisplay.jsx'

const ExploreMenu = ({Catagory, setCatagory}) => {
  return (
    <div className='Explore-Menu' id='Explore-Menu'>
        <h2>Explore Our Menu</h2>
        <p className="Explore-Menu-Text">Café UFO Ella offers a diverse menu with options for breakfast, lunch, and dinner. They are known for their delicious grilled mutton shoulder, which is not always on the menu but can be prepared upon request. They have a vegan menu and cater to vegetarians. They also serve coffee, desserts, and alcoholic beverages like beer and wine.</p>
        <div className="Explore-Menu-List">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=> setCatagory  (prev => prev===item.menu_name?"All":item.menu_name)} key={index} className="Explore-Menu-List-Item">
                        <img className={Catagory===item.menu_name? "Active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu