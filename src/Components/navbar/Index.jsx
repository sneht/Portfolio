import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Linkk } from "react-router-dom";
import "./App.css";
import JsonFile from "./../../Json/data.json";

const Navbar = () => {
  const [color, changeColor] = useState("#e6eff3");
  document.body.style.backgroundColor = color;
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
      <Linkk to="/sign" className="sign" onClick={() => changeColor("#e6ef3")}>
        {JsonFile[0].name}
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
          <li className="nav-item active">
            <Link
              className="header nav-item nav-link "
              to="main"
            >
              {JsonFile[1].name}{" "}
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="header nav-item nav-link "
              to="education"
              
            >
              {JsonFile[2].name}
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="header nav-item nav-link "
              to="experience"
              
            >
              {" "}
              {JsonFile[3].name}{" "}
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="header nav-item nav-link "
              to="#"
              
            >
              {JsonFile[4].name}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
