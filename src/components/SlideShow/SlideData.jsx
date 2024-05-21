import React from 'react'
 
import image1 from './mytraipl.jpg';
 
import image3  from './mytrabanner2.jpg';
import image4 from './mytrabanner3.jpg';
import image5 from './mytrabanner4.jpg';
 
import image8 from './mytrabanner7.jpg';
import image9 from './mytrabanner8.jpg';
import image10 from './mytrabanner9.jpg';
 import womenday from './mytrabanner10.jpg';
 import './SlideData.css';
import SlidePage from '../../components/SlideShow/SlidePage.jsx';

const images=[womenday,image10,image3,image1, image4,image5,image8,image9];


 

function SlideData() {
  return (
    <div style={{width:"100%",height:"100%"}}>
      <SlidePage imgProps={images}/>
    </div>
  )
}

export default SlideData;
