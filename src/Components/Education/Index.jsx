import React from "react";
import "../Education/App.css";
import JsonFile from "../../Json/data.json";

const Education = () => {
  return (
    <div className="Main_edu" id="education">
      <p className="edu">Education</p>
      <div className="education">
      <div>
        <img src={JsonFile[14].img} alt="" className="logoo"></img>
      </div>
      <div className="basic">
        <p>Basic Qualification</p>
        <p>Diploma CE</p>
      </div>
      </div>
    </div>
  );
};
export default Education;
