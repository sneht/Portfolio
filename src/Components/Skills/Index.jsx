import React from "react";
import "./Skills.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import JsonFilee from "../../Json/data2.json";
ChartJS.register(ArcElement, Tooltip, Legend);

const Skills = () => {
  const data = {
    labels: [JsonFilee.skills.HTML, JsonFilee.skills.CSS, JsonFilee.skills.JS, JsonFilee.skills.RJ, JsonFilee.skills.BS],
    datasets: [
      {
        label: "Skills",
        data: [100, 100, 90, 90, 40],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: [
          "rgba(232,99,132,1)",
          "rgba(232,211,6,1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(60,60,60,60)",
        ],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };
  return (
    <div className="Skillspro">
      <p className="Second_d">Skills</p>
      <div className="Donut">
        <Doughnut data={data} style={{ height: "10px", width: "100px" }} />
      </div>
      <div id="Experience"></div>
    </div>
  );
};
export default Skills;