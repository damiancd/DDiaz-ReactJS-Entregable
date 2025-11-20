# 🛍️ Tienda Mi Sheina

Aplicación web desarrollada en **React.js**, que simula una tienda
online con navegación por categorías, carrito de compras, y módulo de
administración con CRUD, utilizando datos obtenidos desde **FakeStore
API** y **MockAPI**.

Deploy del proyecto: *(GitHub Pages usando HashRouter)*

------------------------------------------------------------------------

## 📚 Descripción del Proyecto

Este proyecto fue desarrollado como parte del curso **Talento Tech --
Comisión 25235 (React.js)**, con el objetivo de implementar un
**e-commerce funcional** que permita:

-   Visualizar productos obtenidos desde APIs externas.
-   Agregar productos al carrito con manejo de cantidades.
-   Mostrar la cantidad total en el ícono del carrito (Header).
-   Navegar entre categorías usando **React Router + HashRouter**
    (necesario para GitHub Pages).
-   Administrar el estado global del carrito mediante **React Context
    API**.
-   Realizar operaciones CRUD sobre productos consumiendo **MockAPI**.

------------------------------------------------------------------------

## ⚙️ Tecnologías Utilizadas

  -----------------------------------------------------------------------
  Tecnología                                       Uso
  ------------------------------------------------ ----------------------
  **React.js**                                     Framework principal

  **Vite**                                         Entorno de desarrollo

  **React Router DOM**                             Navegación entre rutas
                                                   (HashRouter para
                                                   deploy)

  **React Bootstrap**                              Componentes UI

  **FontAwesome**                                  Íconos

  **FakeStore API**                                Productos base de
                                                   ejemplo

  **MockAPI**                                      CRUD de productos

  **GitHub / GitHub Pages**                        Versionado y hosting
                                                   del proyecto
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🏗️ Estructura del Proyecto

    src/
    ├─ assets/
    │  └─ butterfly.png        # Logo de la tienda
    ├─ components/
    │  ├─ Header.jsx            # Navbar + cantidad del carrito
    │  ├─ Footer.jsx            # Pie de página
    │  ├─ Home.jsx              # Página principal
    │  ├─ Ofertas.jsx           # Categoría ofertas
    │  ├─ FromHer.jsx           # Categoría "Para Ella"
    │  ├─ FromHim.jsx           # Categoría "Para Él"
    │  ├─ Technology.jsx        # Categoría tecnología
    │  ├─ ProductList.jsx       # Listado general desde API
    │  ├─ ProductCard.jsx       # Tarjeta individual
    │  ├─ Login.jsx             # Login administrativo
    │  ├─ CrudProductos.jsx     # ABM conectado a MockAPI
    │  ├─ CartContext.jsx       # Contexto global del carrito
    │  └─ Carrito.jsx           # Gestión del carrito y cantidades
    ├─ App.jsx                  # Configuración de rutas (HashRouter)
    └─ main.jsx                 # Render principal

------------------------------------------------------------------------

## 🔧 Configuración Importante

### ✔️ Uso de HashRouter

GitHub Pages no soporta historial tradicional, por eso la app usa:

``` jsx
import { HashRouter as Router } from "react-router-dom";
```

### ✔️ MockAPI HTTPS obligatorio

Para evitar errores en producción:

    const API_URL = "https://690ba92e6ad3beba00f5d082.mockapi.io/api/productos";

### ✔️ Edición de cantidad dentro del carrito

Funcionalidad agregada: modificar cantidad directamente en la tabla sin
modal.

------------------------------------------------------------------------

## 🚀 Funcionalidades Principales

-   Catálogo de productos por categoría\
-   Carrito con manejo de cantidades\
-   Cálculo automático del total\
-   CRUD completo de productos (alta, edición, baja)\
-   Login básico para acceder al panel\
-   Integración con FakeStore y MockAPI\
-   UI responsive

------------------------------------------------------------------------

## 🗓️ Estado del Proyecto

### ✔️ Etapa 1 -- Completada

-   Integración con APIs\
-   Navegación por categorías\
-   Renderizado dinámico de productos

### ✔️ Etapa 2 -- Completada

-   CRUD funcional (MockAPI)
-   Carrito con contador y edición


------------------------------------------------------------------------

## 👨‍💻 Autor

**Curso:** Talento Tech\
**Comisión:** 25235 -- React JS\
**Responsable:** **Damian Diaz**\
**Stack:** React.js -- Node.js -- REST API
