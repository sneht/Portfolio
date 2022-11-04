import "./App.css";
import Navbar from "./Components/Navbar/Index";
import Home from "./Components/Home/Index";
import Conatact from "./Components/ContactMe/Index";
// import Sign from "./Components/Navbar/sign";
import Experience from "./Components/Blog/Index";
import Education from "./Components/Education/Index";
import Skills from "./Components/Skills/Index";
import { useOnScreen } from "./Components/Hook/hooks";
import { useRef } from "react";

function App() {
  const homeRef = useRef();
  const homeActive = useOnScreen(homeRef, "-323px");

  const eduRef = useRef();
  const eduActive = useOnScreen(eduRef, "-324px");

  const SkillsRef = useRef();
  const SkillsActive = useOnScreen(SkillsRef, "-324px");

  const expeRef = useRef();
  const expActive = useOnScreen(expeRef, "-324px");

  const contactRef = useRef();
  const contactActive = useOnScreen(contactRef, "-320px");

  return (
    <>
      {/* <Sign /> */}
      <Navbar
        payload={[
          { title: "Home", active: homeActive },
          { title: "Education", active: eduActive },
          { title: "Skills", active: SkillsActive },
          { title: "Blog", active: expActive },
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