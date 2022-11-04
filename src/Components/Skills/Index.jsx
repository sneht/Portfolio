import React from "react";
import "./Skills.css";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import JsonFilee from "../../Json/data2.json";
// ChartJS.register(ArcElement, Tooltip, Legend);

const Skills = () => {
  // const data = {
  //   labels: [JsonFilee.skills.HTML, JsonFilee.skills.CSS, JsonFilee.skills.JS, JsonFilee.skills.RJ, JsonFilee.skills.BS],
  //   datasets: [
  //     {
  //       label: "Skills",
  //       data: [100, 100, 90, 90, 40],
  //       borderColor: ["rgba(255,206,86,0.2)"],
  //       backgroundColor: [
  //         "rgba(232,99,132,1)",
  //         "rgba(232,211,6,1)",
  //         "rgba(54,162,235,1)",
  //         "rgba(255,159,64,1)",
  //         "rgba(60,60,60,60)",
  //       ],
  //       pointBackgroundColor: "rgba(255,206,86,0.2)",
  //     },
  //   ],
  // };
  return (
    <>
       <div id="Skills"></div>
       <div className="Main_skills">
       <p className="Second_d">Skills</p>
    {/*<div className="Skillspro" >
      <div className="progress">
        <p>HTML</p>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "90%" }}
        >
          90%
        </div>
      </div>
      <div className="progress">
        CSS
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "90%" }}
        >
          {" "}
          90%
        </div>
      </div>
      <div className="progress">
        JS{" "}
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "75%" }}
        >
          75%
        </div>
      </div>
      <div className="progress">
        REACT JS{" "}
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "90%" }}
        >
          90%
        </div>
      </div>
    </div> */}
      <div className="skillss">
      <div className="htmlProg ProgWidth">
        <div className="p">
          <p>html</p>
          <p>95%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar htmlBar"></span>
          </div>
        </div>
      </div>
      <div className="cssProg ProgWidth">
        <div className="p">
          <p>Css3</p>
          <p>70%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar cssBar"></span>
          </div>
        </div>
      </div>
      <div className="jsProg ProgWidth">
        <div className="p">
          <p>JavaScript</p>
          <p>75%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar jsBar"></span>
          </div>
        </div>
      </div>
      <div className="reactProg ProgWidth">
        <div className="p">
          <p>React</p>
          <p>70%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar reactBar"></span>
          </div>
        </div>
      </div>
      <div className="nodeProg ProgWidth">
        <div className="p">
          <p>Bootstrap</p>
          <p>35%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar bootstrapBar"></span>
          </div>
        </div>
      </div>
      <div className="sqlProg ProgWidth">
        <div className="p">
          <p>Sql</p>
          <p>50%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar sqlBar"></span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};
export default Skills;
