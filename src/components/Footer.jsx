import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex flex-wrap align-content-center justify-content-center text-white"
        style={{
          height: "500px",
          backgroundColor: "#232F3E",
          zIndex: "100",
        }}
      >
        <div className="d-flex justify-content-around" style={{ width: "75%" }}>
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
      </div>
    </>
  );
};

export default Footer;
