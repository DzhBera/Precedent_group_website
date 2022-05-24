import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx"
import HomePage from './components/Pages/HomePage.jsx';



function App() {
  return (
    <div className="App">
      
     
      <Header/> 
      <Routes>
          <Route path="/" element={<HomePage />} />
      
        </Routes> 

      <Footer/>
      </div>
    
  
  
  );
}

export default App;