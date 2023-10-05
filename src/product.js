import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  function handleClick() {
    if (typeof(localStorage) !== "undefined") {
      const storedList = localStorage.getItem('cart');
      const currentList = storedList ? JSON.parse(storedList) : [];

      currentList.push(product)
      localStorage.setItem('cart', JSON.stringify(currentList));
      } 
    console.log(localStorage);
  }

  return (
    <>
      {product ? (
        <>
        <div className="Details">
          <>
            <img src={product.image} alt={product.category}
            width="180px"
            height="210px"
            />
            <div className="Text2">
                <h2>{product.title}</h2>
                <p>Only for ${product.price}</p>
                <p>{product.description}</p>
                <button onClick={handleClick}>Add to Cart :D</button>
            </div>
          </>
        </div>
        </>
      ) : (
        <div> loading... </div>
      )}
    </>
  );
}
