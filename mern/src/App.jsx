
import './App.css';

import ClassCompEg from "./Components/ClassComponents/ClassCompEg";
import About from './Components/FunctionalComponents/About';
import Contact from './Components/FunctionalComponents/Contact';
import Gallery from './Components/FunctionalComponents/Gallery';
import NavBar from './Components/FunctionalComponents/NavBar';
import Home from "./Components/FunctionalComponents/Home";

function App() {
  
  return (
    <div>
      <NavBar/>
      <Home />
      <ClassCompEg/>
      <About college="KONGU ENGINEERING COLLEGE"college1="KONGU ARTS AND SCIENCE" college2="KONGU POLYTECHNIC" college3="KONGU NATUROPATHY" />

      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
