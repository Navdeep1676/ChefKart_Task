import { useState } from 'react';
import '../Styles/Header.css'
const Header=()=>{
    const [searchvbl,setSearchvbl]=useState(false)
return(
    <div>
        <div className='menu'>
           <div className='menu_item_1 item'>
           <span className='fas fa-bars menu_bar'></span>
            <h2 className='brand_name_text'>ChefKart</h2>
           </div>
           <div className='menu_item_2 item'>
               <span className='fas fa-search' onClick={()=>setSearchvbl(!searchvbl)}></span>
               {searchvbl&&<input type="search" className='search' name="" id="" />}
           </div>
        </div>
        <div className='menu_links'>
            <a href="">ATTENDENCE</a>
            <a href="">SUBSCRIPTION</a>
        </div>
    </div>
)
}
export default Header;