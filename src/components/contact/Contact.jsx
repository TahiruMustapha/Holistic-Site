import React from 'react'
import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FaAddressBook, FaPhone, FaVoicemail } from 'react-icons/fa'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_uztep67',
        'template_yltfobc', form.current, 'VTaW2ttihd_SfANEf')
          .then((result) => {
              alert('Message send succesfully');
          }, (error) => {
              alert('OOoops!!! Message did not send Try again')
          });
          e.target.reset();
      };
      
  return (
    <div className='main-contact'>
            <div className='contact-bg'>
                    <h2 >Contact</h2>
                    <p>Don't be a stranger</p>
            </div>
            <div className='contact-form'>
                <h2>Let's Connect</h2>
             <div className="contact-form-info">
                     <div className='contact-form-address'>
                         <div className="address">
                                    <p className='address-text'>Address</p>
                                    <div className='conntact-address-info'>
                                    <div className='contact-icon'>
                                    <FaAddressBook className='contact-icon-img'/>
                                    </div>
                                    <div>
                                        <p>P.O.BOX OS 2345 </p>
                                        <p>Dansoman - Accra</p>
                                    </div>
                                    </div>
                                    
                         </div>
                         <div className="address">
                                <p className='address-text'>Phone</p>
                                <div className='conntact-address-info'>
                                  <div className='contact-icon'>
                                        <FaPhone className='contact-icon-img'/>
                                    </div>
                                    <div>
                                        <p>0244598994</p>
                                        <p>02435314113</p>
                                    </div>
                                </div>
                                   
                         </div>
                
                          <div className="address">
                                <p className='address-text'>Email</p>
                                <div className='conntact-address-info'>
                                   <div className='contact-icon'>
                                      <FaVoicemail className='contact-icon-img'/>
                                    </div>
                                    <div>
                                        <p>We are open: </p>
                                        <p>Mon - Fr: 10am - 8pm</p>
                                    </div>
                                </div>
                                    
                          </div>
                    </div>
              
                   <div className='contact-form-input' >
                     <form ref={form} onSubmit = {sendEmail}>
                    <p className='input-group'>
                    <input type="text" placeholder='Name' name='first_name' className='input-col' required/>
                    <input type="text" placeholder='Surname' name='sur_name' className='input-col' required />
                    </p>
                    <p className='input-group'>
                        <input type="email" placeholder='Email Address' name='email' className='input-col' required />
                        <input type="number" placeholder='Phone' name='phone'  className='input-col' required/>
                    </p>
                    <p><input type="subject" name='subject' placeholder='Subject' /></p>
                    <p><textarea placeholder='Message' name='message' required></textarea></p>
                    <button type='submit' >Submit Message</button>
                 </form>
              </div>
              </div>
         </div>
         
        </div>
      
      
  )
}

export default Contact
