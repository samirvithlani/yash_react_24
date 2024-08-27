import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export const ProductComponent = () => {
    //hook.
    const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ProductComponent</h1>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Iphone 15</h5>
            <p className="card-text">
              whatever
            </p>
            <button onClick={()=>{dispatch(addToCart({id:101,name:"iphone15"}))}}  className="btn btn-primary">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Iphone 16</h5>
            <p className="card-text">
              whatever
            </p>
            <button href="#" className="btn btn-primary">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
