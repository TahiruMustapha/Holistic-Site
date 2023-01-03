import React from 'react'
import { useState } from 'react'
import './Services3.css'
const Services3 = () => {
    const[toggleState, setToggleState] = useState(1)
    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
    <div className='service3-container'>
      <div className='service3-container-tab'>
                <div className={toggleState === 1 ? 'tabs active-tab' : 'tabs'} onClick={()=>toggleTab(1)}>
                    <p>Counselling Services</p>
                </div>
                <div className={toggleState === 2 ? 'tabs active-tab' : 'tabs'} onClick={()=>toggleTab(2)}>
                        <p>Coaching Services</p>
                </div>
                <div className={toggleState === 3 ? 'tabs active-tab' : 'tabs'} onClick={()=>toggleTab(3)}>
                        <p>Training Services</p>
                </div> 
          </div>
           <div className={toggleState === 1 ? 'tabs-content active-content' : 'tabs-content'}>
               <div>
               <div className='first-service'>
                    <i>Counsilling Services</i>
                    <h3>About Counselling</h3> 
                    <p>Our Counselling service make a profund impact on the lives of individuals,families and communities.
                    We also helps people navigate dificult life situation, such as death of love ones,divorce, natural disaster
                    ,school stress and loss of job.We provides the tools and insights to manage mental healht issues such as anxiety 
                    and depression.Ultimately our counselling empowers people to live healhty and fulfilling life.
                    </p>
              </div>
           <div className='second-service'>
                <h2>Counselling Services</h2>
                <p>Premarital Counselling and Education.</p>
                <p>Post-Wedding Counselling.</p>
                <p>Marriage Counselling.</p>
                <p>Devorce Counselling.</p>
                <p>Crises Counselling.</p>
                <p>Depression Counselling.</p>
                <p>Sexual Disfunction Counselling.</p>
           </div> 
               </div>
           </div>
            <div className={toggleState === 2 ? 'tabs-content active-content' : 'tabs-content'}>
                    <div>
                    <div className='first-service'>
                                    <i>Coaching Services</i>
                                    <h3>About Coaching</h3> 
                                    <p>Our Counselling service make a profund impact on the lives of individuals,families and communities.
                                    We also helps people navigate dificult life situation, such as death of love ones,divorce, natural disaster
                                    ,school stress and loss of job.We provides the tools and insights to manage mental healht issues such as anxiety 
                                    and depression.Ultimately our counselling empowers people to live healhty and fulfilling life.
                                    </p>
                        </div>

                        <div className='second-service'>
                                <h2>Coaching Services</h2>
                                <p>Marriage Coaching.</p>
                                <p>Relationship Coaching.</p>
                                <p>Life Coaching.</p>
                                <p>Career Coaching.</p>
                                <p>Leadership Coaching.</p>
                        </div>
                    </div>
            </div>
            <div  className={toggleState === 3 ? 'tabs-content active-content' : 'tabs-content'}>
                    <div>
                    <div className='first-service'>
                               <i>Training Services</i>
                                <h3>About Training</h3> 
                                <p>Our Counselling service make a profund impact on the lives of individuals,families and communities.
                                We also helps people navigate dificult life situation, such as death of love ones,divorce, natural disaster
                                ,school stress and loss of job.We provides the tools and insights to manage mental healht issues such as anxiety 
                                and depression.Ultimately our counselling empowers people to live healhty and fulfilling life.
                                </p>        
                    </div>

                    <div className='second-service'>
                                <h2>Training Services</h2>
                                <p>Leadership Training.</p>
                                <p>Prepare Enrich Facilitator.</p>
                                <p>Continuing Professional.</p>
                                <p>Development CPD Courses.</p>
                                <p>One Year Certificate in marriage and Counselling.</p>
                                <p>Two Year Deploma in Marriage And Family Counsellig</p>
                    </div>
                    </div>
            </div>
    </div>
  )
}

export default Services3
