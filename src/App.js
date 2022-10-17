import './App.css';
import Navbar from './Components/navbar/Index';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './Components/home';
// import Conatact from './Components/Contact Me/Index';
import Sign from './Components/navbar/sign';
// import Welcome from './Components/Welcome';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<> <Navbar/> <Home/> </>} />
      <Route path="/sign" element={<><Sign/>  </>}  />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
