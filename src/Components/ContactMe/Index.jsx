import React, { useState } from "react";
import "./Contact.css";
import JsonFilee from "../../Json/data2.json";
import ScrollToTop from "react-scroll-to-top";
import { nameRegex } from "../../helper";
import { emailRegex } from "../../helper";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../font.js";

const Conatact = () => {
  AOS.init();
  const [name, setname] = useState("");
  const [nameError, setnameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const [loading, setLoading] = useState(false);

  const Validator = () => {
    let formisvalid = true;

    if (name.trim().length === 0) {
      setnameError("Please Enter Name");
      formisvalid = false;
    } else if (nameRegex.test(name)) {
      setnameError("");
    } else {
      setnameError("Please Enter Valid Name");
      formisvalid = false;
    }

    if (email.trim().length === 0) {
      setEmailError("Please Enter Email");
      formisvalid = false;
    } else if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Please Enter Valid Email");
      formisvalid = false;
    }

    if (message.trim().length === 0) {
      setMessageError("Please Enter Message");
      formisvalid = false;
    } else if (nameRegex.test(message)) {
      setMessageError("");
    } else {
      setMessageError("Please Enter Valid Message");
      formisvalid = false;
    }
    return formisvalid;
  };

  const submitValue = (e) => {
    e.preventDefault();
    if (Validator()) {
      setLoading(true);

      axios
        .post("https://6362595e7521369cd06b38a2.mockapi.io/portfolio", {
          Name: name,
          Email: email,
          Message: message,
        })
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          setname("");
          setMessage("");
          setEmail("");
        });
    }
  };

  return (
    <>
      <div id="contact"></div>
      <div className="Conatact">
      <div data-aos="fade-right">
        <p className="headoff">{JsonFilee.contact.head}</p>
        </div>
        <div className="text-center text-lg-start  text-black">
          <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>{JsonFilee.contact.title}</span>
            </div>
            <div>
              <a href={JsonFilee.contact.fb} className="me-4 link-secondary">
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href={JsonFilee.contact.twitter}
                className="me-4 link-secondary"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a href={JsonFilee.contact.gmail} className="me-4 link-secondary">
                <i className="bi-envelope-fill"></i>
              </a>
              <a href={JsonFilee.contact.ig} className="me-4 link-secondary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href=" " className="me-4 link-secondary">
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={JsonFilee.contact.github}
                className="me-4 link-secondary"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="containerr text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-black"></i>
                  {JsonFilee.contact.title1}
                </h6>
                <p>
                  <a href={JsonFilee.contact.link} className="me-4 text-black text-decoration-none">
                  {JsonFilee.contact.name}
                  </a>
                  </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  {JsonFilee.contact.head2}
                </h6>
                <div>
                  <p className="text-reset">{JsonFilee.contact.sub1}</p>
                </div>
                <div>
                  <p className="text-reset">{JsonFilee.contact.sub2}</p>
                </div>
                <div>
                  <p className="text-reset">{JsonFilee.contact.sub3}</p>
                </div>
                <div>
                  <p className="text-reset">{JsonFilee.contact.sub4}</p>
                </div>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  {JsonFilee.contact.head3}
                </h6>
                <p>
                  <a href={JsonFilee.contact.map} >
                  <i
                    className="fas fa-home me-3 text-black mr-1 text-decoration-none"
                    style={{ marginRight: "5%" }}
                  >
                    {JsonFilee.contact.loc}
                  </i>
                  </a>
                </p>
                <p>
                <a href={JsonFilee.contact.gmail} className="me-4 link-secondary">
                  <i
                    className="fas fa-envelope me-3 text-black"
                    style={{ marginRight: "5%" }}
                  >
                    {JsonFilee.contact.email}
                  </i>
                </a>
                </p>
                <a href={JsonFilee.contact.href}>
                  <i className="fas fa-phone me-3 text-black">
                    {JsonFilee.contact.number}
                  </i>
                </a>
                <a href={JsonFilee.contact.href2}>
                  <i className="fas fa-phone me-3 text-black">
                    {JsonFilee.contact.number2}
                  </i>
                </a>
              </div>

              <div className="containere" style={{background:"#e6eff3"}}>
                <div className="contentt">
                  <div className="right-side">
                    <div className="topic-text text-black">{JsonFilee.contact.head4}</div>
                    <p className="text-black" style={{color:"black"}}>
                      {JsonFilee.contact.text}
                    </p>
                    <form onSubmit={submitValue}>
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) =>
                            [setname(e.target.value),(setnameError(""))]
                          }
                        />
                      </div>
                      <div className="error">{nameError}</div>
                      <div className="input-box">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) =>
                            [setEmail(e.target.value),(setEmailError(""))]
                          }
                        />
                      </div>
                      <div className="error">{emailError}</div>

                      <div className="input-box message-box">
                        <textarea
                          placeholder="Enter Message"
                          id="message"
                          value={message}
                          onChange={(e) =>
                            [setMessage(e.target.value),(setMessageError(""))]
                          }
                        />
                      </div>
                      <div className="error">{messageError}</div>

                      <div className="button">
                        <button
                          type="button"
                          onClick={submitValue}
                        >
                          {JsonFilee.contact.button}
                          {loading && <i className="spinner-border text-primary"></i>}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  />
        <ScrollToTop
          smooth
          style={{ backgroundColor: "cadetblue", borderRadius: "10px" }}
        />
      </div>
    </>
  );
};
export default Conatact;