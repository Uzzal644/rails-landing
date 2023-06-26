import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <About image={aboutimage} title='Scrum' button='Use template' /> 
      <Presentation/>
      <About image={aboutimage1} title='Get Started with Rails Software' button= 'Get it free' /> 
      <Contact/>
    </div>
  );
}

export default App;
