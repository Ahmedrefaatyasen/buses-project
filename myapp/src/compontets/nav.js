import React from 'react';
import './nav.css'
import { FaUserAlt } from "react-icons/fa";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";



const Nav = () => {
    return (
        <div className='nav'>
            <div className='container'>
            <h1>الرحلات</h1>
            
            <input type='text' placeholder='search'/>
            <div style={{display:"flex",gap:"15px",alignItems:"center",justifyContent:"space-around"}}>
          <span style={{cursor:"pointer", fontSize:"20px",display:"flex",color:"blue",justifyContent:"center",alignItems:"center",backgroundColor:"white",width:"40px",height:"40px",borderRadius:"50%"}}>  <FaUserAlt /></span>
            <h2>المسئول</h2>
            <IoIosArrowDropdownCircle />

            </div>
             <IoIosNotifications style={{fontSize:"1.7rem",cursor:"pointer",color:"blue"}}/>
            </div>
            
        </div>
    );
}

export default Nav;
