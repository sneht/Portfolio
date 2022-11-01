import React from "react";
import "./Contact.css";
import JsonFilee from "../../Json/data2.json";
import ScrollToTop from "react-scroll-to-top";

const Conatact = () => {
  return (
    <>
    <div  id="contact"></div>
    <div className="Conatact">
      <p className="headoff">{JsonFilee.contact.head}</p>
      <div className="text-center text-lg-start  text-muted">
        <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>{JsonFilee.contact.title}</span>
          </div>
          <div>
            <a href={JsonFilee.contact.fb} className="me-4 link-secondary">
              <i className="fab fa-facebook"></i>
            </a>
            <a href={JsonFilee.contact.twitter} className="me-4 link-secondary">
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
            <a href={JsonFilee.contact.github} className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>
                {JsonFilee.contact.title1}
              </h6>
              <p>{JsonFilee.contact.name}</p>
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

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {JsonFilee.contact.ul}
              </h6>
              <div>
                <p className="text-reset">{JsonFilee.contact.text}</p>
              </div>
              <div>
                <p className="text-reset">{JsonFilee.contact.disc}</p>
              </div>
              <div>
                <p className="text-reset">{JsonFilee.contact.text2}</p>
              </div>
              <div>
                <p className="text-reset">{JsonFilee.contact.text3}</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {JsonFilee.contact.head3}
              </h6>
              <p>
                <i className="fas fa-home me-3 text-secondary mr-1" style={{marginRight:"5%"}}>{JsonFilee.contact.loc}</i>
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary" style={{marginRight:"5%"}}>{JsonFilee.contact.email}</i>
              </p>
              <a href={JsonFilee.contact.href}>
                <i className="fas fa-phone me-3 text-secondary">
                  {JsonFilee.contact.number}
                </i>
              </a>
              <a href={JsonFilee.contact.href2}>
                <i className="fas fa-phone me-3 text-secondary">
                  {JsonFilee.contact.number2}
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "70px" }} />
      <ScrollToTop smooth style={{ backgroundColor: "#bd00ff",borderRadius:"20px" }} />
    </div>
    </>
  );
};
export default Conatact;