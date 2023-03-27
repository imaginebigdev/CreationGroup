/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const FooterArch = () => {
  return (
    <footer className="sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contacto</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>creationgroup.ok@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Telefono</h6>
                    <p>+54 351 221 4907</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              {/* <div className="title">
                <h5>Ulimos Eventos</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <img src="/img/blog/event1.png" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      Brillo Corporativo: Una noche de celebración y
                      reconocimiento
                    </p>
                    <span className="date main-color">14 ene 2023</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="/img/blog/event2.png" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      Un Futuro Juntos: Jornada de trabajo en equipo y
                      colaboración
                    </p>
                    <span className="date main-color">22 sep 2022</span>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
                <h4>Creation Group</h4>
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArch;
