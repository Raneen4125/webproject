import React from 'react';
import { useNavigate } from 'react-router-dom';
import jewelryData from '../data/jewelryData';
import { useCart } from '../context/CartContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/PageLayout.css';

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{ color:'#6b4e3d', fontFamily: "'Playfair Display', serif" }}>
        Our Jewelry Collection
      </h2>

      <Row>
        {jewelryData.map((item) => (
          <Col md={6} lg={4} xl={4} key={item.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0 hover-shadow">
              <div
                style={{
                  height: '250px',
                  backgroundColor: '#f9f9f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s ease'
                }}
                onClick={() => navigate(`/product/${item.id}`)}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.4)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    maxHeight: '90%',
                    maxWidth: '90%',
                    objectFit: 'contain',
                    transition: 'transform 0.5s ease',
                    transform: 'scale(1)'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="text-muted flex-grow-1" style={{ fontSize: '0.95rem' }}>
                  {item.description}
                </Card.Text>
                <h5 className="text-dark">${item.price.toLocaleString()}</h5>
                <Button
                  className="w-100 mt-2"
                  style={{
                    backgroundColor: '#a77e66ff',
                    borderColor: '#a77e66ff',
                    color: '#000',
                    fontWeight: '600'
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click from triggering
                    addToCart(item);
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* View Cart Button */}
      <div className="text-center mt-5">
        <Button
          variant="outline-dark"
          className="px-4 py-2 fw-semibold rounded-pill"
          onClick={() => navigate('/cart')}
          style={{ 
            borderColor: '#a77e66ff',
            color: '#a77e66ff'
          }}
        >
          🛍️ View Your Cart
        </Button>
      </div>
    </Container>
  );
};

export default Products;