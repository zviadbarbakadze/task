import React, { useEffect, useState } from 'react'
import"../styles/testvalidation.css"
import{useFormik} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router';

export default function Testvalidation() {
    const[team,setTeam]=useState([])
    const [position,setPosition]=useState([])
   
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
       navigate("/secondtest")
       
     
        },
       
      })
      
      useEffect(()=>{
        localStorage.setItem("name",JSON.stringify(formik.values.firstName))
      
        
       
      },[formik.values])
      useEffect(()=>{
        localStorage.getItem("name",JSON.stringify(formik.values.firstName))
      
        
       
      },[formik.values])
      let navigate = useNavigate();
     
  return (
    <form action="" onSubmit={formik.handleSubmit}>
        <div className="name-cont">
           {formik.touched.firstName&&formik.errors.firstName? <label className='red' >სახელი</label> :<label >სახელი</label>} 
            {formik.touched.firstName&&formik.errors.firstName?<input type="text" name="firstName" 
             value={formik.values.firstName} onChange={formik.handleChange} 
            className="inputred" onBlur={formik.handleBlur}/>:<input type="text" name="firstName" 
            value={formik.values.firstName} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>}
            {formik.touched.firstName&&formik.errors.firstName ? <p className='error-message'>გამოიყენე ქართული ასოები</p>:
        <span className='hint'>მინიმუმ ორი სიმბოლო, ქართული ასოები</span> }
              
           
        </div>
        <div className="name-cont">
           {formik.touched.lastName&&formik.errors.lastName? <label className='lastred' >გვარი</label> :<label >გვარი</label>} 
            {formik.touched.lastName&&formik.errors.lastName?<input type="text" name="lastName" 
             value={formik.values.lastName} onChange={formik.handleChange} 
            className="lastinputred"  onBlur={formik.handleBlur}/>:<input type="text" name="lastName" 
            value={formik.values.lastName} onChange={formik.handleChange}  onBlur={formik.handleBlur} />}
            {formik.touched.lastName&&formik.errors.lastName ? <p className='last-error-message'>გამოიყენე ქართული ასოები</p>:
        <span className='hint'>მინიმუმ ორი სიმბოლო, ქართული ასოები</span> }
              
           
        </div>
        <div className="select-cont">
          {formik.touched.team&&formik.errors.team?  <select name="team" id="" className='select'onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="" name="profession">თიმი</option>
              {team&&team.map(item=>(
                <option value={item.name} key={item.id} id="profession" 
             >{item.name}</option>
              ))}
           </select> :      <select name="team" id="" className='select-form'onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="" name="profession">თიმი</option>
              {team&&team.map(item=>(
                <option value={item.name} key={item.id} id="profession" 
             >{item.name}</option>
              ))}
           </select>
          
          }
        </div>
        {formik.touched.position&&formik.errors.position? <select name="position" id=""  className='select'onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="" name="profession">პოზიცია</option>
              {position&&position.map(item=>(
                <option value={item.name} key={item.id}  id="profession" >{item.name}</option>
              ))}
               </select> :  <select name="position" id="" className='select-form'onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="" >პოზიცია</option>
              {position&&position.map(item=>(
                <option  value={item.name} key={item.id}>{item.name}</option>
              ))}
            </select>}
            <div className="email-cont">
                <label htmlFor="">იმეილი</label>
                <input type="email" name="email"value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <span>უნდა მტავრდებოდეს redberry.ge-ით</span>
            </div>
            <div className="phone-container">
                <label htmlFor="">ნომერი</label>
                <input type="text" name="phone"value={formik.values.phone}  onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
    
        <button type='submit'>შემდეგი</button>
    </form>
  )
}
