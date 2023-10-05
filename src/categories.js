import React from 'react';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Categories() {
    const [allCategories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then((response) => response.json())
        .then((data) => setCategories(data));     
    }, []);

    const listCategories = allCategories.map(category =>
        <div> 
            <>
            <button className='buttons'><Link to={`category/${category}`}>{category}</Link></button>
            </>
        </div>
    );

    return (
        <>
        <ul className="ListProducts">
            {listCategories}
            <button className="buttons"><Link to={"/"}>See all</Link></button>
        </ul>
        </>
    );
}