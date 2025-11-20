import React, { useContext, useState } from 'react';
import { Container, Table, Button, Form, Toast, ToastContainer } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  // Estados para toasts
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
    triggerToast("Producto eliminado del carrito");
  };

  const cambiarCantidad = (id, nuevaCantidad) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: Number(nuevaCantidad) } : item
      )
    );
  };

  const vaciarCarrito = () => {
    if (window.confirm("¿Seguro que quieres vaciar todo el carrito?")) {
      setCarrito([]);
      triggerToast("Carrito vaciado correctamente");
    }
  };

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.price) * item.cantidad,
    0
  );

  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Tu carrito está vacío</h3>

         {/* Toast visible aunque esté vacío */}
        <ToastContainer position="bottom-end" className="p-3">
          <Toast
            bg="success"
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={2000}
            autohide
          >
            <Toast.Body className="text-white">{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>

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

      <div className="text-end mt-3">
        <Button variant="outline-danger" onClick={vaciarCarrito}>
          Vaciar carrito
        </Button>
      </div>

       {/* TOASTS */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg="success"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
        >
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

    </Container>
  );
};

export default Carrito;