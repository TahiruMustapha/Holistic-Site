import React from 'react'
import './Footer.css'
import logo from '../NavBar/logo/Logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo'>
        <img src={logo} alt = 'logo' />
        <p className='NavText'>Holistic</p>
      </div>
      <div className='footer-details'>
        <div className='footer-about-us'>
        <h3>About Us</h3>
        <p>
           Holistic Counselling an Training consult Ltd
           as a limited liability company is established to train and develop 
           skills and relevant knowledge in the practice of care,
           Counselling, and Coaching in church and beyond.
           It’s personnel and vast skill development courses 
           are accredited by the Ghana Psychology Council. 
        </p>
        </div>
        <div>
            <h3>Site Map</h3>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div>
        <h3>Phone</h3>
        <p className='address-info'> 0244598994 / 02435314113</p>
        <h3>Email</h3>
        <p className='address-info'><a href='googlemail.com'>holisticcounsellingconsult@gmail.com</a></p>
        <h3>Address</h3>
        <p className='address-info'>P.O. BOX OS 2345, Dansoman - Accra</p>
        </div>
        <div className='suscribe-session'>
        <h3>Suscribe</h3>
        <p className='suscribe-text'>Suscribe to our news letter to get weekly <br /> updates about post.</p>
        <div className='newsLetter'>
         <input type='email' placeholder='E-mail Address'id='suscribe-mail' className='newsletter-email' required/>
         <button id='suscribe-btn'  >Send</button>
        </div>
        
        </div>
      </div>
      <p className='copyright'>
        &copy;2022 Holistic Consult. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer