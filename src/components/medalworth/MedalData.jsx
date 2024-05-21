import React from 'react'
import s1 from './s1.png'
import s2 from './s2.png'
import s3 from './s3.png'
import s4 from './s4.png'
import Medal  from './Medal.jsx' 


const SlideImage=[s1,s2,s3,s4]
function MedalData() {
  return (
    <div style={{ display:"block",width:"100%",height:"100%"}}>
       <Medal PropsImages={SlideImage}/>
    </div>
  )
}

export default MedalData;
