import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import Myntra  from './images/logo-myntra-41476.png' 
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
    return (
        <div className='Footer-container'>
          <div className='Footer-logo'>
             <img src={Myntra} alt="no img" className='mainlogo'/>
              
          </div>

          <div className='Products'>
          <ul> 
            <li style={{display:"flex"}} href="#">Company</li>
            <li style={{display:"flex"}} href="#">Products</li>
            <li  href="#">Office</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
            </ul>
          </div>


          <div className='SocialMedia-icon'>
          <ul> 
              <li><FaFacebook /></li>
              <li><BsTwitterX /></li>
              <li><FaInstagram /></li>
              <li><IoLogoYoutube /></li>
              </ul>
          </div>
            <hr className='FooterHR'/>
            <p className='copyRight'>CopyRight @ 2024-All Right Reserved </p>
        </div>
    );
}

export default Footer;
