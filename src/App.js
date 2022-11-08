import "./App.css";
import Navbar from "./Components/Navbar/Index";
import Home from "./Components/Home/Index";
import Conatact from "./Components/ContactMe/Index";
import Sign from "./Components/Navbar/sign";
import Experience from "./Components/Blog/Index";
import Education from "./Components/Education/Index";
import Skills from "./Components/Skills/Index";
import { useOnScreen } from "./Components/Hook/hooks";
import { useRef } from "react";
import React from "react";

function App() {
  const homeRef = useRef();
  const homeActive = useOnScreen(homeRef, "-50%");

  const eduRef = useRef();
  const eduActive = useOnScreen(eduRef, "-50%");

  const SkillsRef = useRef();
  const SkillsActive = useOnScreen(SkillsRef, "-50%");

  const BlogRef = useRef();
  const BlogActive = useOnScreen(BlogRef, "-50%");

  const contactRef = useRef();
  const contactActive = useOnScreen(contactRef, "-50%");

  return (
    <>
      <div>
        <Sign />
        <div className="Main_app">
          <Navbar
            payload={[
              { title: "Home", active: homeActive },
              { title: "Education", active: eduActive },
              { title: "Skills", active: SkillsActive },
              { title: "Blog", active: BlogActive },
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
          <div ref={BlogRef}>
            <Experience />
          </div>
          <div ref={contactRef}>
            <Conatact />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
