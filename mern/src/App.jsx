
import './App.css';
import About from './Components/FunctionalComponents/About';
import Contact from './Components/FunctionalComponents/Contact';
import Gallery from './Components/FunctionalComponents/Gallery';
import NavBar from './Components/FunctionalComponents/NavBar';
import Home from "./Components/FunctionalComponents/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About college="KONGU ENGINEERING COLLEGE"college1="KONGU ARTS AND SCIENCE" college2="KONGU POLYTECHNIC" college3="KONGU NATUROPATHY" />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
