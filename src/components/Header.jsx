import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/butterfly.png';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>       
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="algo"
            className="d-inline-block align-top me-2"
            width="40"
            height="40"
          />
          <span>Tienda Mi Sheina</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/Ofertas" className="me-3">Ofertas</Nav.Link>
          <Nav.Link as={Link} to="/FromHim" className="me-3">Para Ellos</Nav.Link>
          <Nav.Link as={Link} to="/FromHer" className="me-3">Para Ellas</Nav.Link>
          <Nav.Link as={Link} to="/Technology" className="me-3">Tecnología</Nav.Link>
          

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/administracion" className="me-2 d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faUser} />
              Administración
            </Button>
            <Link to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;