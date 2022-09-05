import { useEffect, useState } from 'react'
function getSavedValue(key,initialValue){
  const savedValue= JSON.parse(localStorage.getItem(key))
  if(savedValue){
    return savedValue
  }else{
    return initialValue
  }
}
export default function useLocalStorage(key,initialValue) {
    const[value,setValue]=useState(()=>{
        return getSavedValue(key,initialValue)
    })
    useEffect(()=>{
      localStorage.setItem(key,JSON.stringify(value))
    },[value,key])
  return [value,setValue]
    
  
}
