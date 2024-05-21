import React from 'react'
 import './Item.css'

 

function Item(props) {
  return (
    
      <div className='item'>
        <img src={props.image} alt=""   className='item-image' />
         <p>{props.name}</p>
         <div className='Item-style'>
            <div className="Itemstyle">
                {props.style}

            </div>

            <div className="Item-offer-style">
                {props.offer}
                
            </div>
         </div>
        
      </div>
    
  )
}

 

export default Item;

