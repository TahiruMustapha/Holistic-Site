
import Recovery from '../recovery/Recovery';
import Meeting from '../Meeting/Meeting';
import './Service.css'
import Services3 from '../services3/Services3';
const Service = ({ServiceBtn}) => {
 
  return (
    <div className='service'>
       <div className='service-bg'>
        <h3>Services</h3>
        <p>Enjoy Where You Are Now</p>
       </div>
       <Services3/>
       <Recovery />
       <Meeting book = {ServiceBtn}/>
    </div>
  )
}

export default Service
