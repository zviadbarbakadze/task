import React, { useEffect, useState } from 'react'
import "../styles/employee.css"
import { useNavigate } from 'react-router';

import axios from "axios"
import{useFormik} from "formik"
import * as Yup from "yup"



export default function Employee() {
  const[team,setTeam]=useState([])
  const [position,setPosition]=useState([])
  const formik=useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      team:"",
      position:"",
      email:"",
      phone:""
      
     
    
 
     
    },
    validationSchema:Yup.object({
      firstName:Yup.string().min(2)
      .matches(/^[\u10A0-\u10FF]+$/).required(),
      lastName:Yup.string().min(2)
      .matches(/^[\u10A0-\u10FF]+$/).required(),
      team:Yup.string().required(),
      position:Yup.string().required(),
      email:Yup.string().email().matches("@redberry.ge").required(),
      phone:Yup.string().matches(/\+\S*9\S*9\S*5\S*5\S*[976514]\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*/).max(13).required()
    }),
    onSubmit:(values)=>{
    console.log(values)
    navigate('/navigation/laptop')
    }
  })
 
  useEffect(()=>{
    axios.get("https://pcfy.redberryinternship.ge/api/teams")
    .then(res=>{
      
      setTeam(res.data.data)
        
    })
  },[])
  useEffect(()=>{
    axios.get("https://pcfy.redberryinternship.ge/api/positions")
    .then(res=>{
      
      setPosition(res.data.data)
    })

  },[])
  let navigate = useNavigate();

  return (
   
    <form  onSubmit={formik.handleSubmit}>  
    <div className='employee-container'>
      <div className="name-sir-container">
      <div className="name-sirname">
        <label className='label'>სახელი</label>
        <input type="text" placeholder='სახელი'
         className='input-name-sirname' id="firstName"
          value={formik.values.firstName} onChange={formik.handleChange}  onBlur={formik.handleBlur} />
        {formik.touched.firstName&&formik.errors.firstName? <p className='error-message'>გამოიყენე ქართული ასოები</p>:
        <span className='hint'>მინიმუმ ორი სიმბოლო, ქართული ასოები</span> }
      </div>
      <div className="name-sirname">
        <label className='label'>გვარი</label>
        <input type="text" placeholder='გვარი' 
          value={formik.values.lastName} onChange={formik.handleChange}
          id="lastName" className='input-name-sirname' onBlur={formik.handleBlur} />
        {formik.touched.lastName&&formik.errors.lastName ? <p className='error-message'>გამოიყენე ქართული ასოები</p>:
        <span className='hint'>მინიმუმ ორი სიმბოლო, ქართული ასოები</span> }
      </div>
      
      </div>
      <div className="all-rest-container">
        <div className="team-container">
           {formik.touched.team&&formik.errors.team? <select name="team" id="" className='error-select'onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="" >თიმი</option>
              {team.map(item=>(
                <option key={item.id} id="profession" 
             >{item.name}</option>
              ))}
           </select>:<select name="team" id="" className='select-form'onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="" >თიმი</option>
              {team.map(item=>(
                <option key={item.id} id="profession" 
             >{item.name}</option>
              ))}
           </select>}
         
        </div>
        <div className="team-container">
            {formik.touched.position&&formik.errors.position?<select name="position" id="" className='error-select'onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="" >პოზიცია</option>
              {position.map(item=>(
                <option key={item.id}>{item.name}</option>
              ))}
            </select>:<select name="position" id="" className='select-form'onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="" >პოზიცია</option>
              {position.map(item=>(
                <option key={item.id}>{item.name}</option>
              ))}
            </select>}
        </div>
        <div className="email-container">
          <label className='label'>მეილი</label>
          {formik.touched.email&&formik.errors.email?
          <>
          <input type="text" 
           className='input-email-number' id="email"
          value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          <span className='red-hint'>უნდა მთავრდებოდეს redberry.ge-ით</span></> :
          <>
          <input type="text" 
           className='input-email-number' id="email"
          value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          <span className='hint'>უნდა მთავრდებოდეს redberry.ge-ით</span></>
          
          }
        </div>
        <div className="phone-container">
          <label className='label'>ტელეფონის ნომერი</label>
          <input type="text" className='input-email-number' id="phone" value={formik.values.phone}
          onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          <span className='mob-hint'>ქართული მობ-ნომრის ფორმატი</span>
          {formik.touched.phone&&formik.errors.phone ? <p className='error-message'>მხოლოდ ქართული ნომერი</p> 
          :<span className='none-hint'>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>}
          
        </div>
        <div className="button-div">
        <button className='next-button' type='submit'  >შემდეგი</button>
        </div>
        
      </div>
    

       </div>
    </form>   
  
  )
}
