import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import  fashion1  from '../../images/fashion1.jpg';
import fashion2 from '../../images/fashion2.jpg';
import fashion3 from '../../images/fashion3.jpg';

function Carousel1() {
  return (
    <div>
      <MDBCarousel showControls >
      <MDBCarouselItem itemId={1}>
        <img src={fashion1} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={fashion2} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={fashion3} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default Carousel1;
