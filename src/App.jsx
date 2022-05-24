import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx"
import HomePage from './components/Pages/HomePage.jsx';
import About from './components/Pages/About.jsx';
import Contacts from './components/Pages/Contacts.jsx';
import Lawyers from './components/Pages/Lawyers.jsx';
import Services from './components/Pages/Services.jsx';
import Specializations from './components/Pages/Specializations.jsx';

function App() {
  return (
    <div className="App">
      
     
      <Header/> 
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Specializations" element={<Specializations />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Lawyers" element={<Lawyers />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes> 

      <Footer/>
      </div>
    
  
  
  );
}

export default App;