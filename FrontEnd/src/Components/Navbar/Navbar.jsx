import React, { useContext, useState } from 'react'
import './Navbare.css'
import {assets} from '../../assets/assets.js'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext.jsx';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState ("Home");

    const {getTotalCartAmount} = useContext (StoreContext);

  return (
    <div className='Navbar'>
       <Link to='/'><img src={assets.logo} alt="" className="logo" /> </Link>
       <ul className="Navbar-Menu">
        <Link to='/' onClick={()=> setMenu ("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#Explore-Menu' onClick={()=> setMenu ("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#App-Download' onClick={()=> setMenu ("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#Footer' onClick={()=> setMenu ("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact Us</a>
       </ul>

       <div className="Navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="Navbar-search-icon">
           <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link>
            <div className={getTotalCartAmount()===0?"":"dot"}>

            </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>SignIn</button>
       </div>
    </div>
  )
}

export default Navbar