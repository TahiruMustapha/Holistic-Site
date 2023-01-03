import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <div className='events'>
         <h1>Upcoming Events</h1>
         <div className='eventsDetails'>
            <div>
               <p className='day'>SUNDAY</p>
               <p className='date'>JAN  <span>1st</span></p>
               <p className='modules-text'>Apply to lay practictioner certificate in pastorial counselling today!</p>
               <p className='modules'>4 modules in 6months.</p>
               <button className='events-btn'><Link to='/apply'>Apply</Link></button>
            </div>
            <div>
            <p className='day'>SUNDAY</p>
            <p className='date'>JAN <span>20th</span></p>
            <p className='modules-text'>Apply to moral injury dimension and their treatment modules today!</p>
            <p className='modules'>2 Day practical workshop.</p>
            <button className='events-btn'><Link to='apply'>Apply</Link></button>

            </div>
         </div>
         <hr />
    </div>
  )
}

export default Events