import React from "react";
import "./Skills.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Skills = () => {
  const data = {
    labels: ['Html','Css','Js','REactJs',"BootStrap"],
    datasets: [
        {
            label: 'Attendance for Week 1',
            data: [100,100,90,90,40],
            borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: ['rgba(232,99,132,1)',
            'rgba(232,211,6,1)',
            'rgba(54,162,235,1)',
            'rgba(255,159,64,1)',
            'rgba(60,60,60,60)' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
        }
    ]
};
const options = {
  plugins: {
      title: {
          display: true,
          text: 'Doughnut Chart',
          color:'blue',
          font: {
              size:34
          },
          padding:{
              top:30,
              bottom:30
          },
          responsive:true,
          animation:{
              animateScale: true,
                         }
      }
  }

}
  
  return (
    <div class="Skillspro">
        <p class="Second_d">Skills</p>
      <div className="Donut">
      <Doughnut data={data} options={options} style={{height:"10px",width:"100px"}} />
      </div>
      <div id="experience"></div>
    </div>
  );
};
export default Skills;
