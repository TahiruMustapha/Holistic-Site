import React from 'react'
import './About.css'
import img1 from './about-img/img1.jpeg'
import img2 from './about-img/img2.jpeg'
import img3 from './about-img/img3.jpeg'
import img4 from './about-img/img4.jpeg'
import img6 from './about-img/img6.jpeg'
import img7 from './about-img/img7.jpeg'
import img8 from './about-img/img8.jpeg'
import img9 from './about-img/img9.jpeg'
import img10 from './about-img/img10.jpeg'
import Meeting from '../Meeting/Meeting'
const About = ({aboutBtn}) => {
  return (
    <div className='about'>
       <div className='about-bg'></div>
       <div className='about-info'>
           <div className='about-details'>
            <h3>About As</h3>
            <p>
              Holistic Counselling an Training consult Ltd
              as a limited liability company is established to train and develop 
  skills and relevant knowledge in the practice of care,
  Counselling, and Coaching in church and beyond.
  It’s personnel and vast skill development courses 
  are accredited by the Ghana Psychology Council. 
  The Consult is accredited to run Counselling services,
  Continues Professional development courses, Lay Practitioner
    Certificate courses as well as a center for internship.
    Each year we receive students from the major public
      and private Universities in Ghana to do internships.
      We have had a student from Liberty University in USA undergoing internship in the Consult.
            </p>
           </div>
           <div className='speech-img'>
            <img src={img1} alt='speech'/>
            <div className='degrees'>
            <p >JAMES KOFI ABBREY <br />
                -M.A, M.TH, M.H.C.F.R, D.D(HON),PHD STUDENT <br />
                Founder and Executive Director
            </p>
            </div>
           </div>
       </div>
       <div className='different'>
           <img src={img2} alt='group_pic'/>
           <div className='different-details'>
              <h2>What Makes Us Different</h2>
              <p>Since its inception, Holistic Counselling
             and Training Consult has provided comprehensive
             and contextualized support services to both the young 
             and old with the goal of improving their physical, emotional,
              socio-economic, spiritual and educational well-being. 
              This has been accomplished under the able leadership of renowned, 
              experienced and certified counsellor and a team of competent 
              individuals with rich experiences in related fields of study.</p>
           </div>
       </div>
       <div className='ui-ux'>
            <img src={img3} alt='banner'/>
            <img src={img4} alt='banner'/>
       </div>
       <div className='gallery'>
        <p>Gallery</p>
             <div className='gallery1'></div>
             <div className='gallery2'>
             <img src={img6} alt='banner'/>
             <img src={img7} alt='banner'/>
             <img src={img8} alt='banner'/>
             </div>
             <div  className='gallery3'>
             <img src={img9} alt='banner'/>
             <img src={img10} alt='banner'/>
             </div>
       </div>
       <Meeting book={aboutBtn}/>
    </div>
  )
}

export default About
