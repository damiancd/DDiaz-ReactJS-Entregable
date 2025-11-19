import React, { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";

const API_URL = "https://690ba92e6ad3beba00f5d082.mockapi.io/api/productos";

const CrudProductos = () => {
  const [productos, setProductos] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  const [editId, setEditId] = useState(null);
  const [errorMsg, setErrorMsg] = useState(""); // manejo de errores

  // Obtener productos
  const getProductos = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  };

  // Cerrar modal
  const handleClose = () => {
    setShow(false);
    setForm({ title: "", description: "", price: "", stock: "", image: "" });
    setEditId(null);
    setErrorMsg("");
  };

  // Abrir modal
  const handleShow = (producto) => {
    setShow(true);
    if (producto) {
      setForm({
        ...producto,
        price: Number(producto.price),
        stock: Number(producto.stock),
      });
      setEditId(producto.id);
    }
  };

  // Crear o editar
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };

    const method = editId ? "PUT" : "POST";
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        let errorData = {};
        try {
          errorData = await res.json();
        } catch {}

        const mensaje =
          errorData?.message || "Error al guardar el producto.";
        throw new Error(mensaje);
      }

      await res.json();
      handleClose();
      getProductos();
    } catch (error) {
      console.error("Error:", error.message);
      setErrorMsg(error.message); // Muestro error en pantalla
    }
  };

  // Eliminar producto
  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este producto?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      if (!res.ok) throw new Error("Error al eliminar el producto");

      getProductos();
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message); // muestro mensaje al usuario
    }
  };

  // Cargar productos al inicio
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container mt-4">
      <h2>CRUD de Productos</h2>
      <Button className="mb-3" onClick={() => handleShow()}>
        Agregar Producto
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.title}</td>
              <td>{prod.description}</td>
              <td>${Number(prod.price).toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>
                {prod.image?.startsWith("http") ? (
                  <img
                    src={prod.image}
                    alt={prod.title}
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span>{prod.image}</span>
                )}
              </td>
              <td>
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => handleShow(prod)}
                >
                  Editar
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => eliminarProducto(prod.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Editar" : "Agregar"} Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMsg && (
            <div className="alert alert-danger py-2">{errorMsg}</div>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Título</Form.Label>
              <Form.Control
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-2">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CrudProductos;
