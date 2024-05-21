import React, { useState } from 'react'
import './SlidePage.css';
import {ArrowBigLeft,ArrowBigRight} from 'lucide-react'
import { FaRegDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
function SlidePage({imgProps}) {
 const [currentIndex,setCurrentIndex]=useState(0)

 const PrevSlides=()=>{
   setCurrentIndex((index)=>{
    if(index===0) return imgProps.length -1
    return index -1
  })
 }

 const NextSlides=()=>{
   setCurrentIndex((index)=>{
    if (index===imgProps.length-1) return 0
    return index + 1
   })
 }


return (
    <div className='image-slider-image' >
        
          <img src={imgProps[currentIndex]} alt="no image" className='Slider-image'/>
       
      
         <button type="button" onClick={PrevSlides} className='image-slider-btn'  style={{left:"5px"}}>
          <ArrowBigLeft style={{width:"30px", height:"30px", border:"none"}} />
         </button>


         <button type="button" onClick={NextSlides} className='image-slider-btn ' style={{right:"5px"}}>
          <ArrowBigRight style={{width:"30px", height:"30px"}} />
         </button>
  <div className="btn-index"> 
         {imgProps.map((_,index)=>{
          return (<button onClick={()=>setCurrentIndex(index)} >{index===currentIndex ? <FaRegDotCircle  className='dotBtn'/>:<FaRegCircle />}</button>)
         })}
         </div>
    </div>
  )
}

export default SlidePage;
