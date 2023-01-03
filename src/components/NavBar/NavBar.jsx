import React from 'react'
import './NavBar.css'
import logo from '../NavBar/logo/Logo.png'
import TopNav from '../TopNav/TopNav'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
const NavBar = ({second}) => {
  
  
   const [overlay,setOverlay]= useState(false);
   const [navToggle,setNavToggle]= useState(1);
   const toggleLink = (index)=>{
    setNavToggle(index);
}
  return (
    <div className='heroNav'>
      <TopNav/>
      <div className='mainNav'>
      <div className='logo'>
        <img src={logo} alt = 'logo' />
        <p className='NavText'>Holistic</p>
      </div>
      <div className='navBar-details'>
        <ul>
            <li className={navToggle === 1 ? 'link active-link' : 'link'}  onClick={()=>toggleLink(1)}><Link to='/'>Home</Link></li>
            <li className={navToggle === 2 ? 'link active-link' : 'link'} onClick={()=>toggleLink(2)}><Link to='/about'>About</Link></li>
            <li className={navToggle === 3 ? 'link active-link' : 'link'} onClick={()=>toggleLink(3)}><Link to='/service'>Service</Link></li>
            <li className={navToggle === 4 ? 'link active-link' : 'link'} onClick={()=>toggleLink(4)}><Link to='/contact'>Contact</Link></li>
            <button className='btn' onClick={()=> second(true)} >Book An Appointment</button>
           
        </ul>
      </div>
      <div className='small-screens-nav'>
        <FaBars className='menu' onClick={()=>setOverlay(true)}/>
         
          {overlay && (
             <div className='small-screens-overlay flex-center slide-bottom'>
             <FaTimes className='overlay-close' onClick={()=>setOverlay(false)}/>
             <ul className='small-screens-links'>
                 <li onClick={()=>setOverlay(false)} ><Link to='/'>Home</Link></li>
                 <li onClick={()=>setOverlay(false)} ><Link to='/about'>About</Link></li>
                 <li onClick={()=>setOverlay(false)} ><Link to='/service'>Service</Link></li>
                 <li onClick={()=>setOverlay(false)} ><Link to='/contact'>Contact</Link></li>
                 <button className='btn' id='overlay-btn' onClick={()=> second(true)} >Book An Appointment</button>
             </ul>
         </div> 
          )}
       
      </div>
    </div>
    
    </div>

    
  )
}

export default NavBar
