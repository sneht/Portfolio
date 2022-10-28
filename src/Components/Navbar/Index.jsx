import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Linkk } from "react-router-dom";
import "./Navbar.css";
import JsonFilee from "../../Json/data2.json";

const Navbar = () => {
  const [color, changeColor] = useState("#e6eff3");
  document.body.style.backgroundColor = color;
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
      <Linkk to="/" className="sign" onClick={() => changeColor("#e6ef3")}>
        {JsonFilee.navbar.logo}
      </Linkk>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          {JsonFilee.navbar.head.map((a, i) => (
            <li className="nav-item active" key={i}>
              <Link key={i} className="header nav-item nav-link " to={a.title}>
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
      </div>
    </nav>
    <div id="Home"></div>
    </>
  );
};
export default Navbar;
