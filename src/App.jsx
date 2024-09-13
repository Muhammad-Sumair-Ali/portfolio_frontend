import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import {  
  About,
  Contact,
  Hero,
  Skills,
  Projects, } from "./components";
import ScrollButton from './components/features/ScrollButton';




const App = () => (
  <div className='scroll-smooth'>
    <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer />
      <ScrollButton/>
  </div>
);

export default App;
