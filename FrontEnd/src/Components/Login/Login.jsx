import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Login");

  return (
    <div className='Login-Popup'>
       <form  className="Login-Popup-Container">
        <div className="Login-Title">
          <h2>{currState}</h2>
          <img onClick={() =>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="Login-Inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Name'/>}
          <input type="emil" placeholder='Email'/>
          <input type="Password" placeholder='Password'/>
        </div>
        <div>
          <button>{currState==="Sign-Up"?"Create accound":"Login"}</button>
        </div>
        <div className="Login-Conditions">
          <input type="checkbox" required/>
          <p>By continueing, I agree to the terms and conditions.</p>
        </div>
        {currState==="Login"?<p>Create a new account? <span onClick={() => setCurrState("Sign-Up")}>Click here</span></p>: <p>Already have account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
       </form>
    </div>
  )
}

export default Login