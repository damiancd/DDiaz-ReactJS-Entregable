{/*import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  const total = carrito.reduce((acc, item) => acc + Number(item.price) * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Tu carrito está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3>Carrito de compras</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
                {" "}
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => handleShow(prod)}
                >
                  Editar
                </Button>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="text-end">Total a pagar: ${total.toFixed(2)}</h5>
    </Container>
  );
};

export default Carrito;*/}

{/*import React, { useContext, useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [productoEdit, setProductoEdit] = useState(null);

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  const handleShow = (producto) => {
    setProductoEdit(producto);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleGuardar = () => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === productoEdit.id ? { ...item, cantidad: productoEdit.cantidad } : item
      )
    );
    setShow(false);
  };

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.price) * item.cantidad,
    0
  );

  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Tu carrito está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3>Carrito de compras</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>{' '}
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => handleShow(item)}
                >
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5 className="text-end">Total a pagar: ${total.toFixed(2)}</h5>

      {/* Modal para editar cantidad 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar cantidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productoEdit && (
            <Form.Group>
              <Form.Label>{productoEdit.title}</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={productoEdit.cantidad}
                onChange={(e) =>
                  setProductoEdit({
                    ...productoEdit,
                    cantidad: Number(e.target.value),
                  })
                }
              />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleGuardar}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Carrito;*/}

import React, { useContext } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  const cambiarCantidad = (id, nuevaCantidad) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: Number(nuevaCantidad) } : item
      )
    );
  };

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.price) * item.cantidad,
    0
  );

  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Tu carrito está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3>Carrito de compras</h3>
      <Table striped bordered hover responsive className="mt-3 align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${Number(item.price).toFixed(2)}</td>

              {/* Campo editable para cantidad */}
              <td style={{ width: "50px" }}>
                <Form.Control
                  type="number"
                  min="1"
                  value={item.cantidad}
                  onChange={(e) => cambiarCantidad(item.id, e.target.value)}
                  size="sm"
                />
              </td>

              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>

              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5 className="text-end mt-3">
        Total a pagar: <strong>${total.toFixed(2)}</strong>
      </h5>
    </Container>
  );
};

export default Carrito;