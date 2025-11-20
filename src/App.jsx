import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Technology from './components/Technology';
import FromHer from './components/FromHer';
import FromHim from './components/FromHim';
import Login from './components/Login'; 
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito'; 
import CrudProductos from './components/CrudProductos';


function App() {
  return (
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/administracion" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Ofertas" element={<Ofertas />} />
            <Route path="/FromHer" element={<FromHer />} />
            <Route path="/FromHim" element={<FromHim />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/crud" element={<CrudProductos />} />
          </Routes>
          <Footer/>
        </Router>
      </CartProvider>
  )
}

export default App