import React from 'react'
import './NewCollection.css';
import Data from './CollectionProduct.jsx';
function NewCollection() {
  return (
    <div className='Collection-conatiner'>
      
    <div className='CollectionHeading'>
       <h1>New Collections </h1>
       <hr/>
    </div>
    

    <div className='Collection-items'>
         {Data.map((item,index)=>{
             return ( 
                 <div>
                    
                     <div  key={index} className='Collection-image'>
                         <img src={item.image} alt="" className='Collectionimg'/>
                      
                     </div>
                     <div className='Collections-details'>
                         <p>{item.name}</p>

                         <div className='Price-offer'>
                         <p>{item.NewPrice}</p>
                         <p  className='oldprice'>{item.OldPrice}</p>
                         <p>{item.off}</p>
                         </div>
                          
                     </div>
                 </div>
              )
         })}
        
    </div>

    
 </div>
  )
}

export default NewCollection;