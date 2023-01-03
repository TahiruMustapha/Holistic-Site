import React from 'react'
import './Aim.css'
import { FaLightbulb } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Aim = () => {
  return (
    <div className='aim' >

        <h1 className='aim-heading'>We Can Do It</h1>
        <div className='vission_mission'>
             <div className='ourVision'>
                
                <p className='ourVision_text'><span></span>Our Vision</p>
                   <div className='ourVision-details'>
                    <div className='light'>
                    <FaLightbulb className ='light-img'/>
                    </div>
                     
                       <div>
                        <p className='ourVision-details-text'>
                            We are a solution based carring and
                             Counselling community meeting the
                              holistic needs of our cherished clients
                               and beyond.
                        </p>
                       </div>
                   </div>
             </div>
             <div className='ourMission'>
             <div className='ourVision'>
               
                <p className='ourVision_text'> <span></span>Our Mission</p>
                   <div className='ourVision-details'>
                   <div className='light'>
                    <FaRegArrowAltCircleRight className ='light-img'/>
                    </div>
                       <div>
                        <p className='ourVision-details-text'>
                           We exist to provide quality and
                         contextualize care, Counselling
                          and coaching considering the holistic
                           needs
                        </p>
                       </div>
                   </div>
             </div>
             </div>
        </div>
        <div className='objective'>
            <p className='objective_text'> <span></span>Our Objective</p>
            <div className='objective-details'>
            <div className='light-goal'>
                    <FaRegArrowAltCircleRight className ='light-goal-img'/>
            </div>
                    
                       <ul>
                        <li>To increase awareness on care, counsel and coaching for the benefit of our clients and community</li>
                        <li>To provide long term care, counsel and coaching for our client and community.</li>
                        <li>To maintain and grow in our services.</li>
                        <li>To create oppotunity for communities within our services</li>
                        <li>To broaden and strengthen our resources in order to promote the services we offer to our clients.</li>
                        <li>To enhance, expand  and improve our services and community programs.</li>
                       </ul>
                    
            </div>
           
        </div>

    </div>
  )
}

export default Aim