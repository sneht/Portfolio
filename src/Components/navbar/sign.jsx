import React from "react";
import { useNavigate } from "react-router";
const Sign = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 2000);

  return (
    <div className="namesign   w3-container  w3-animate-zoom " >
      <p>Sneh Thakkar</p>
      
    </div>
  );
};
export default Sign;
