import React from 'react';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Stock() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));     
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
            {listProducts}
        </ul>
        </>
    );
}