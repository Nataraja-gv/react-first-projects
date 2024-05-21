import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";
import fashionwomen  from "./women.png"
import hellohand  from "./hellohand.png"
import './Hero.css'

function Hero() {
  return (
    <div className='Hero-container'>
      <div className='Hero-left-side'>
      <div> 
          <p style={{fontSize:"20px",fontWeight:"bolder"}}>NEW ARRIVALS ONLY</p>
          </div>
          <div> 
          <div className='hand-hand-icon'>

          <div style={{display:"flex"}}>  <p style= {{fontSize:"50px",fontWeight:"bolder"}}>new</p>   <img src={hellohand} className='hellohand'/></div>
           <p style={{fontSize:"50px",fontWeight:"bolder"}}>collections</p>  
           <p style={{fontSize:"50px",fontWeight:"bolder"}}>for  everyone</p> 
          </div>
          <div className='btn-btn'> 
           <button className='button'>Latest collection <TiArrowRightOutline className='arrowicon' style={{position:"relative" ,top:"3px"}}/></button>
           </div>
           </div>
      </div>
      <div className='Hero-right-side'>
         <div className='right-image'>
         <img src={fashionwomen} alt="no img" className='image-image' />
          </div>

      </div>

      
    </div>
  )
}

export default Hero;
