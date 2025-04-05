import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="Footer-Content">
            <div className="Footer-Content-Left">
                <img src={assets.logo} alt="" />
                <p>
                Smart Kitchen and Assets Management System, let's explore common anti-patterns and how to fix them with better design principles. Here are some key areas of inspiration for development
                </p>
                <div className="Footer-Social-Icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="Footer-Content-Center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delevary</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="Footer-Content-Right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+94 75 886 2460</li>
                    <li>likanth@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='Footer-Copyright'>
            Copyright 2024  Tomota.com - All right reserved.
        </p>
    </div>
  )
}

export default Footer