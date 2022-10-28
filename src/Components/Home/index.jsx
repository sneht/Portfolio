import React from "react";
import "./Home.css";
import JsonFilee from "../../Json/data2.json";

const Home = () => {
  return (
    <div className="Main">
      <div className="text_d">
        <div className="Welcome">
          <p>{JsonFilee.home.head}</p>
          <p> {JsonFilee.home.name}</p>
          <p>{JsonFilee.home.about}</p>
          <p className="aboutme">{JsonFilee.home.quote}</p>
          <p className="aboutme">{JsonFilee.home.text}</p>
        </div>
        <div className="banner">
          <img src={JsonFilee.home.img} alt="" className="felogo"></img>
        </div>
      </div>
      <div className="img_">
        <p className="work">{JsonFilee.home.WID}</p>
        <div className="imgdiv">
          <div className="logos">
            <img src={JsonFilee.home.img2} className="hcs" alt=""></img>
          </div>
          <div className="logos">
            <img src={JsonFilee.home.img3} className="hcss" alt=""></img>
          </div>
        </div>
        <div className="skills">
          <p>{JsonFilee.home.HTML}</p>
          <p>{JsonFilee.home.CSS}</p>
          <p>{JsonFilee.home.BOOTSTRAP}</p>
          <p>{JsonFilee.home.JS}</p>
          <p>{JsonFilee.home.RJ}</p>
        </div>
      </div>
      <div className="Education"></div>
    </div>
  );
};
export default Home;