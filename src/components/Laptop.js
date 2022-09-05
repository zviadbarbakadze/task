import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import{useFormik} from "formik"


import "../styles/laptop.css"
import axios from 'axios';

export default function Laptop() {
  const[brand,setBrand]=useState([])
  const[cpu,setCpu]=useState([])
 
  const formik=useFormik({
    initialValues:{
      photo:"",
      laptopName:"",
      laptopBrand:"",
      cpu:"",
      cpuBirtvi:"",
      cpuNakadi:"",
      laptopRam:"",
      
      time:"",
      price:"",
    

    },
    validationSchema:Yup.object({
      laptopName:Yup.string().matches(/^[a-zA-Z0-9!@#$%^&*()_+=]*$/).required(),
      laptopBrand:Yup.string().required(),
      cpu:Yup.string().required(),
      cpuBirtvi:Yup.number().positive().required(),
      cpuNakadi:Yup.number().positive().required(),
      laptopRam:Yup.number().positive().required(),
      time:Yup.number(),
      price:Yup.number().positive().required(),
      photo:Yup.string().required()
     
     
    }),
    onSubmit:(values)=>{
      console.log(values)
      navigate('/popapp')
    }
  })
  useEffect(()=>{
    axios.get("https://pcfy.redberryinternship.ge/api/cpus")
    .then(res=>{
      console.log(res.data.data)
      setCpu(res.data.data)
    })
  },[])
  useEffect(()=>{
   axios.get("https://pcfy.redberryinternship.ge/api/brands")
   .then(res=>{
     
      setBrand(res.data.data)
   })
  },[])
  let navigate = useNavigate();
  function handleClick() {
    navigate('/navigation/employee')
  }

  return (
   
    <form  onSubmit={formik.handleSubmit} className='laptop-main-container'>
         {formik.touched.photo&&formik.errors.photo?
        <div className='red-photo-form'>
        <span className='photo-guide'>ჩააგდე ან ატვირთე <br/> ლეპტოპის ფოტო</span>
        <label htmlFor='photo' className='photo-upload' name="photo"
       
         >ატვირთე</label>
        <input type="file" id="photo"  value={formik.values.photo} onChange={formik.handleChange}
         onBlur={formik.handleBlur} accept="image/*"></input>
     </div>
     :
     <div className='photo-form'>
            <span className='photo-guide'>ჩააგდე ან ატვირთე <br/> ლეპტოპის ფოტო</span>
            <label htmlFor='img' className='photo-upload' name="photo"
           
             >ატვირთე</label>
            <input type="file" id="photo"  value={formik.values.photo} onChange={formik.handleChange}
         onBlur={formik.handleBlur} accept="image/*"></input>
         </div> 
        }
         <div className="laptop-name-brand-container">
            <div className="laptop-name-container">
                <label className='label-laptop'>ლეპტოპის სახელი</label>
                {formik.touched.laptopName&&formik.errors.laptopName?
                <>
                <input type="text" placeholder='ლეპტოპის სახელი' className='input-name-sirname' id="laptopName"
                value={formik.values.laptopName} onChange={formik.handleChange}  onBlur={formik.handleBlur}
                 />
                <span className='red-hint-laptop'>ლათინური ასოები,ციფრები,!@#$%^&*()_+=</span></>:
                <>
                <input type="text" placeholder='ლეპტოპის სახელი' className='input-name-sirname'  id="laptopName"
                value={formik.values.laptopName} onChange={formik.handleChange}  onBlur={formik.handleBlur}
                 />
                <span className='hint-laptop'>ლათინური ასოები,ციფრები,!@#$%^&*()_+=</span>
                </>
                
                }
            </div>
            <div className="laptop-brand-container">
              {formik.touched.laptopBrand&&formik.errors.laptopBrand?
              <select name="" id="laptopBrand" className='error-laptop-brand-select-form'
              value={formik.values.laptopBrand} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="">ლეპტოპის ბრენდი</option>
                {brand.map(item=>(
                  <option key={item.id}>{item.name}</option>
                ))}
              </select>:
              <select name="" id="laptopBrand" className='laptop-brand-select-form'
              value={formik.values.laptopBrand} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="">ლეპტოპის ბრენდი</option>
                {brand.map(item=>(
                  <option key={item.id}>{item.name}</option>
                ))}
              </select>
              
            }
            </div>
         </div>
         <div className="border-under-laptop-name">

         </div>
         <div className="cpu-main-container">
           <div className="cpu-select-cont">
            {formik.touched.cpu&&formik.errors.cpu?
            <select name="" id="cpu" className='error-cpu-select-form'
            value={formik.values.cpu} onChange={formik.handleChange}
             onBlur={formik.handleBlur}
           >
             <option value="">CPU</option>
             {cpu.map(item=>(
               <option key={item.id}>{item.name}</option>
             ))}
           </select>:
           <select name="" id="cpu" className='cpu-select-form'
           value={formik.values.cpu} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">CPU</option>
            {cpu.map(item=>(
              <option key={item.id}>{item.name}</option>
            ))}
          </select>
            
          }
           </div>
           <div className="cpu-birtvi-container">
            <label  className="cpu-label">CPU-ს ბირთვი</label>
            {formik.touched.cpuBirtvi&&formik.errors.cpuBirtvi?
            <>
            <input type="number" className='cpu-input' id="cpuBirtvi"
             value={formik.values.cpuBirtvi} onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             />
            <span className='red-cpu-hint'>მხოლოდ ციფრები</span>
            </>
            :
            <>
            <input type="number" className='cpu-input' id="cpuBirtvi"
             value={formik.values.cpuBirtvi} onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             />
            <span className='cpu-hint'>მხოლოდ ციფრები</span>
            </>
            
          }
           </div>
           <div className="cpu-nakadi-container">
            <label  className="cpu-label">CPU-ს ნაკადი</label>
           {formik.touched.cpuNakadi&&formik.errors.cpuNakadi?
          <>
           <input type="number" className="cpu-input" id="cpuNakadi"
               value={formik.values.cpuNakadi} onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
            <span className='red-cpu-hint'>მხოლოდ ციფრები</span>
          </> 
          :
          <>
           <input type="number" className="cpu-input" id="cpuNakadi"
               value={formik.values.cpuNakadi} onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
            <span className='cpu-hint'>მხოლოდ ციფრები</span>
          </>
          }
           </div>
         </div>
         <div className="ram-memory-container">
          <div className="ram-container">
          <label className="label-ram">ლეპტოპის RAM(GB)</label>
            {formik.touched.laptopRam&&formik.errors.laptopRam?
            <>
           
            <input type="number" className="ram-input" id="laptopRam"
             value={formik.values.laptopRam} onChange={formik.handleChange}
             onBlur={formik.handleBlur}
            />
            <span className="red-cpu-hint">მხოლოდ ციფრები</span>
            </>
            :
            <>
            
            <input type="number" className="ram-input" id="laptopRam"
             value={formik.values.laptopRam} onChange={formik.handleChange}
             onBlur={formik.handleBlur}
            />
            <span className="cpu-hint">მხოლოდ ციფრები</span>
            </>
          }
          </div>
          <div className="memory-type-container">
           
          <label  className="label-ram">მეხსიერების ტიპი</label>
              
     
         <div className="radio-buttons">
          
          
            <div className="ssd">
            <input type="radio" className="radio" name="radio"
          
             />
            <label  className="radio-label">SSD</label>
       </div>
       <div className="hdd">
          <input type="radio" className="radio" name="radio"
          
          />
          <label  className="radio-label">HDD</label>
       </div> 
       </div>
   

              
              
            
          </div>
         </div>
         <div className="border-under-laptop-name">

         </div>
         <div className="buy-price-main-container">
          <div className="buy-container">
            <label  className="label-buy-price">შეძენის რიცხვი(არჩევითი)</label>
            <input name="time" type="date" className="date-price-input" value={formik.values.time}
            onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
          </div>
          <div className="price-container">
            <label className="label-buy-price">ლეპტოპის ფასი</label>
            {formik.touched.price&&formik.errors.price?
            <>
            <input type="number" className="date-price-input" id="price"
            value={formik.values.price} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            <span className="red-cpu-hint">მხოლოდ ციფრები</span>
            </>
            :
            <>
            <input type="number" className="date-price-input" id="price"
            value={formik.values.price} onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            <span className="ram-hint">მხოლოდ ციფრები</span>
            </>
            
          }
          </div>
         </div>
         <div className="laptop-condition-container">
            <label  className="label-condition">ლეპტოპის მდგომარეობა</label>
            <div className="condition-radio-buttons">
              
             <div className="condition-new">
                  <input type="radio" className="radio" name="radiola" />
                  <label  className="radio-label">ახალი</label>
             </div>
             <div className="condition-secondary">
                <input type="radio" className="radio" name="radiola"/>
                <label  className="radio-label">მეორადი</label>
             </div>

              
              
            </div>
          </div>
          <div className="back-memorize-container">
              <button type='button'  onClick={handleClick} className="back-button">უკან</button>
              <button type='submit' className='memorize-button' >დამახსოვრება</button>
          </div>
         
        
         
    </form>
   
  )
}
