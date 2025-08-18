import { useEffect, useState } from 'react'
import Nav from './componets/Nav/Nav'
import Home from './componets/Home/Home'
import About from './componets/About/About';
import Service from './componets/Services/Services';
import HappyCustomers from './componets/HappyCustomers/HappyCustomers';
import Contact from './componets/Contact/Contact';


function App() {
  const cureentTheam = localStorage.getItem("cureentTheam");
  const [theam, seTheam] = useState(cureentTheam ? cureentTheam : 'dark');

  useEffect(()=>{
    localStorage.setItem("cureentTheam", theam);
  },[theam])

  return (
    <div className={`continer ${theam}`}>
        <Nav theam={theam} seTheam={seTheam}/>
        <Home/>
        <About/>
        <Service/>
        <HappyCustomers/>
        <Contact/>
    </div>
  )
}

export default App
