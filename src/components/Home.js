import React from 'react'

import logo from "../assets/LOGO-1.png"
import "../styles/home.css"
export default function Home() {
  return (
    <div className='home-container'>
        <img src={logo} alt="logo" className='logo'/>
        <div className="home-image"></div>
        <button className='home-button'>ჩანაწერის დამატება</button>
        <button className='home-button'>ჩანაწერების სია</button>
    </div>
  )
}
