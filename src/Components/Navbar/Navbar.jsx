import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-DarkGray">
      <div className="container py-3">
        <Link
          className="navbar-brand text-white text-uppercase fs-3 fw-bolder"
          to=""
        >
          Start React
        </Link>
        <button
          className="btn-primary navbar-toggler p-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="d-flex">
            <span className="fs-6 text-white fw-bolder me-1 text-uppercase">
              {" "}
              Menu
            </span>
            <i className="fa-solid fa-bars text-white fs-6"></i>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link fs-4 me-3"
                aria-current="page"
                to="portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4 me-3" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4" to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
