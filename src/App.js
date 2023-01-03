import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import About from './components/About/About';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
import Lost from './components/404/Lost';
import Appointment from './components/appointment/Appointment';
import { useState } from 'react';
import Apply from './components/apply/Apply';
import Events from './components/Events/Events';
function App({second}) {
   const[openAppointment,setOpenAppointment] = useState(false);
  return (
    
   <BrowserRouter>
    <div>
      <NavBar  second = {setOpenAppointment}/>
      <Routes>
         <Route path='/' exact element = { <Home homeBtn = {()=>setOpenAppointment(true)} onClose = {()=>setOpenAppointment(false)}/> }/>
         <Route path='/about' exact element = { <About aboutBtn = {setOpenAppointment}/> }/>
         <Route path='/service' exact element = { <Service ServiceBtn ={setOpenAppointment}/> }/>
         <Route path='/contact' exact element = { <Contact/> }/>
         <Route path='/events' exact element = { <Events/> }/>
         <Route path='/apply'exact element = { <Apply/>}/>
        <Route path='*' exact element = { <Lost/> }/>
      </Routes>
      <Appointment open = {openAppointment} onClose = {()=>setOpenAppointment(false)} />
      <Footer/>
    </div>
   </BrowserRouter>
  );
}

export default App;
