import React from "react";
import App from "../../App";
import "@fortawesome/fontawesome-free";
import styles from "./Home.module.css"

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

export default function Home() {
  return (
    <>
      <header className="py-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="home-content text-center">
            <img src={images["avataaars.svg"]} className={`${styles.imgW} mb-3`} alt="avataaars" />
            <h1 className="text-uppercase fw-bolder text-white fa-4x mb-4">
              Start React
            </h1>
            <div className={`${styles.headOfHome} text-center`}>
              <div className={`${styles.starIcon}`}>
                <i className="fa-solid fa-star fa-2x"></i>
              </div>
            </div>
            <p className="text-white fs-4">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
