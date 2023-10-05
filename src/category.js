import React from 'react';
import {useEffect, useReducer} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

import { actions, initialState, productReducer } from "./reducer";

export default function Category() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const {products, error} = state;

  const {category} = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => response.json())
        .then((data) => 
            dispatch({ type: actions.FETCH_PRODUCT_SUCCESS, payload: data})
        )
        .catch((e) =>
            dispatch({ type: actions.FETCH_PRODUCT_FAIL, payload: e.message})
        ); 
  }, []);

  const listProducts = products.map(product =>
    <div className="Product" key={product.id}>
        <>
            <img src={product.image} alt={product.category}
            width="90px"
            height="120px"
            />
            <div className="Text">
                <h4>{product.title}</h4>
                <p>Por ${product.price}</p>
                <button><Link to={`products/${product.id}`}>See details</Link></button>
            </div>
        </>
    </div>
);

return (
    <>
    <ul className="ListProducts">
        {error && <div>{error}</div>}
        {listProducts}
    </ul>
    </>
);
}