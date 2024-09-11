import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import {  
  About,
  Contact,
  Hero,
  Skills,
  Projects, } from "./components";




const App = () => (
  <div>
    <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer />
  </div>
);

export default App;
