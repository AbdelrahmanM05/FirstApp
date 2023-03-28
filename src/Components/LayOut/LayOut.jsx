import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

export default function LayOut() {
  return (
    <div className="vh-100">
      <Navbar />
      {/* <Home />
      <Portfolio/>
      <About/> */}
      <Outlet />
      <Footer />
    </div>
  );
}
