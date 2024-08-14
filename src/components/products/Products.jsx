import React, { useState } from "react";
import { ProductList } from "./ProductList";
import { ProductContext } from "../../productContext";

export const Products = () => {
  var pname = "iphone";
  const [products, setproducts] = useState([
    {
      id: 101,
      name: "iphone16",
    },
    {
      id: 102,
      name: "iphone17",
    },
  ]);

  const addProduct = (prod) => {};
  const deleteProduct = (id) => {
    var newProducts = products.filter((prod) => {
      return prod.id !== id;
    });
    setproducts(newProducts);
  };

  const productDispatcher = (action,payload)=>{

    switch(action){
        case "ADD_PRODUCT":
            addProduct(payload)
            break;
        case "DELETE_PRODUCT":
            deleteProduct(payload)
            break;
        default:
            break;        
    }

  }

  return (
    <div>
      <h1>PRODUCTS</h1>
      {/* <ProductList></ProductList> */}
      <ProductContext.Provider value={{ pname,products,productDispatcher }}>
        <ProductList></ProductList>
      </ProductContext.Provider>
    </div>
  );
};
