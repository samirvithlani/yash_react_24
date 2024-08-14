import React, { useContext } from "react";
import { ProductDetail } from "./ProductDetail";
import { ProductContext } from "../../productContext";
import { MyButton } from "../MyButton";

export const ProductList = () => {
  const { pname, products, productDispatcher } = useContext(ProductContext);
  console.log(pname);

  const needtoCall= ()=>{
    alert("Need to call")
  }
  return (
    <div>
      <h1>Product List - {pname}</h1>
      <ul>
        {products?.map((prod) => {
          return (
            <div>
              
              <li key={prod.id}>
                {prod.id} -- {prod.name} <button onClick={()=>{productDispatcher("DELETE_PRODUCT",prod.id)}}>Delete</button>
              </li>
            </div>
          );
        })}
      </ul>
      <ProductDetail></ProductDetail>
      <MyButton funName = {needtoCall} name = "abc"></MyButton>
    </div>
  );
};
