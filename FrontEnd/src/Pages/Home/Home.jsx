import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'


const Home = () => {

  const [Catagory, setCatagory] = useState ('All');

  return (
    <div>
        <Header/>
        <ExploreMenu Catagory = {Catagory} setCatagory = {setCatagory}/>
        <FoodDisplay Catagory = {Catagory} />
        <AppDownload/>
    </div>
  )
}

export default Home