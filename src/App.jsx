import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Technology from './components/Technology';
import FromHer from './components/FromHer';
import FromHim from './components/FromHim';
import Login from './components/Login'; 
import Footer from './components/Footer'

function App() {

  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Ofertas" element={<Ofertas />} />
        <Route path="/FromHer" element={<FromHer />} />
        <Route path="/FromHim" element={<FromHim />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App