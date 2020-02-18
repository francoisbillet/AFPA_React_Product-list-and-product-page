import React, { useEffect } from "react";
import Infos from "./Infos";
import { Link, useParams } from "react-router-dom";
import Image from "./Image";

const useProduct = () => {
  const [products, setProducts] = React.useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://server-ten.now.sh")
      .then(body => body.json())
      .then(response => {
        setProducts(response);
      });
  }, []);

  const product = products.find(product => {
    return product.id === id;
  });

  return [product];
};

const ProductPage = () => {
  const [product] = useProduct();
  //   console.log(product);
  return (
    <main className="product">
      <Link to={"/"}>
        <button>Retour</button>
      </Link>
      <div className="left-column">
        <Image
          src={product ? product.img : ""} // pas les {} parce que string uniquement
          alt={product ? product.title : ""}
        />
      </div>
      <div className="right-column">
        <Infos product={product} />
      </div>
    </main>
  );
};

export default ProductPage;
