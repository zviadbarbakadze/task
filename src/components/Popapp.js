import React from 'react'
import "../styles/popapp.css"
import taiguli from "../assets/Frame.jpg"
import { useNavigate } from 'react-router-dom';

export default function Popapp() {
    let navigate = useNavigate();
    function handleClick() {
      navigate('/')
    }
  return (
    <div className='pop-body'>
        <div className="pop-messgae-container">
            <img src={taiguli} alt="" />
            <h2 className='pop-text'>ჩანაწერი დამატებულია!</h2>
            <button className='move-list-button'>სიაში გადაყვანა</button>
            <button className='pop-mainpage-button' onClick={handleClick}>მთავარი</button>

        </div>
    </div>
  )
}
