import React from 'react'
import './Work.css'
import { FaScroll } from "react-icons/fa";
import paperWork from '../Work/Work-img/paperWork.jpg'
import discussingWork from '../Work/Work-img/discussingWork.jpg'
const Work = () => {
  return (
    <div className='work'>
        <div className='work-text'>
            <h2>How It Works?</h2>
            <FaScroll style={{fontSize:'30px', marginLeft:'15px', color:'black'}}/>
        </div>
        <div className='work-details'>
            <div className='work-details1'>
                <div>
                    <i>Step 1</i>
                    <h3>Schedule An <br/> Appointment</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur
                     adipisicing elit. Quod, fugit! Delectus magnam 
                     architecto atque esse omnis maiores ad debitis mollitia.</p>
                </div>
                <img src={paperWork} alt='paper work'/>

            </div>
            <div className='work-details2'>
            <div>
                    <i>Step 2</i>
                    <h3>Let's Find Best <br/>Slolution For You</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur
                     adipisicing elit. Quod, fugit! Delectus magnam 
                     architecto atque esse omnis maiores ad debitis mollitia.</p>
                </div>
                <img src={discussingWork} alt='paper work'/>
            </div>
        </div>
    </div>
  )
}

export default Work