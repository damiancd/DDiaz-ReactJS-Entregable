# 🛍️ Tienda Mi Sheina

Proyecto desarrollado en **React.js**, con integración a la API pública [FakeStore API](https://fakestoreapi.com/), para simular una tienda online con carrito de compras, navegación por categorías y panel de administración.

---

## 📚 **Descripción del Proyecto**

El objetivo de este desarrollo es implementar una **aplicación de e-commerce básica** que permita:

- Visualizar productos desde una API externa.
- Agregar productos al carrito de compras.
- Mostrar la cantidad de productos en el carrito en el encabezado.
- Navegar entre distintas categorías usando **React Router**.
- Administrar el estado global del carrito con **React Context API**.

---

## ⚙️ **Tecnologías Utilizadas**

| Tecnología | Uso |
|-------------|-----|
| **React.js** | Framework principal |
| **React Router DOM** | Navegación entre rutas |
| **React Bootstrap** | Componentes y estilos |
| **FontAwesome** | Íconos (carrito, usuario, etc.) |
| **FakeStore API** | Fuente de datos de productos |
| **MockApi** | Api de productos para CRUD |
| **GitHub** | versionado de proyecto|
| **GitHub Pages** | Publicación del sitio|

---

## 🏗️ **Estructura del Proyecto**
src/
├─ assets/
│ └─ butterfly.png # Logo de la tienda
├─ components/
│ ├─ Header.jsx # Navbar con carrito
│ ├─ Footer.jsx # Pie de página
│ ├─ Home.jsx # Página principal
│ ├─ Ofertas.jsx # Página de ofertas
│ ├─ FromHer.jsx # Categoría para ella
│ ├─ FromHim.jsx # Categoría para él
│ ├─ Technology.jsx # Categoría de tecnología
│ ├─ ProductList.jsx # Listado de productos con botón "Al carrito"
│ ├─ ProductCard.jsx # Tarjeta individual de producto
│ ├─ Login.jsx # Página de administración
│ ├─ CrudProductos.jsx # ABM de productos
│ ├─ CartContext.jsx # Manejo del contexto de productos.
│ └─ Carrito.jsx # administración del contenido del mismo.
├─ App.jsx # Configuración principal de rutas
└─ main.jsx # Render principal de la aplicación
---

👨‍💻 Autor

Curso: Talento Tech - Comision 25235 - React JS
Responsable: Damian Diaz
Stack: React.js, Node.js, API REST

🗓️ Estado del Proyecto

✅ Etapa 1 completada:

Integración API
Navegación por categorías


✅ Etapa 2 completada:

CRUD de Productos Funcional.
Carrito, muestra de cantidad y edición del mismo.