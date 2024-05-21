import React from 'react'
import './GrandGobal.css';

import ItemsData from './GrandGobalItems';
 

function GrandGobal(props) {
  return (

     
    <div className='grand-conatiner'>
      
       <div className='grandHeading'>
          <h1>GRAND GLOBAL BRANDS</h1>
          <hr/>
       </div>
       

       <div className='grand-items'>
            {ItemsData.map((item,index)=>{
                return ( 
                    <div>
                       
                        <div key={index} className='items-image'>
                            <img src={item.image} alt="" className='img'/>
                         
                        </div>
                        <div className='Items-details'>
                            <p>{item.style}</p>
                            <p>{item.offer}</p>
                        </div>
                    </div>
                 )
            })}
           
       </div>

       
    </div>
  )
}

export default GrandGobal;
