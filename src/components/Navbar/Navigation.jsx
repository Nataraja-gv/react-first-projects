import React, { useState } from "react";
import './Navigation.css';
import myntra from './logo-myntra-41476.png';
import { FaShoppingCart } from "react-icons/fa";
import { Outlet,Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Navigation( ) {
    const [Menu,setMenu]=useState("shop");
  return (
     <div className="Navigation_Bar">
        <div className="image_icon">
            <img src={myntra} alt="" className="image"/>
             
        </div>

        <ul className="Nav-menu">
            <li   onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{Menu==="shop"?<></> :<></>}  </li>
            <li   onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:"none"}} to="/Men">Men</Link>{Menu==="Men" ?<></>:<></>} </li>
            <li  onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:"none"}} to="/Women">Women</Link>{Menu==="Women"?<></>:<></>} </li>
            <li   onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none"}} to="/Kid">Kids</Link>{Menu==="Kids"?<></>:<></>}</li>
        </ul>
         
         <div className="Nav-input-input"> 
         <div className="Nav-search-icon"><button> <IoIosSearch /></button></div>
          <input type="text" placeholder="     Search for Products,brands and more.."></input>
          </div>



        <div className="Login_cart">
        <Link to ="Login"><spa type="submit" className="login"><FaUser /></spa></Link>
               <div className="cart-icon"><Link style={{textDecoration:"none"}} to="cart"><FaShoppingCart/></Link> </div> 
            <div className="nav-cart-count">0</div>
        </div>
          <Outlet/>
     </div> 
     
  )
}

export default Navigation;
