import React from 'react'
import './Meeting.css'
const Meeting = ({book}) => {
  
  return (
       <div className='meeting'>
         <p><i>Schedule A Meeting</i></p>
         <p className='meeting-text'>Friendly atmosphere <br /> for all of your thoughts</p>

         <button id='meeting-btn' onClick={()=>book(true)}>Book Appointment</button>
    </div>
   
  )
}

export default Meeting