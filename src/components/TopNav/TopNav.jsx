import React from 'react'
import './TopNav.css'
import { FaPhone } from "react-icons/fa";
import { FaGlobe} from "react-icons/fa";
import { FaClock} from "react-icons/fa";

const topNav = () => {
  return (
    <div>
      <div className='topNav'>
      <ul>
        <li>
            <FaPhone className='nav-icons'/>
            <p> 0244598994 / 02435314113</p>
        </li>
        <li>
            <FaGlobe className='nav-icons'/>
            <p>P.O. BOX OS 2345, Dansoman - Accra</p>
        </li>
        <li>
            <FaClock className='nav-icons'/>
            <p>We Are Open:Mn - Fr: 10pm - 8mp</p>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default topNav
