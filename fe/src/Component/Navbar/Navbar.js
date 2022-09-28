import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from "../../asset/images/Logo_dacn.png"
import "../Navbar/Module.Navbar.scss"

const Navbar =()=> {
  const user=useSelector((state)=>state.auth.login.currentUser);

  
  return (
   <div className='container'>
       
    {user ? (
        <div className='navContainer'>
        <div className='logo'>
                 <img src={Logo}/>
         </div>
                <div className='info'><p><span style={{color:"white"}}>Hi,{user.username}</span></p></div>
             <div className='navLogin'>
                 <Link to='/logout' className='navButton'>
                     <span className='text-btn'>ĐĂNG XUẤT</span>
                 </Link>
             </div>
         
         </div>
    ):(

       <div className='navContainer'>
       <div className='logo'>
                <img src={Logo}/>
        </div>
            <div className='navLogin'>
                <Link to='/login' className='navButton'>
                    <span className='text-btn'>ĐĂNG NHẬP</span>
                </Link>
            </div>
        
        </div>
    )}
    
    </div>
    
  )
}

export default Navbar;
