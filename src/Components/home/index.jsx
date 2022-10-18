import React from "react";
import {} from "react-router-dom";
import "../home/App.css";
import JsonFile from "../../Json/data.json";
import Welcome from "../Welcome";
import Education from "../Education/Index";
import Experience from "../Experience/Index";

const Home = () => {
  return (
    <div className="Main" id="main">
      <div className="text_d">
      <div>
      <Welcome />
      <p className="aboutme">{JsonFile[7].name}</p>
      <p className="aboutme">{JsonFile[7].text}</p>
      </div>
      <div className="banner">
        <img src={JsonFile[8].img} alt="" className="felogo"></img>
      </div>
      </div>
      <div className="img_">
        <p className="work">What I Do?</p>
        <div className="imgdiv">
        <div className="logos">
        <img src={JsonFile[12].img} className="hcs" alt=""></img>
        </div>
        <div className="logos">
        <img src={JsonFile[13].img} className="hcss" alt=""></img>
        </div>
        </div>
        <div className="skills">
          <p>⚡ HTML</p>
          <p>⚡ CSS</p>
          <p>⚡ Bootstrap</p>
          <p>⚡ JAVA SCRIPT</p>
          <p>⚡ REACT JS</p>
        </div>
      </div>
      <Education />
      <Experience />
    </div>
  );
};
export default Home;