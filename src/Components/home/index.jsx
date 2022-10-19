import React from "react";
import "./Home.css";
import JsonFile from "../../Json/data.json";

const Home = () => {
  return (
    <div className="Main" id="main">
      <div className="text_d">
          <div className="Welcome">
            <p>{JsonFile[18].name}</p>
            <p> {JsonFile[19].name}</p>
            <p>{JsonFile[20].name}</p>
          <p className="aboutme">{JsonFile[7].name}</p>
          <p className="aboutme">{JsonFile[7].text}</p>
        </div>
        <div className="banner">
          <img src={JsonFile[8].img} alt="" className="felogo"></img>
        </div>
      </div>
      <div className="img_">
        <p className="work">{JsonFile[21].name}</p>
        <div className="imgdiv">
          <div className="logos">
            <img src={JsonFile[12].img} className="hcs" alt=""></img>
          </div>
          <div className="logos">
            <img src={JsonFile[13].img} className="hcss" alt=""></img>
          </div>
        </div>
        <div className="skills">
          <p>{JsonFile[22].L1}</p>
          <p></p>
          <p>⚡ Bootstrap</p>
          <p>⚡ JAVA SCRIPT</p>
          <p>⚡ REACT JS</p>
        </div>
      </div>
      <div className="education">
      </div>
    </div>
  );
};
export default Home;