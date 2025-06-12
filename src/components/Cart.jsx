import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removetocart } from "../redux/ActionCreator";
import Footer from "./Footer";

const Cart = () => {
  const cartdata = useSelector((state) => state);
  let dataArr = cartdata.Product_data.cartData;
  const dispatch = useDispatch();
  let total = dataArr.reduce((acc, ele) => {
    if (/,/.test(ele.Price)) {
      ele.Price = +ele.Price.replace(/,/g, "");
    } else {
      ele.Price = +ele.Price;
    }
    return acc + ele.Price * +ele.quan;
  }, 0);

  return (
    <>
      {dataArr.length ? (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="fs-3 fw-bold my-3">Total Items</div>
              {dataArr.map((ele) => (
                <div>
                  <div
                    className="mb-3 d-flex justify-content-around flex-wrap align-content-center border rounded-3"
                    style={{ height: "100px" }}
                  >
                    <div style={{ height: "80px", width: "25%" }}>
                      <img
                        src={ele.image}
                        className="h-100 w-100 object-fit-contain"
                      />
                    </div>
                    <div className="fs-5 fw-semibold d-flex flex-wrap align-content-center  w-25 justify-content-center">
                      {ele.Brand}
                    </div>
                    <div className="fs-5 fw-semibold d-flex flex-wrap align-content-center w-25 justify-content-center">
                      {ele.Price} X{" "}
                      <span className="text-primary"> {ele.quan}</span>
                    </div>
                    <div className="d-flex flex-wrap align-content-center w-25 justify-content-center">
                      <div
                        className="btn btn-primary me-2 fs-4"
                        onClick={() => dispatch(addtocart(ele))}
                      >
                        +
                      </div>
                      <div
                        className="btn btn-danger fs-4"
                        onClick={() => dispatch(removetocart(ele.id))}
                      >
                        -
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-4">
              <div className="fs-3 fw-bold my-3 ">Total Price</div>
              <div
                className="border rounded-3"
                style={{ height: "180px", overflowY: "scroll" }}
              >
                <div>
                  {dataArr.map((ele, i) => (
                    <div
                      className="border d-flex  flex-wrap align-content-center fw-semibold"
                      style={{ height: "50px", fontSize: "1.05em" }}
                    >
                      <div style={{ width: "33.3%" }} className="text-center">
                        {i + 1}
                      </div>
                      <div style={{ width: "33.3%" }} className="text-center">
                        {ele.Brand}
                      </div>
                      <div style={{ width: "33.3%" }} className="text-center">
                        {ele.Price}/- * {ele.quan}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-around fs-3 fw-bold">
                <div>Total Price</div>
                <div>:</div>
                <div>{total}/-</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center fs-3 fw-bold text-danger">
          Cart is empty.
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
