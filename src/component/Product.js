import React, { useState } from "react";

function Product(props) {
  const [count, setCount] = useState("");

  const add = () => {
    if (count * 1 < 10) {
      setCount(count * 1 + 1);
    }
  };

  const minus = () => {
    
    if (count > 0) {
      setCount(count * 1 - 1);
    } 
  };
  return (
    <div>
      <center>
        <h1 className="color">Brand Product</h1>
      </center>
      <p>{props.children}</p>
      <img className="col1" src={props.pic} alt="Product" />
      <div className="margin">
        <h3 className="back">
          {props.sname}:{count}
        </h3>
      </div>
      <div className="margin1">
        <button className="col2" onClick={minus}>-</button>
        <button className="col3" onClick={add}>+</button>
      </div>
    </div>
  );
}
export default Product;
