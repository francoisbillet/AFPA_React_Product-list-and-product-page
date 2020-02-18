import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  //   console.log(product);
  return (
    <div className="product">
      <img src={product.img} />
      <div className="product-content">
        <Link to={`/product/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
