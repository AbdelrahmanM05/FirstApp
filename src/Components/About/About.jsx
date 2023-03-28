import React from "react";
import styles from "./About.module.css";
export default function About() {
  return (
    <>
      <section className={`${styles.aboutBg} py-5`} id="about">
        <div className="container">
          <div className="head_about mb-5 text-center">
              <h2 className="text-uppercase text-white mb-3">About</h2>
            <div className="head_about d-flex justify-content-center align-items-center text-center">
              <div className={`${styles.line}`}></div>
              <div className={`${styles.starIcon}`}>
                <i className="fa-solid fa-star fa-2x text-white mx-3"></i>
              </div>
              <div className={`${styles.line}`}></div>
            </div>
          </div>
          <div className="row text-white">
            <div className="col-md-4 px-4 ms-auto">
              <div className="freelancer">
                <p className="lead mb-5 fw-bolder">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-4 px-4 me-auto">
              <div className="create">
                <p className="lead fw-bold">
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
