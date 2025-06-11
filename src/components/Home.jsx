import React from "react";
import pic1 from "../images/crousel-photo1.jpg";
import pic2 from "../images/crousel-photo2.jpg";
import pic3 from "../images/crousel-photo3.jpg";
import pic4 from "../images/crousel-photo4.jpg";
import pic5 from "../images/crousel-photo5.jpg";
import ac from "../images/ac.jpg";
import fridge from "../images/fridge.jpg";
import oven from "../images/oven.jpg";
import washing from "../images/washing-machine.jpg";
import ps51 from "../images/ps51.jpg";
import ps52 from "../images/ps52.jpg";
import ps53 from "../images/ps53.jpg";
import ps54 from "../images/ps54.jpg";
import cushion from "../images/cushion.jpg";
import figurine from "../images/figurine.jpg";
import homeStorage from "../images/homeStorage.jpg";
import light from "../images/light.jpg";
import cleaning from "../images/cleaning.jpg";
import tyre from "../images/tyre.jpg";
import helmet from "../images/helmet.jpg";
import vaccum from "../images/vaccum.jpg";
import cloth1 from "../images/cloth1.jpg";
import cloth2 from "../images/cloth2.jpg";
import cloth3 from "../images/cloth3.jpg";
import cloth4 from "../images/cloth4.jpg";
import cloth5 from "../images/cloth5.jpg";
import cloth6 from "../images/cloth6.jpg";
import cloth7 from "../images/cloth7.jpg";
import cloth8 from "../images/cloth8.jpg";
import cloth9 from "../images/cloth9.jpg";
import cloth10 from "../images/cloth10.jpg";
import cloth11 from "../images/cloth11.jpg";
import cloth12 from "../images/cloth12.jpg";
import cloth13 from "../images/cloth13.jpg";
import promo from "../images/9742750.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  let clothArr = [
    cloth1,
    cloth2,
    cloth3,
    cloth4,
    cloth5,
    cloth6,
    cloth7,
    cloth8,
    cloth9,
    cloth10,
    cloth11,
    cloth12,
    cloth13,
  ];

  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ height: "600px" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pic1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic5} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev border h-50"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          style={{ width: "10%" }}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next border h-50"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          style={{ width: "10%" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden border">Next</span>
        </button>
      </div>

      {/* Product */}
      <div
        className="position-relative px-3"
        style={{
          bottom: "300px",
          backgroundColor: "transparent",
          // backgroundColor: "#E3E6E6",
          height: "500px",
        }}
      >
        <div className="row row-cols-4 g-4">
          <div>
            <div className="border bg-light p-3" style={{ height: "430px" }}>
              <h5 className="fw-bold px-2">
                Appliances for your home | Up to 55% off
              </h5>
              <div>
                <div className="d-flex p-2">
                  <div>
                    <Link to="/product/1">
                      <img src={ac} className="image" id="1" />
                    </Link>
                    <p className="p">Air conditioners</p>
                  </div>
                  <div className="ps-3">
                    <Link to="/product/2">
                      <img src={fridge} className="image" id="2" />
                    </Link>
                    <p className="p">Refrigerators</p>
                  </div>
                </div>
                <div className="d-flex p-2">
                  <div>
                    <Link to="/product/3">
                      <img src={oven} className="image" id="3" />
                    </Link>
                    <p className="p">Microwaves</p>
                  </div>
                  <div className="ps-3">
                    <Link to="/product/4">
                      <img src={washing} className="image" id="4" />
                    </Link>
                    <p className="p">Washing Machines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border bg-light p-3" style={{ height: "430px" }}>
              <h5 className="fw-bold px-2">
                PlayStation 5 Slim & Accessories | No Cost EMI*
              </h5>
              <div>
                <div className="d-flex p-2">
                  <div>
                    <Link to="/product/5">
                      <img src={ps51} className="image" id="5" />
                    </Link>
                    <p className="p">PS5 Slim digital edition</p>
                  </div>
                  <div className="ps-3">
                    <Link to="/product/6">
                      <img src={ps52} className="image" id="6" />
                    </Link>
                    <p className="p">PS5 Slim disc edition</p>
                  </div>
                </div>
                <div className="d-flex p-2">
                  <div>
                    <Link to="/product/7">
                      <img src={ps53} className="image" id="7" />
                    </Link>
                    <p className="p">PS5 Slim Fortnite digital edition</p>
                  </div>
                  <div className="ps-3">
                    <Link to="/product/8">
                      <img src={ps54} className="image" id="8" />
                    </Link>
                    <p className="p">PS5 DualSense Wireless Controller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border bg-light p-3" style={{ height: "430px" }}>
              <h5 className="fw-bold px-2">Revamp your home in style</h5>
              <div>
                <div className="d-flex p-2">
                  <div>
                    <Link to="/product/9">
                      <img src={cushion} className="image" id="9" />
                    </Link>
                    <p className="p">
                      Cushion covers,
                      <br />
                      bedsheets & more
                    </p>
                  </div>
                  <div className="ps-3">
                    <Link to="/product/10">
                      <img src={figurine} className="image" id="10" />
                    </Link>
                    <p className="p">Figurines, vases & more</p>
                  </div>
                </div>
                <div className="d-flex p-2">
                  <div>
                    <Link to="/product/11">
                      <img src={homeStorage} className="image" id="11" />
                    </Link>
                    <p className="p">Home storage</p>
                  </div>
                  <div className="ps-3">
                    <Link to="/product/12">
                      <img src={light} className="image" id="12" />
                    </Link>
                    <p className="p">Lighting solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border bg-light p-3" style={{ height: "430px" }}>
              <h5 className="fw-bold px-2">
                Automotive essentials | Up to 60% off
              </h5>
              <div>
                <div className="d-flex p-2">
                  <div>
                    <Link to="/product/13">
                      <img src={cleaning} className="image" id="13" />
                    </Link>
                    <p className="p">Cleaning accessories</p>
                  </div>
                  <div className="ps-3">
                    <Link to="/product/14">
                      <img src={tyre} className="image" id="14" />
                    </Link>
                    <p className="p">Tyre & rim care</p>
                  </div>
                </div>
                <div className="d-flex p-2">
                  <div>
                    <Link to="/product/15">
                      <img src={helmet} className="image" id="15" />
                    </Link>
                    <p className="p">Helmets</p>
                  </div>
                  <div className="ps-3">
                    <Link to="/product/16">
                      <img src={vaccum} className="image" id="16" />
                    </Link>
                    <p className="p">Vaccum cleaner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Promtional Banner */}

        <div className="mt-3 bg-white p-3" style={{ height: "300px" }}>
          <h4 style={{ height: "12%" }}>
            Up to 75% off | Get casual ready from Small Businesses
          </h4>
          <div style={{ height: "90%", overflowX: "scroll" }}>
            <div style={{ width: "165%" }} className="d-flex h-100">
              {clothArr.map((ele) => (
                <div style={{ width: "13%", height: "95%" }} className="px-4">
                  <img src={ele} className="w-100 h-100 object-fit-fit" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#E3E6E6",
          bottom: "600px",
          height: "600px",
          zIndex: "-1",
        }}
        className="position-relative"
      >
        {/* one big promo image */}
        <div style={{ paddingTop: "600px", width: "100%", height: "500px" }}>
          <img src={promo} width="100%" height="500px" />
          {/*Making footer */}
          {/* <div
            className="d-flex flex-wrap align-content-center justify-content-center text-white"
            style={{
              height: "500px",
              backgroundColor: "#232F3E",
              zIndex: "100",
            }}
          >
            <div
              className="d-flex justify-content-around"
              style={{ width: "75%" }}
            >
              <div
                className="d-flex flex-column justify-content-between"
                style={{ height: "180px" }}
              >
                <h5>
                  Get to Know
                  <br />
                  Us
                </h5>
                <div>About Amazon</div>
                <div>Career</div>
                <div>Press Releases</div>
                <div>Amazon Science</div>
              </div>

              <div
                className="d-flex flex-column justify-content-between"
                style={{ height: "150px" }}
              >
                <h5>
                  Connect with <br />
                  Us
                </h5>
                <Link className="footerLinks">
                  <div>Facebook</div>
                </Link>
                <Link className="footerLinks">
                  <div>Twitter</div>
                </Link>
                <Link className="footerLinks">
                  <div>Instagram</div>
                </Link>
              </div>

              <div
                className="d-flex flex-column justify-content-between"
                style={{ height: "230px" }}
              >
                <h5>Make Money with Us</h5>
                <Link className="footerLinks">
                  <div>Sell on Amazon</div>
                </Link>
                <Link className="footerLinks">
                  <div>
                    Sell under Amazon
                    <br /> Accelerator
                  </div>
                </Link>
                <Link className="footerLinks">
                  <div>Protect and Build Your Brand</div>
                </Link>
                <Link className="footerLinks">
                  <div>Amazon Global Selling</div>
                </Link>
                <Link className="footerLinks">
                  <div>Supply to Amazon</div>
                </Link>
                <Link className="footerLinks">
                  <div>Become an Affiliate</div>
                </Link>
              </div>

              <div
                className=" d-flex flex-column justify-content-between"
                style={{ height: "230px" }}
              >
                <h5>Let Us Help You</h5>
                <Link className="footerLinks">
                  <div>Your Account</div>
                </Link>
                <Link className="footerLinks">
                  <div>Returns Centre</div>
                </Link>
                <Link className="footerLinks">
                  <div>
                    Recalls and Product Safety
                    <br /> Alerts
                  </div>
                </Link>
                <Link className="footerLinks">
                  <div>100% Purchase Protection</div>
                </Link>
                <Link className="footerLinks">
                  <div>Amazon App Download</div>
                </Link>
                <Link className="footerLinks">
                  <div>Help</div>
                </Link>
              </div>
            </div>
          </div> */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
