import React from "react";
import styles from "./Portfolio.module.css";

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

export default function Portfolio() {
  return (
    <section className="py-5" id="portfolio">
      <div className="container">
        <div className={`${styles.headOfPort} mb-5`}>
          <h2 className="text-uppercase fw-bolder fa-3x text-center mb-3">
            Portfolio
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
        <div className="row gy-4">
          <div className="col-sm-6 col-lg-4">
            <div
              className={`${styles.singlePort} `}
              data-bs-toggle="modal"
              data-bs-target="#cabin"
            >
              <div className={`${styles.iconInImg} rounded-2`}>
                <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
              </div>
              <img
                src={images["cabin.png"]}
                className="img-fluid rounded-2"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className={`${styles.singlePort} `}
              data-bs-toggle="modal"
              data-bs-target="#cake"
            >
              <div className={`${styles.iconInImg} rounded-2`}>
                <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
              </div>
              <img
                src={images["cake.png"]}
                className="img-fluid rounded-2"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className={`${styles.singlePort} `}
              data-bs-toggle="modal"
              data-bs-target="#circus"
            >
              <div className={`${styles.iconInImg} rounded-2`}>
                <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
              </div>
              <img
                src={images["circus.png"]}
                className="img-fluid rounded-2"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className={`${styles.singlePort} `}
              data-bs-toggle="modal"
              data-bs-target="#game"
            >
              <div className={`${styles.iconInImg} rounded-2`}>
                <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
              </div>
              <img
                src={images["game.png"]}
                className="img-fluid rounded-2"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className={`${styles.singlePort} `}
              data-bs-toggle="modal"
              data-bs-target="#safe"
            >
              <div className={`${styles.iconInImg} rounded-2`}>
                <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
              </div>
              <img
                src={images["safe.png"]}
                className="img-fluid rounded-2"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className={`${styles.singlePort} `}
              data-bs-toggle="modal"
              data-bs-target="#submarine"
            >
              <div className={`${styles.iconInImg} rounded-2`}>
                <i className="fa-solid fa-plus fa-5x fw-bolder text-white"></i>
              </div>
              <img
                src={images["submarine.png"]}
                className="img-fluid rounded-2"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10">
            <div
              className="modal fade"
              id="cabin"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header border-bottom-0">
                    <button
                      type="button"
                      className="btn ms-auto pe-5 border-0"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i
                        className={`fa-solid fa-close fa-3x ${styles.btnClose}`}
                      ></i>
                    </button>
                  </div>
                  <div className="modal-body p-5">
                    <div className={`${styles.headOfPort} mb-5`}>
                      <h2 className="text-uppercase fw-bolder fa-3x text-center mb-3">
                        log cabin
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
                    <img
                      src={images["cabin.png"]}
                      className="w-100 rounded-2 mb-4"
                      alt=""
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer border-top-0">
                    <button
                      type="button"
                      className="btn btn-primary mx-auto"
                      data-bs-dismiss="modal"
                    >
                      <i className="fa-solid fa-close me-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10">
            <div
              className="modal fade"
              id="cake"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header border-bottom-0">
                    <button
                      type="button"
                      className="btn ms-auto pe-5 border-0"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i
                        className={`fa-solid fa-close fa-3x ${styles.btnClose}`}
                      ></i>
                    </button>
                  </div>
                  <div className="modal-body p-5">
                    <div className={`${styles.headOfPort} mb-5`}>
                      <h2 className="text-uppercase fw-bolder fa-3x text-center mb-3">
                        taste cake
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
                    <img
                      src={images["cake.png"]}
                      className="w-100 rounded-2 mb-4"
                      alt=""
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer border-top-0">
                    <button
                      type="button"
                      className="btn btn-primary mx-auto"
                      data-bs-dismiss="modal"
                    >
                      <i className="fa-solid fa-close me-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10">
            <div
              className="modal fade"
              id="circus"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header border-bottom-0">
                    <button
                      type="button"
                      className="btn ms-auto pe-5 border-0"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i
                        className={`fa-solid fa-close fa-3x ${styles.btnClose}`}
                      ></i>
                    </button>
                  </div>
                  <div className="modal-body p-5">
                    <div className={`${styles.headOfPort} mb-5`}>
                      <h2 className="text-uppercase fw-bolder fa-3x text-center mb-3">
                        circus tent
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
                    <img
                      src={images["circus.png"]}
                      className="w-100 rounded-2 mb-4"
                      alt=""
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer border-top-0">
                    <button
                      type="button"
                      className="btn btn-primary mx-auto"
                      data-bs-dismiss="modal"
                    >
                      <i className="fa-solid fa-close me-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10">
            <div
              className="modal fade"
              id="game"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header border-bottom-0">
                    <button
                      type="button"
                      className="btn ms-auto pe-5 border-0"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i
                        className={`fa-solid fa-close fa-3x ${styles.btnClose}`}
                      ></i>
                    </button>
                  </div>
                  <div className="modal-body p-5">
                    <div className={`${styles.headOfPort} mb-5`}>
                      <h2 className="text-uppercase fw-bolder fa-3x text-center mb-3">
                        CONTROLLER
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
                    <img
                      src={images["game.png"]}
                      className="w-100 rounded-2 mb-4"
                      alt=""
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer border-top-0">
                    <button
                      type="button"
                      className="btn btn-primary mx-auto"
                      data-bs-dismiss="modal"
                    >
                      <i className="fa-solid fa-close me-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10">
            <div
              className="modal fade"
              id="safe"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header border-bottom-0">
                    <button
                      type="button"
                      className="btn ms-auto pe-5 border-0"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i
                        className={`fa-solid fa-close fa-3x ${styles.btnClose}`}
                      ></i>
                    </button>
                  </div>
                  <div className="modal-body p-5">
                    <div className={`${styles.headOfPort} mb-5`}>
                      <h2 className="text-uppercase fw-bolder fa-3x text-center mb-3">
                        locked safe
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
                    <img
                      src={images["safe.png"]}
                      className="w-100 rounded-2 mb-4"
                      alt=""
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer border-top-0">
                    <button
                      type="button"
                      className="btn btn-primary mx-auto"
                      data-bs-dismiss="modal"
                    >
                      <i className="fa-solid fa-close me-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10">
            <div
              className="modal fade"
              id="submarine"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header border-bottom-0">
                    <button
                      type="button"
                      className="btn ms-auto pe-5 border-0"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i
                        className={`fa-solid fa-close fa-3x ${styles.btnClose}`}
                      ></i>
                    </button>
                  </div>
                  <div className="modal-body p-5">
                    <div className={`${styles.headOfPort} mb-5`}>
                      <h2 className="text-uppercase fw-bolder fa-3x text-center mb-3">
                        submarine
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
                    <img
                      src={images["submarine.png"]}
                      className="w-100 rounded-2 mb-4"
                      alt=""
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer border-top-0">
                    <button
                      type="button"
                      className="btn btn-primary mx-auto"
                      data-bs-dismiss="modal"
                    >
                      <i className="fa-solid fa-close me-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
