import React from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import data1 from "../MOCK_Data.json";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/ActionCreator";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let filterData;
  data1.forEach((ele) => {
    let id1 = ele[1]["data"];
    for (let i = 0; i < id1.length; i++) {
      if (id1[i].id == id) {
        filterData = id1[i];
        break;
      }
    }
  });

  const productStyle = {
    backgroundImage: `url(${filterData.banner})`,
    backgroundSize: "100% 320px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "320px",
    width: "100%",
  };
  return (
    <>
      <div style={productStyle}></div>
      <div
        className="d-flex flex-wrap align-content-center"
        style={{ height: "900px" }}
      >
        <div style={{ height: "800px", width: "40%" }} className="px-4">
          <img
            src={filterData.image}
            height="100%"
            width="100%"
            className="object-fit-contain"
          />
        </div>

        <div style={{ width: "60%" }}>
          <div className="fw-bold fs-3 p-3">{filterData.detail}</div>
          <div className="fs-5 p-3">
            <span className="fw-bold">Brand:</span> {filterData.Brand}
          </div>
          <div className="fs-5 p-3">
            <span className="fw-bold">Price:</span> {filterData["Price"]}/-
          </div>

          <div>
            <span className="fw-bold p-3 fs-5">Rating:</span>⭐⭐⭐⭐⭐
          </div>

          <div className="p-3">
            <div
              className="btn btn-primary me-3"
              onClick={() => dispatch(addtocart(filterData))}
            >
              Add to Cart
            </div>
            <div className="btn btn-danger">Remove to Cart</div>
          </div>

          <div className="p-3">
            <div className="fs-4 fw-bold">About this item</div>
            {filterData["about"].map((ele) => (
              <ul className="fs-5 fw-semibold">
                <li>{ele}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default ProductDetail;
