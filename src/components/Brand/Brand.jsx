import React, { useEffect, useState } from 'react'
import './Brand.css';
 


function Brand({Images,Interval}) {
    const[Index,setIndex] = useState(0);
  useEffect(()=>{
    let intervalId= setInterval(()=>{
      setIndex((index)=>{
        if (index===Images.length-1) return 0
        return index + 1
       })

    },Interval);
    return () => clearInterval(intervalId);
  }, [Images.length, Interval]);

  


  
    return (
    <div className='image-medalworth-index'>
    <div className='image-medalworth-headimg'>
        <h4>GRAND BRANDS</h4>
    </div>
    <img  className="image-image-medalworth" src={Images[Index]} alt=""/>
         
    </div>
  )
}

export default Brand;
