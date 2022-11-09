import React from "react";
import "./Skills.css";
import JsonFilee from "../../Json/data2.json";

const Skills = () => {
  return (
    <>
      <div id="Skills"></div>
      <div className="Main_skills">
        <p
          className="Second_d"
          data-aos="fade-right"
          style={{ paddingTop: "40px" }}
        >
          Skills
        </p>
        <div className="skillss">
          <div className="htmlProg ProgWidth">
            <div className="p">
              <p>{JsonFilee.skills.HTML}</p>
              <p>95%</p>
            </div>
            <div className="skillDiv">
              <span
                className="skillBar htmlBar"
                style={{ width: "70%" }}
              ></span>
            </div>
          </div>
          <div className="cssProg ProgWidth">
            <div className="p">
              <p>{JsonFilee.skills.CSS}</p>
              <p>70%</p>
            </div>
            <div className="skillDiv">
              <span className="skillBar cssBar"></span>
            </div>
          </div>
          <div className="jsProg ProgWidth">
            <div className="p">
              <p>JavaScript</p>
              <p>75%</p>
            </div>
            <div className="skillDiv">
              <span className="skillBar jsBar"></span>
            </div>
          </div>
          <div className="reactProg ProgWidth">
            <div className="p">
              <p>React</p>
              <p>70%</p>
            </div>
            <div className="skillDiv">
              <span className="skillBar reactBar"></span>
            </div>
          </div>
          <div className="nodeProg ProgWidth">
            <div className="p">
              <p>Bootstrap</p>
              <p>35%</p>
            </div>
            <div className="skillDiv">
              <span className="skillBar bootstrapBar"></span>
            </div>
          </div>
          <div className="sqlProg ProgWidth">
            <div className="p">
              <p>Sql</p>
              <p>50%</p>
            </div>
            <div className="skillDiv">
              <span className="skillBar sqlBar"></span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Skills;
