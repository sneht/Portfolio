import React from "react";
import "./Contact.css";
import JsonFile from "../../Json/data.json";

const Conatact = () => {
  return (
    //   <p>Conatact Me!!</p>
    //   <a href={JsonFile[9].href}>
    //     <img src={JsonFile[9].img} alt="logo" className="ig"></img>
    //   </a>
    //   <a href={JsonFile[10].href}>
    //     <img src={JsonFile[10].img} alt="" className="fb"></img>
    //   </a>
    //   <a href={JsonFile[11].href}>
    //     <img src={JsonFile[11].img} alt="" className="gmail"></img>
    //   </a>
    //   <p className="footer"> Made with ❤️ by Sneh Thakkar</p>

    // </div>

    <div className="Conatact">
      <p className="headoff">Contact Me!!</p>
<footer className="text-center text-lg-start  text-muted" >
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
    
    <div className="me-5 d-none d-lg-block" >
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href={JsonFile[10].href} className="me-4 link-secondary">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href=" https://twitter.com/snehThakkar19" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href={JsonFile[11].href} className="me-4 link-secondary">
      <i className="bi-envelope-fill"></i>
      </a>
      <a href={JsonFile[9].href} className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href=" " className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href=" https://github.com/sneht/Portfolio" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
      
    </div>
  
  </section>
  

  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Company name
          </h6>
          <p>
           FrontEnd Army
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <p className="text-reset">HTML</p>
          </p>
          <p>
            <p className="text-reset">CSS</p>
          </p>
          <p>
            <p className="text-reset">JAVA SCRIPT</p>
          </p>
          <p>
            <p className="text-reset">REACT JS</p>
          </p>
        </div>



        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <p className="text-reset">Pricing</p>
          </p>
          <p>
            <p className="text-reset">Settings</p>
          </p>
          <p>
            <p className="text-reset">Orders</p>
          </p>
          <p>
            <p className="text-reset">Help</p>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Ahmedabad,Gujarat,India</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            sneh.frontendarmy@gmail.com
          </p>
          <a href={JsonFile[16].href}><i className="fas fa-phone me-3 text-secondary"> +91 79843 41366</i></a>
          <a href={JsonFile[17].href}><i className="fas fa-phone me-3 text-secondary"> +91 87350 14676</i></a>
        </div>
  
      </div>
  
    </div>
  </section>
</footer>
</div>
  );
};
export default Conatact;