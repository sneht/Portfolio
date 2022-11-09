import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import JsonFilee from "../../Json/data2.json";

const Sign = () => {
  const [showElement, setShowElement] = useState();

  useEffect(() => {
    setShowElement(true);
    setTimeout(() => {
      setShowElement(false);
      window.scrollTo(0, 0);
    }, 3000);
  }, []);

  return (
    <>
      {showElement ? (
        <div className="namesign  w3-container  w3-animate-zoom">
          <div className="logo">
            <img src="./image/newlogo.png" alt=" " />
            <Typewriter
              options={{
                strings: JsonFilee.navbar.name,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Sign;
