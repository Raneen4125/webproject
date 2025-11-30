import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jewelryData from '../data/jewelryData';
import { useCart } from '../context/CartContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/PageLayout.css';
//import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = jewelryData.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <Container className="py-5"><h2>Product not found</h2></Container>;

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', maxWidth: '400px', objectFit: 'contain' }}
          />
        </Col>
        <Col md={6} className="text-start">
          <h2>{product.name}</h2>
          <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>{product.description}</p>
          <h3 className="text-dark my-4">${product.price.toLocaleString()}</h3>
          <Button
            className="me-3 mb-2"
            style={{
              backgroundColor: '#d4af37',
              borderColor: '#d4af37',
              color: '#000',
              fontWeight: '600'
            }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => navigate('/products')}
          >
            ← Back to Collection
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;