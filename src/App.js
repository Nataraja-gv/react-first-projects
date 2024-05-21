import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navigation from './components/Navbar/Navigation.jsx';
import Cart from './components/pages/Cart.jsx';
import ShopCatagory from './components/pages/ShopCatagory.jsx';
 import Shop from './components/pages/Shop.jsx';
 import LoginRegister from './components/pages/Login_register.jsx';
 import Products from './components/pages/Products.jsx';
 import mens_banner from './components/assets/Mensbanner.jpg';
 import women_banner from './components/assets/womenBanner.jpg'
 import kids_banner from './components/assets/kidaBanner.jpg'
// import SlideData from './components/SlideShow/SlideData.jsx';
 
function App() {
  return (
     
    <div>
     
     <BrowserRouter>
     <Navigation/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path="/Men" element={<ShopCatagory  banner={mens_banner} category="mens"/>}></Route>
        <Route path="/Women" element={<ShopCatagory  banner={women_banner} category="womens" />}></Route>
        <Route path="/Kid" element={<ShopCatagory banner={kids_banner} category="kids" />} ></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/Login" element={<LoginRegister />}></Route>
        {/* <Route path="*" element={<Error/>}></Route>/> */}
        <Route path="/products" element={<Products/>}>
          <Route path=":ProductId" element={<Products/>}/>
        </Route>
      </Routes>
       
     </BrowserRouter>
      
     
     
    </div>
  );
};

export default App;
