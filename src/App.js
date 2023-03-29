import './css/style.css';
// import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
// import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Certifications from './Components/Certification/Certifications';
import './sass/_base.scss';

function App() {
  return (
    <div className="App">
      <div className='container'>
        {/* <Sidebar /> */}
        <Header />
        <About />
        <Certifications />
        <Portfolio />
        {/* <Contact /> */}
        <Footer />
      </div>


    </div>
  );
}

export default App;
