
import Aim from '../Aim/Aim'
import Events from '../Events/Events'
import Services from '../Services/Services'
import Work from '../Work/Work'
import './Home.css'

const Home = ({homeBtn,onClose}) => {

  return (
    <div>
      <div  className='main-home' >
      <h1>Therapy for <br/> Depression</h1>
      <p>We develop & understand your <br/> thoughts patterns</p>
      <button id='home-btn' className='home-btn' onClick={homeBtn} >Book An Appointment</button>

    </div>
    <Aim/>
    <Services/>
    <Work/>
    <Events/>
    </div>
    

  )
}

export default Home
