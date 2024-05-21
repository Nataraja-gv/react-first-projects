import React, { useState }  from 'react'
import './styles/Signup.css';
import  mytralogin from '../../images/mytralogin.png'
// import offer_image from '../../images/specialoffer.jpg'
// import welcomer_offer from '../../images/welcome_offer.png'
function LoginRegister() {
  

  return (
    
      
    <div className='SignUpPage'>
         <div className='code-image'>
          <img src={mytralogin} alt="" className='code-image-image'/>
         </div>
         <div className='login-content'>
              <p className='login-para'><span className='L1'>Login</span> or <span className='L1'>Signup</span></p>

              <div className='input'>
                
                <input type="tel" className='phoneno-input' placeholder='Enter MobileNumber' maxLength={10}/>

              </div>

                <p className='login-content-policy'>By continuing,I agree to the <span>Terms of Use </span>&<span>Privacy Policy</span></p>  
             
           <div className='btn-btn-login'>
            <button type='submit' className='btn-btn'>CONTINUE</button>
           </div>
        
           <p className='get-help'>Have trouble logging in?<span>Get Help</span></p>  
         </div>
       
     </div>

    
  )
}

export default LoginRegister;
