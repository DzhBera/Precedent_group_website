import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import HeaderMobile from './components/Header_Mobile/HeaderMobile.jsx';
import Footer from "./components/Footer/Footer.jsx"
import HomePage from './components/Pages/HomePage.jsx';
import About from './components/Pages/About.jsx';
import Contacts from './components/Pages/Contacts.jsx';
import Lawyers from './components/Pages/Lawyers.jsx';
import Services from './components/Pages/Services.jsx';
import Specializations from './components/Pages/Specializations.jsx';
import Video from "./assets/video/background-video.mp4";

function App() {
  return (
    <div className="App">
      
     
      <Header/> 
      <HeaderMobile/> 
     
    
      <main className="main">
           <div className="main-video">
               <video src={Video} autoPlay loop muted></video>
               
    </div>
    <Routes>
    <Route path="/" element={<HomePage />} />
         <Route path="/About" element={<About />} />
         <Route path="/Specializations" element={<Specializations />} />
         <Route path="/Services" element={<Services />} />
         <Route path="/Lawyers" element={<Lawyers />} />
         <Route path="/Contacts" element={<Contacts />} />
       </Routes> 
       </main>
     
      <Footer/>
      </div>
    
  
  
  );
}

export default App;