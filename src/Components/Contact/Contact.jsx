import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="container">
        <div className={`${styles.headOfCont} mb-4`}>
          <h2 className="text-uppercase fw-bolder fa-3x text-center mb-3">
            Contact Me
          </h2>
          <div
            className={`d-flex justify-content-center align-items-center text-center`}
          >
            <div className={`${styles.line}`}></div>
            <div className={`${styles.starIcon}`}>
              <i className="fa-solid fa-star fa-2x mx-3"></i>
            </div>
            <div className={`${styles.line}`}></div>
          </div>
        </div>
        <div className="form-floating mb-3 w-75 mx-auto border-bottom ">
          <input
            className="form-control border-0 mb-3"
            id="floatingInput"
            placeholder="Name"
          />
          <label className="fs-4 text-secondary" htmlFor="floatingInput">
            Name
          </label>
        </div>
        <div className="form-floating mb-3 w-75 mx-auto border-bottom ">
          <input
            className="form-control border-0 mb-3"
            type="email"
            id="floatingInput"
            placeholder="Email Address"
          />
          <label className="fs-4 text-secondary" htmlFor="floatingInput">
            Email Address
          </label>
        </div>
        <div className="form-floating mb-3 w-75 mx-auto border-bottom">
          <input
            className="form-control border-0 mb-3"
            id="floatingInput"
            placeholder="Phone Number"
          />
          <label className="fs-4 text-secondary" htmlFor="floatingInput">
            Phone Number
          </label>
        </div>
        <div className="form-floating mb-5 w-75 mx-auto border-bottom">
          <textarea
            className={`form-control border-0 ${styles.mess}`}
            placeholder="Message"
            id="floatingTextarea"
          ></textarea>
          <label htmlFor="floatingTextarea" className="fs-4 text-secondary">
            Message
          </label>
        </div>
        <div className="mb-3 w-75 mx-auto">
          <button className="btn btn-primary p-3">Send</button>
        </div>
      </div>
    </section>
  );
}
