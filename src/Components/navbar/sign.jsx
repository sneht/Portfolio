import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Typewriter from "typewriter-effect"
import JsonFilee from "../../Json/data2.json";


const Sign = () => {
  const navigate = useNavigate();
  
  useEffect(()=>{
    setTimeout(() => {
      navigate("/ ");
    }, 3000);
  })

  return (
    <div className="namesign  w3-container  w3-animate-zoom " >
      <div className="logo">
      <img src="./image/newlogo.png" alt=" "/>
      <Typewriter 
                  options={{
                    strings: 
                     JsonFilee.navbar.name
                    ,
                    autoStart: true,
                    loop: true,
                  }}
                />
      </div>
    </div>
  );
};
export default Sign;
