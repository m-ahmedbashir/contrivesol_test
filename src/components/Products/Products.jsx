import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import Header from "../Header/Header";
const Products = () => {
  // state hooks
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // getting products => api call
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((data) => {
        setProducts(data.data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="row text-center">
        {isLoading && <h2 className="text-center">Loading Data...</h2>}
        {products.length !== 0 &&
          products.map((product) => (
            <div className="col-md-3 col-12 p-2">
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
