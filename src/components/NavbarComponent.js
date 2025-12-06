import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useCart } from '../context/CartContext';
import '../styles/NavbarComponent.css';

const NavbarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Collection' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="elegant-header">
      <Container>
        <div className="brand-row">
          <Link to="/" className="brand-text"> 
            Lustreva
          </Link>
        </div>
        <div className="navbar-content d-flex justify-content-between align-items-center">
          <Nav className="nav-row">
            {navItems.map(({ path, label }) => (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                className={`nav-link-custom ${location.pathname === path ? 'active' : ''}`}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <button
            className="cart-icon-button"
            onClick={handleCartClick}
            aria-label={`Cart with ${cart.length} items`}
          >
            🛒
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default NavbarComponent;