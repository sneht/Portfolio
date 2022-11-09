import React from "react";
import { Link } from "react-scroll";
// import { Link as Linkk } from "react-router-dom";
import "./Navbar.css";
import JsonFilee from "../../Json/data2.json";

const Navbar = (props) => {
  const { payload } = props;
  // console.log(payload);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-transparent" style={{paddingBottom:"inherit"}}>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor:"cornflowerblue"}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end mr-1 " id="navbarSupportedContent">
          <ul className="navbar-nav" >
            {JsonFilee.navbar.head.map((item, index) => (
              <li
                className={
                  payload[index].title === item.title && payload[index].active
                    ? "nav-item active"
                    : "nav-item"
                }
                key={index}
              >
                <Link
                  className="header nav-link"
                  activeClass="active"
                  to={item.title}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

    </>
  );
};
export default Navbar;