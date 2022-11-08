import React from "react";
import { Link } from "react-scroll";
// import { Link as Linkk } from "react-router-dom";
import "./Navbar.css";
import JsonFilee from "../../Json/data2.json";

const Navbar = (props) => {
  const { payload } = props;
  
  console.log(payload);

  // const [color] = useState("#e6eff3");

  // document.body.style.backgroundColor = color;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-transparent" style={{paddingBottom:"inherit"}}>
        {/* <Link className="sign">
          {JsonFilee.navbar.logo}
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{marginTop:"80px",backgroundColor:"cornflowerblue"}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end mr-1 " id="navbarSupportedContent">
          <ul className="navbar-nav" >
            {JsonFilee.navbar.head.map((a, index) => (
              <li
                className={
                  payload[index].title === a.title && payload[index].active
                    ? "nav-item active"
                    : "nav-item"
                }
                key={index}
              >
                <Link
                  className="header nav-link"
                  activeClass="active"
                  to={a.title}
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* <> */}

      {/* <nav className="navbar navbar-expand-lg  sticky-top bg-transparent"> */}
        {/* <Link className="nevbar" to="home">
          {json.navbar.logo}
        </Link> */}

        {/* <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse  navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {JsonFilee.navbar.head.map((a, index) => (
              <li 
                className={
                  payload[index].title === a.title && payload[index].active
                    ? "nav-item active"
                    : "nav-item"
                }
                key={index}
              >
                <Link
                  
                  className="nav-link text-dark text-capitalize"
                  to={a.title}
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </> */}
    </>
  );
};
export default Navbar;