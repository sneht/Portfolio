import React from "react";
import "./App.css";
import JsonFile from "../../Json/data.json";

const Conatact = () => {
  return (
    <div className="Conatact" id="#">
      <p>Conatact Me!!</p>
      <a href={JsonFile[9].href}>
        <img src={JsonFile[9].img} alt="logo" className="ig"></img>
      </a>
      <a href={JsonFile[10].href}>
        <img src={JsonFile[10].img} alt="" className="fb"></img>
      </a>
      <a href={JsonFile[11].href}>
        <img src={JsonFile[11].img} alt="" className="gmail"></img>
      </a>
    </div>
  );
};
export default Conatact;