import React, { useEffect, useState } from 'react'
import './Medalworth.css';
 


function Medal({PropsImages}) {
    const[imageIndex,setImageIndex] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
        setImageIndex((index)=>{
            if(index===0) return PropsImages.length-1
            return index-1
         })
    },5000)
  })


  
    return (
    <div className='image-medalworth-index'>
    <div className='image-medalworth-headimg'>
        <h4>MEDAL WORTHY BRANDS TO BAG</h4>
    </div>
    <img  className="image-image-medalworth" src={PropsImages[imageIndex]} alt=""/>
         
    </div>
  )
}

export default Medal;
