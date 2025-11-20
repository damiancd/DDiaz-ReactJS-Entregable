import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';

const ProductList = ({ category = null }) =>{
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);
  const [barraDeBusqueda, setBarraDeBusqueda] = useState("");
  const [ordenPrecio, setOrdenPrecio] = useState("");

    useEffect(() => {
      let url = 'https://fakestoreapi.com/products'
      if (category){
        url = `https://fakestoreapi.com/products/category/${category}`;
      }

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }  

  const filteredProducts=products.filter(product=>
      product.title.toLowerCase().includes(barraDeBusqueda.toLowerCase()) ||
      product.description.toLowerCase().includes(barraDeBusqueda.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (ordenPrecio === "asc") return a.price - b.price;
    if (ordenPrecio === "desc") return b.price - a.price;
    return 0;
  });
  
  return (
  <>
    <Row className="align-items-end mb-3">

      <Col xs={12} md={6}>
        <Form.Label>Buscar Productos</Form.Label>
        <Form.Control
          type="text"
          placeholder="Buscar..."
          value={barraDeBusqueda}
          onChange={(e) =>setBarraDeBusqueda(e.target.value)}
        />
      </Col>

      {/* Select de ordenamiento */}
      <Col xs={12} md={4} className="mt-2 mt-md-0">  
      <Form.Label>Ordenar por precio</Form.Label>  
        <Form.Select
          value={ordenPrecio}
          onChange={(e) => setOrdenPrecio(e.target.value)}
        >
          <option value="">Seleccione...</option>
          <option value="asc">menor a mayor</option>
          <option value="desc">mayor a menor</option>
        </Form.Select>
        </Col>
    </Row>
    <Row>
      {sortedProducts.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
        </Col>
      ))}
    </Row>
  </>
  );
};

export default ProductList;