import React from 'react';
import {useParams} from "react-router-dom";
import {useProducts} from "./context";

export default function Product() {
  const {id} = useParams();
  const {setProductId, selectedProduct} = useProducts();

  setProductId(id);

  function handleClick() {
    if (typeof(localStorage) !== "undefined") {
      const storedList = localStorage.getItem('cart');
      const currentList = storedList ? JSON.parse(storedList) : [];

      currentList.push(selectedProduct)
      localStorage.setItem('cart', JSON.stringify(currentList));
    } 
  }

  return (
    <>
      {selectedProduct ? (
        <>
        <div className="Details">
          <>
            <img src={selectedProduct.image} alt={selectedProduct.category}
            width="300px"
            height="350px"
            />
            <div className="Text2">
                <h2>{selectedProduct.title}</h2>
                <p>Only for ${selectedProduct.price}</p>
                <p>{selectedProduct.description}</p>
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
