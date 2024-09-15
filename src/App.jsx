import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import {  
  About,
  Contact,
  Hero,
  Skills,
  Projects, } from "./components";
import ScrollButton from './components/features/ScrollButton';
import { useEffect } from 'react';
import AOS from 'aos';
import CustomCursor from './components/features/Cursor';


const App = () => {
useEffect(() => {
  AOS.init()
},[])
return (
  <div>
    <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer />
      <ScrollButton/>
      <CustomCursor/>
  </div>
);
}
export default App;
