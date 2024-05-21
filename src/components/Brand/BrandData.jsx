import React from 'react'
import b1 from './b1.png'
import b2 from './b2.png'
import Brand from './Brand.jsx'
const brandimg=[b1,b2]

 

function BrandData() {
  return (
    <div>
      <div style={{ display:"block",width:"100%",height:"100%"}}>
       <Brand Images={brandimg} Interval={3000} />
    </div>
    </div>
  )
}

export default BrandData;
