import React from 'react'
import { useNavigate } from 'react-router';
import logo from "../assets/LOGO-1.png"
import "../styles/home.css"
export default function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/navigation')
  }
  return (
    <div className='home-container'>
        <img src={logo} alt="logo" className='logo'/>
        <div className="home-image"></div>
        <button className='home-button' onClick={handleClick}>ჩანაწერის დამატება</button>
        <button className='home-button'>ჩანაწერების სია</button>
    </div>
  )
}
