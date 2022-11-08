import React from "react";
import "./Home.css"
import JsonFilee from "../../Json/data2.json";

const Home = () => {

  return (
    <>
    <div id="Home"></div>
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
      </div>
    </>
  );
};
export default Home;