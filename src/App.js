import './App.css';
import Navbar from './Components/Navbar/Index';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './Components/Home';
import Conatact from './Components/ContactMe/Index';
import Sign from './Components/Navbar/sign';
import Education from './Components/Education/Index';
import Experience from './Components/Experience/Index';
import Skills from './Components/Skills/Index';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Sign/>  </>}  /> 
      <Route path="/ " element={<> <Navbar/> <Home/> <Education/> <Skills/> <Experience/>  <Conatact /> </>} />
    </Routes>
    </BrowserRouter>
    </>
  );
  }
export default App;