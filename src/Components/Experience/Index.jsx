import React from "react";
import "./Experience.css";
import { CgWebsite } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";
import { BsFillTrophyFill } from "react-icons/bs";
import JsonFilee from "../../Json/data2.json";

const Experience = () => {
  return (
    <div className="MainExp">
      <div className="Welcomee">
        <p>{JsonFilee.experience.head}</p>
      </div>
      <div className="abt">
        <div className="project">
          <p className="exper">
            <CgWebsite style={{ color: "red", fontSize: "50px" }} />{" "}
            {JsonFilee.experience.number}
          </p>
          <p className="experi">{JsonFilee.experience.pc}</p>
        </div>
        <div>
          <p className="exper">
            <AiFillHeart style={{ color: "red", fontSize: "50px" }} />{" "}
            {JsonFilee.experience.number2}
          </p>
          <p className="experi">{JsonFilee.experience.hc} </p>
        </div>
        <div>
          <p className="exper">
            <BsFillTrophyFill style={{ color: "red", fontSize: "45px" }} />
            {JsonFilee.experience.number3}
          </p>
          <p className="experi">{JsonFilee.experience.trophy} </p>
        </div>
      </div>
      <div id="Contact Me"></div>
    </div>
  );
};
export default Experience;
