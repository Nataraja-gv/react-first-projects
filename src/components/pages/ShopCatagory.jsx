import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './styles/ShopCatagory.css';
import Footer from '../Footer/Footer'
 
function ShopCatagory(props) {
  const {All_data} = useContext(ShopContext)
  return (

<div className='ShopCategory-maincontoiner'>   
    <div className='ShopCatagory'>
       
      <img src={props.banner} alt="" className='Banner'/>
       
       <div className='ShopCatagory-Text'>
            <p style={{textDecoration:"underline"}}>Home/Cloting/<span>For Mens/Women/Kids</span></p>
            <p><span>Showing Mens & Womens & kids</span>-50 items</p>
           
        </div>

       <div className='ShopCatagory-sort'>
         <form>
           
          <select  name="filter" id="name">
             
            <option value="Recommended"><span>Sort By:</span>Recommended</option>
            <option value="Whats news">Whats news</option>
            <option value="Popularity">Popularity</option>
            <option value="price">Price:Low to high</option>
            <option value="price">Price: high t0 low</option>
          </select>
         </form>

       </div> 

      <hr className='CatagoryHR'/>
    </div> 
 
{/* filter and image container   */}

     <div className='Filterimage-Conatiner'>
        <div className='FilterSection'>
             
            <div className='category-radio'>
                
                 <h5>Filter</h5>
                 <h6>Clear All</h6>
                 
               <form className = 'category-filter'> 
                 <span><input type='radio'/> Mens</span>
                 <span><input type='radio' /> Womens</span> 
                 <span><input type='radio'/>Boys</span> 
                 <span><input type='radio'/>Girls</span>  
                 
                </form>
               
            </div>



            <div className='category-checkout'>
             
              <form className='category-checkout'>
              <h5>BRAND</h5>
               <span><input type="checkbox"/>HIGHLANDER </span>
              <span><input type="checkbox"/>Indian Terrain </span>
              <span><input type="checkbox"/>Roadster </span>
              <span><input type="checkbox"/>Blackberrys</span>  
              <span><input type="checkbox"/>Peter England  </span>
               <span><input type="checkbox"/>Puma </span>
               <span><input type="checkbox"/>Nike </span>
             
              </form> 
            </div>



            <div className='category-price'>
            
              <form className='category-rangePrice'>
              <h5>Price</h5>
               <span><input type="checkbox"/><label>Rs. 2249 to Rs. 2987</label> </span>
               <span><input type="checkbox"/><label>Rs. 2987 to Rs. 3787</label></span>
               <span><input type="checkbox"/> <label>Rs. 4087 to Rs. 5887</label></span>
               <span><input type="checkbox"/> <label>Rs. 2987 to More</label></span>
                </form> 
            </div>


            <div className='category-color'>
             
              <form className='category-color-color'>
              <h5>Color</h5>
               <span><input type="checkbox"/><label style={{color:"blue"}}> Blue</label> </span>
               <span><input type="checkbox"/><label style={{color:"pink"}}>pink</label></span>
               <span><input type="checkbox"/> <label style={{color:"seagreen"}}> Sea Green</label></span>
               <span><input type="checkbox"/> <label style={{color:"red"}} >Red</label></span>
               <span><input type="checkbox"/> <label style={{color:"black"}}>Black</label></span>
                </form> 
            </div>
           
            <div className='category-Discount-Range'>
              
               <form className='category-range'> 
               <h5>Discount-Range</h5> 
                  <span><input type='radio'/> <lable> 20% and above</lable></span>
                 <span><input type='radio'/> <label>30% and above</label></span>
                 <span><input type='radio'/>  <label>50% and above</label></span> 
                 <span><input type='radio'/> <label>70% and above</label></span>
                </form>
               
            </div>

             

             

        </div>

  {/* image display section  */}
        <div className='ShopCategory-displaySection'>
           {All_data.map((item,index)=>{
                if (props.category==item.category){
                    return(
                      <>
                      <div className="displaySection-container"> 
                       
                        <div className="displaySection-images">
                            <img key={index} src={item.image} className='displayImage'/>
                         </div>
                       
                              <div className="displaySection-textSection-name">
                           
                                <p style={{fontSize:"15px", fontWeight:"bold" }}>{item.name}</p>
                              </div>


                               <div className="displaySection-textSection-name">
                                    <p className="newPrice">{item.NewPrice}</p>
                                    <div className="oldprice-menu">
                                    <p className='oldPrice'>{item.OldPrice}</p>
                                    <p style={{color:"orange"}}>{item.off}</p>
                              </div>
                       </div>
                           
                           
                       </div>  
                       
                      </>
                    )
                }
                    
           })} 
         
      
        </div>
         
     </div>
<div className='btn-next'> 
     <button type="submit" className='btn-explore'>Next</button>
</div>
<Footer/>
</div>       

)
}

export default ShopCatagory
