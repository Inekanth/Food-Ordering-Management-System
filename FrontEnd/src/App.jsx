import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeholder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'

const App = () => {

  const [showLogin,setShowLogin] = useState (false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Cart' element = {<Cart/>}/>
        <Route path='/placeOrder' element = {<placeOrder/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App