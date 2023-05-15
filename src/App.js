import React from 'react';
import './css/style.css';
import './sass/_base.scss';

import Header from './Components/Header/Header';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import Certifications from './Components/Certification/Certifications';



function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <About />
        <Certifications />
        <Portfolio />
        <Footer />
      </div>


    </div>
  );
}

export default App;
