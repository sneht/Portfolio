import "./App.css";
import Navbar from "./Components/Navbar/Index";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Components/Home/index";
import Conatact from "./Components/ContactMe/Index";
import Sign from "./Components/Navbar/sign";
import Experience from "./Components/Experience/Index";
import Education from "./Components/Education/Index";
import Skills from "./Components/Skills/Index";
import { useOnScreen } from "./Components/hook/hooks";
import { useRef } from "react";

function App() {
  const homeRef = useRef();
  const homeActive = useOnScreen(homeRef, "-322px");

  const eduRef = useRef();
  const eduActive = useOnScreen(eduRef, "-312px");

  const SkillsRef = useRef();
  const SkillsActive = useOnScreen(SkillsRef, "-310px");

  const expeRef = useRef();
  const expActive = useOnScreen(expeRef, "-310px");

  const contactRef = useRef();
  const contactActive = useOnScreen(contactRef, "-310px");

  return (
    <>
      {/* <Sign /> */}
      <Navbar
        payload={[
          { title: "Home", active: homeActive },
          { title: "Education", active: eduActive },
          { title: "Skills", active: SkillsActive },
          { title: "Experience", active: expActive },
          { title: "contact", active: contactActive },
        ]}
      />
      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={eduRef}>
        <Education />
      </div>
      <div ref={SkillsRef}>
        <Skills />
      </div>
      <div ref={expeRef}>
        <Experience />
      </div>
      <div ref={contactRef}>
        <Conatact />
      </div>
    </>
  );
}
export default App