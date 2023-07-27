import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const EditProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>{console.log(product)}</div>;
};

export default EditProduct;
