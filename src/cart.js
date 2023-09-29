import React from 'react';

export default function Cart() {
  const listCart = JSON.parse(localStorage.getItem('cart'))

  const showCart = listCart ? (listCart.map(product =>
    <div className="Product" key={product.id}>
      <>
        <img src={product.image} alt={product.category}
        width="90px"
        height="120px"
        />
        <div className="Text">
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          </div>
        </>
    </div>
  )):[];

  function emptyCart() {
    localStorage.clear();
  }

  const bill = listCart ? (listCart.reduce((accumulator, product) => accumulator + product.price, 0)):[0];
  
  return (
    <>
    {listCart ? (
      <>
      <div>
        <div>
          <h2>Total: ${bill}</h2>
          <button>Proceed to checkout :D</button>
        </div>
        <div className = "ListProducts">{showCart}</div>
      </div>
      <button onClick={emptyCart}>Empty Cart :(</button>
      </>
      ) : (
        <h2> Your cart is empty :( </h2>
      )}
    </>
  );
}