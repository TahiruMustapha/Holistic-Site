import React from 'react'
import { Link } from 'react-router-dom'
import './Lost.css'
const Lost = () => {
  return (
    <div className='lost'>
      <div>
      <h1>Page Not Found!!!</h1>
       <button className='lost-btn'><Link to='/'>Go Back To Home</Link></button>
      </div>

    </div>
  )
}

export default Lost
