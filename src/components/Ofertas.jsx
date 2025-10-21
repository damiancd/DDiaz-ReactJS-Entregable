import React from 'react';
import ProductList from './ProductList';

const Ofertas = () => {
  return (
    <div className="container">
      <h1>OfertON!</h1>
      <ProductList category="electronics" />
    </div>
  );
};

export default Ofertas;