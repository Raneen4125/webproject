import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Credit from './pages/Credit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavbarComponent />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Credit />} />   
              
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;