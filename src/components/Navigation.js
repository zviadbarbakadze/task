import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import group from "../assets/Group.svg"
import logo from  "../assets/LOGO-2.png"


import { useNavigate } from 'react-router';
import "../styles/navigation.css"

export default function Navigation() {
    let navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }
  return (
    <div className='navigation'>
        <img src={group} alt="" onClick={handleClick} className="back-arrow"/>
      
        <div className="div-headers">
             <NavLink to="employee" className='navlink'>თანამშრომლის ინფო</NavLink>
             <NavLink to="laptop" className='navlink'>ლეპტოპის მახასიათებლები</NavLink>
       
        </div>
     
       <Outlet/>
       <div className="image-div">
          <img src={logo} alt="" className='logo-2'/>
        </div>
    </div>
  )
}
