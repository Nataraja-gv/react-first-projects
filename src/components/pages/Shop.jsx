import React from 'react'
import './styles/Shop.css'
//  import Banner from '../../components/pages/Banner.jsx';
import SliderData  from '../../components/SlideShow/SlideData.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import GrandGobal from '../../components/GrandGobal/GrandGobal.jsx';
import NewCollection from '../../components/Collections/NewCollection.jsx' 
import Footer  from "../../components/Footer/Footer.jsx";
import  MedalDate from '../../components/medalworth/MedalData.jsx';
import BrandData from '../../components/Brand/BrandData.jsx'
function Shop() {
  return (
    
     <div>
     <SliderData/>
     <MedalDate/>
     <BrandData/>
     <GrandGobal/>
     <Hero/>
      
     <NewCollection/>
      <Footer/>
    </div>
  )
}

export default Shop;
