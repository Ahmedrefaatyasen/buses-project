import React, { useState } from 'react';
import './sidebar.css'
import { FaBus } from "react-icons/fa";
import { AiFillControl } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { GrBus } from "react-icons/gr";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";





const Sidebar = () => {
    const [tru,settru]=useState(false)
    function handle(){
        
        settru(!tru)
        
    }
   
    return (
        <section className='sidebar'>
        
      
            <h1> university bus <FaBus/></h1>
            <ul className='part1'>
                <li><a href='#'> <AiFillControl /> لوحه التحكم</a></li>
                <li><a href='#'>  <FaUsers/>المستخدمين  </a></li>
                
                    <li><a href='#' onClick={handle}><GrBus/>الراحلات</a></li>
                    <ul  className={tru?"part5":"part4"}>
                    <li><a href='#'> الراحلات</a></li>
                    <li><a href='#'>عنواين الالتقاط</a></li>
                    <li><a href='#'>عنواين الجامعه</a></li>
                    </ul>
                
            </ul>
        
            
           
            
           
            
            <ul  className='part3' >
                <li><a href='#'><FaHandHoldingDollar/> الارباح والمصروفات</a></li>
            
            
                <li><a href='#'><IoSettings />الاعدادات</a></li>
            </ul>
            <div style={{marginTop:"100px"}}>
                <button style={{display:"flex", fontSize:"1rem",color:"white",alignItems:"center",width:"120px",backgroundColor:" rgb(55, 55, 197)",height:"40px",border:"1px solid transparent",borderRadius:"10px"}}> <IoIosLogOut style={{color:"white",fontSize:"1.6rem"}}/>تسجيل الخروج</button>
            </div>
            </section>
            
            
        
    );
}

export default Sidebar;
