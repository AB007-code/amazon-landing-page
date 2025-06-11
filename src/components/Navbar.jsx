import React, { useState } from "react";
import "../index.css";
import image1 from "../images/Amazon-Logo-White.png";
import flag from "../images/india-flag.png";
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  const [focus, setFocus] = useState("false");
  const [focus1, setFocus1] = useState("false");
  const [val, setVal] = useState("EN");

  // for handing the focus
  const inputHandel = () => {
    setFocus1(true);
  };
  const btnHandel = () => {
    setFocus(true);
  };
  ///////////////////////////////////

  //   when click then language will be shown on the box.
  const optionHandel = (e) => {
    e.target.id ? setVal(e.target.id) : setVal(val);
  };

  return (
    <>
      <div className="nav-head d-flex justify-content-around">
        <div>
          <Link
            to="/home"
            className="h-100 w-100 d-flex flex-column justify-content-center"
          >
            <img
              src={image1}
              height="60%"
              width="100%"
              className="object-fit-contain mt-2"
            />
          </Link>
        </div>

        <div className="d-flex flex-wrap align-content-center">
          <div className="d-flex flex-column justify-content-end">
            <IoLocationOutline className="text-light fs-4" />
          </div>

          <div>
            <p className="text-secondary m-0">Delivering to bengaluru 560035</p>
            <p className="text-light fw-semibold m-0">Update location</p>
          </div>
        </div>
        <div className="d-flex flex-wrap align-content-center">
          <div
            className="d-flex flex-wrap align-content-center rounded-3 m-0"
            onBlur={() => setFocus1(false)}
            style={{
              border: focus1 == true ? "2px solid #F3A847" : "none",
            }}
          >
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle rounded-start-1 rounded-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={btnHandel}
                onBlur={() => setFocus(false)}
                style={{
                  border: focus == true ? "2px solid #F3A847" : "none",
                }}
              >
                All
              </button>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    All Categories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Alexa Skills
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Amazon Devices
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Amazon Fashion
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ width: "400px" }}>
              <input
                type="text"
                className="h-100 w-100 border-1"
                placeholder="Search Amazon.in"
                style={{ outline: "none" }}
                onClick={inputHandel}
              />
            </div>

            <div
              className="text-white d-flex justify-content-center flex-wrap align-content-center rounded-end-1"
              style={{
                width: "50px",
                backgroundColor: "#F3A847",
              }}
            >
              <CiSearch className="fs-3 text-dark" />
            </div>
          </div>
        </div>

        {/* <div className="h-100"> */}
        <div className="d-flex flex-wrap justify-content-center position-relative hoverContainer">
          <div
            className="d-flex justify-content-around flex-wrap align-content-center"
            style={{ width: "90px" }}
          >
            <div style={{ height: "18px", width: "25px" }}>
              <img src={flag} className="object-fit-cover h-100 w-100" />
            </div>
            <div className="displayLanguage">
              <span className="text-light fw-semibold">{val}</span>
              <span className="text-secondary">
                <FaCaretDown />
              </span>
            </div>
          </div>

          <div
            className="languageDiv position-absolute top-100 start-0 z-2 border"
            style={{
              height: "300px",
              width: "230px",
              backgroundColor: "#b5d9fc",
            }}
            onClick={optionHandel}
          >
            {/* <div className="d-flex justify-content-center"> */}
            <div className="d-flex w-75 justify-content-between px-1 my-2">
              <div
                className="optionDiv mt-1"
                style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  border: "1px solid",
                }}
              >
                <div
                  className="optionInnerDiv"
                  id="EN"
                  style={{ border: val == "EN" ? "5px solid orange" : "none" }}
                ></div>
              </div>
              <label>English-EN</label>
            </div>
            {/* </div> */}

            <div className="d-flex justify-content-center">
              <hr className="w-75" />
            </div>

            {/* <div className="d-flex justify-content-center"> */}
            <div className="d-flex w-75 px-1 justify-content-between my-2">
              <div
                className="optionDiv mt-1"
                style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  border: "1px solid",
                }}
              >
                <div
                  className="optionInnerDiv"
                  id="HI"
                  style={{ border: val == "HI" ? "5px solid orange" : "none" }}
                ></div>
              </div>
              <label>Hindi-HI</label>
            </div>
            {/* </div> */}

            {/* <div className="d-flex justify-content-center"> */}
            <div className="d-flex w-75 justify-content-between px-1 my-2">
              <div
                className="optionDiv mt-1"
                style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  border: "1px solid",
                }}
              >
                <div
                  className="optionInnerDiv"
                  id="TA"
                  style={{ border: val == "TA" ? "5px solid orange" : "none" }}
                ></div>
              </div>
              <label for="TA">Telugu-TA</label>
            </div>
            {/* </div> */}

            {/* <div className="d-flex justify-content-center"> */}
            <div className="d-flex w-75 justify-content-between px-1 my-2">
              <div
                className="optionDiv mt-1"
                style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  border: "1px solid",
                }}
              >
                <div
                  className="optionInnerDiv"
                  id="TE"
                  style={{ border: val == "TE" ? "5px solid orange" : "none" }}
                ></div>
              </div>
              <label>Telangana-TE</label>
            </div>
            {/* </div> */}

            {/* <div className="d-flex justify-content-center"> */}
            <div className="d-flex w-75 justify-content-between px-1 my-2">
              <div
                className="optionDiv mt-1"
                style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  border: "1px solid",
                }}
              >
                <div
                  className="optionInnerDiv"
                  id="KA"
                  style={{ border: val == "KA" ? "5px solid orange" : "none" }}
                ></div>
              </div>
              <label>Karnataka-KA</label>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div
          className="d-flex flex-column  justify-content-center position-relative signinDiv"
          style={{ fontSize: "0.8em" }}
        >
          <div className="text-white">Hello,sign in</div>
          <div className="fw-bold text-white">
            Account & Lists <FaCaretDown />
          </div>
          <div
            className=" position-absolute border top-100 z-2 languageDiv"
            style={{
              height: "400px",
              width: "500px",
              right: "-30%",
              backgroundColor: "#b5d9fc",
            }}
          >
            <div className="d-flex justify-content-center mt-3">
              <h5
                className="text-center w-50 text-dark rounded-3 p-1"
                style={{ backgroundColor: "yellow" }}
              >
                <Link>Sign in</Link>
              </h5>
            </div>
            <div className="text-center">
              New Customer? <Link>Start Here</Link>{" "}
            </div>
            <div className="mx-3">
              <hr />
            </div>

            <div className="d-flex justify-content-around">
              <div style={{ fontSize: "1.3em" }}>
                <div className="fw-bold">Your List</div>
                <div>
                  <div>Create a Wish List</div>
                  <div>Wish from Any Website </div>
                  <div>Baby Wishlist</div>
                  <div>Discover Your Style</div>
                  <div>Explore Showroom</div>
                </div>
              </div>

              <div style={{ height: "250px", border: "0.1px solid" }}></div>

              <div style={{ fontSize: "1.3em" }}>
                <div className="fw-bold">Your Account</div>
                <div>
                  <div>Your Account</div>
                  <div>Your Orders </div>
                  <div>Your Wish List</div>
                  <div>Your Recommendations</div>
                  <div>Your Prime Membership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-white d-flex  flex-wrap align-content-center"
          style={{ fontSize: "0.95em" }}
        >
          <div>
            Return &<br />
            <span className="fw-bold">Orders</span>
          </div>
        </div>

        <div className="text-white d-flex flex-wrap align-content-center">
          <FaCartArrowDown className="fs-2" />
          <span className="d-flex flex-column justify-content-end">Cart</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
