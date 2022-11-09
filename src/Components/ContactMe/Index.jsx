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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { npointing } from "../../helper";

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
        .post(`${npointing}`, {
          Name: name.trim(),
          Email: email.trim(),
          Message: message.trim(),
        })
        .then((response) => {
          toast.success("Data Submited Successfully");
          setLoading(false);
          setname("");
          setMessage("");
          setEmail("");
        })
        .catch((err) => {
          toast.error(err.message);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div id="Contact"></div>
      <div className="Conatact">
        <div data-aos="fade-right">
          <p className="headoff" style={{paddingTop:"40px"}}>{JsonFilee.contact.head}</p>
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
              <div className="comp col-md-3 col-lg-4 col-xl-2 ml-4" style={{marginLeft:"20px"}}>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-black"></i>
                  {JsonFilee.contact.title1}
                </h6>
                <p>
                  <a
                    href={JsonFilee.contact.link}
                    className="me-4 text-black text-decoration-none"
                  >
                    {JsonFilee.contact.name}
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3">
                <h6 className="text-uppercase fw-bold mb-4">
                  {JsonFilee.contact.head3}
                </h6>
                <p style={{ fontSize: "18px" }}>
                  <a
                    href={JsonFilee.contact.map}
                    className="text-black text-decoration-none"
                  >
                    <i
                      className="fas fa-home me-3 text-black mr-1 text-decoration-none"
                      style={{ marginRight: "5%" }}
                    />
                    {JsonFilee.contact.loc}
                  </a>
                </p>
                <p style={{ fontSize: "18px" }}>
                  <a
                    href={JsonFilee.contact.gmail}
                    className="me-4 link-secondary text-decoration-none text-black"
                    
                  >
                    <i
                      className="fas fa-envelope me-3 text-black"
                      style={{ marginRight: "5%" }}
                    />
                    {JsonFilee.contact.email}
                  </a>
                </p>

                <div style={{ display: "grid" }}>
                  <a
                    href={JsonFilee.contact.href}
                    className="text-black text-decoration-none"
                  >
                    <i className="fa fa-phone me-3 text-black" />
                    {JsonFilee.contact.number}
                  </a>
                  <a
                    href={JsonFilee.contact.href2}
                    className="text-black text-decoration-none"
                  >
                    <i className="fa fa-phone me-3 text-black" />
                    {JsonFilee.contact.number2}
                  </a>
                </div>
              </div>

              <div
                className="containere"
                style={{ background: "#e6eff3", width: "55%" }}
              >
                <div className="contentt">
                  <div className="right-side">
                    <div className="topic-text text-black mb-2">
                      {JsonFilee.contact.head4}
                    </div>
                    <div className="contact_p" style={{ width: "100%" }}>
                      <p
                        className="text-black"
                        style={{ color: "black", width: "100%" }}
                      >
                        {JsonFilee.contact.text}
                      </p>

                      <form onSubmit={submitValue} style={{ width: "100%" }}>
                        <div className="input-box">
                          <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => [
                              setname(e.target.value),
                              setnameError(""),
                            ]}
                          />
                        </div>
                        <div className="error">{nameError}</div>
                        <div className="input-box">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => [
                              setEmail(e.target.value),
                              setEmailError(""),
                            ]}
                          />
                        </div>
                        <div className="error">{emailError}</div>

                        <div className="input-box message-box">
                          <textarea
                            placeholder="Enter Message"
                            id="message"
                            value={message}
                            onChange={(e) => [
                              setMessage(e.target.value),
                              setMessageError(""),
                            ]}
                          />
                        </div>
                        <div className="error">{messageError}</div>
                        <div className="button">
                          <button type="button" onClick={submitValue}>
                            {loading ? (
                              <i className="spinner-border text-primary"></i>
                            ) : (
                              JsonFilee.contact.button
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ScrollToTop
          smooth
          style={{ backgroundColor: "cadetblue", borderRadius: "10px" }}
        />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={2}
      />
    </>
  );
};
export default Conatact;
