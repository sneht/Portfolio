import React from "react";
import "./Experience.css";
import { CgWebsite } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";
import {BsFillTrophyFill} from "react-icons/bs"

const Experience = () => {
  return (
    <div className="MainExp" >
        <div className="Welcomee">
          <p>Experience</p>
      </div>
      <div className="abt">
        <div className="project">
          <p className="exper">
            <CgWebsite style={{ color: "red", fontSize: "50px" }} /> 150+
          </p>
          <p className="experi">Projects Completed </p>
        </div>
        <div>
          <p className="exper">
            {" "}
            <AiFillHeart style={{ color: "red", fontSize: "50px" }} />150+
          </p>
          <p className="experi">Happy clients </p>
        </div>
        <div>
        <p className="exper">
          <BsFillTrophyFill style={{ color: "red", fontSize: "45px" ,marginTop:"4%"}}/>
        </p>
        </div>
      </div>
      <div id="#">

      </div>
    </div>
  );
};
export default Experience;