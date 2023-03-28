import React from "react";
import "@fortawesome/fontawesome-free";
import styles from "./Footer.module.css"

export default function () {
  return (
    <footer className={`${styles.footerBg}`}>
      <div className="container py-5">
        <div className="row text-center text-white">
          <div className="col-md-4 mb-5">
            <div className="loctaion text-uppercase">
              <h4 className="mb-4 fw-bolder">Location</h4>
              <p className="fs-5 px-5 text-uppercase">2215 John Daniel Drive Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="around">
              <h4 className="fw-bolder mb-4">Around The Web</h4>
              <div className="icons d-flex justify-content-center">
                <div className={`${styles.socialIcon}`}>
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <div className={`${styles.socialIcon}`}>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <div className={`${styles.socialIcon}`}>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <div className={`${styles.socialIcon}`}>
                  <a href="">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about">
              <h4 className="fw-bolder">About Freelancer</h4>
              <p className=" fs-5 px-4">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.copyRight} py-4 text-center text-white`}>
        <p className="mb-0 fw-light">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
