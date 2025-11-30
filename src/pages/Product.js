import React from 'react';
import { useCart } from '../context/CartContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Products from './Products';
import Aquamarine from '../assets/Aquamarine.jpg';
import diamond from '../assets/diamond.jpeg';
import Emerald from '../assets/Emerald.jpeg';
import emeraldncklace from '../assets/emeraldnecklace.jpg';
import Gemstoneheart from '../assets/Gemstoneheart.jpeg';
import Hoop from '../assets/Hoop.jpg';
import pearl from '../assets/pearl.jpg';
import ruby from '../assets/ruby.jpeg';
import Tiffany from '../assets/Tiffany.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const jewelryItems = [
  {
    id: 1,
    name: 'Diamond Ring',
    price: 1200,
    description: '18K white gold with 1ct diamond',
    image:  diamond 
  },
  {
    id: 2,
    name: 'Emerald Ring',
    price: 850,
    description: 'Classic 14K gold chain',
    image: Emerald
  },
  {
    id: 3,
    name: 'Ruby Ring',
    price: 1500,
    description: 'Freshwater ruby studs',
    image: ruby
  },
  {
    id: 4,
    name: 'Pearl Earrings',
    price: 320,
    description: 'Blue sapphire & silver',
    image: pearl
  },

  {
    id: 5,
    name: 'Hoop Earrings',
    price: 2500,
    description: 'hoop earrings',
    image: Hoop
  },

  {
    id: 6,
    name: 'Tiffany Earrings',
    price: 12000,
    description: 'tiffany',
    image: Tiffany
  },

  {
    id: 7,
    name: 'Emerald Necklace',
    price: 14000,
    description: 'green emerald',
    image: emeraldncklace
  },

  {
    id: 8,
    name: 'Gemstone Heart Necklace',
    price: 400,
    description: 'gemstone heart',
    image: Gemstoneheart
  },

  {
    id: 9,
    name: 'Aquamarine and Diamond Necklace',
    price: 1200,
    description: 'Aquamarine ',
    image: Aquamarine
  },
];

const Product = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    
  };

  return (
    
    <Container className="py-5">
      <h2 className="text-center mb-5">✨ Our Jewelry Collection</h2>
      <Row>
        {jewelryItems.map((item) => (
          <Col md={6} lg={4} xl={3} key={item.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <div
                style={{
                  height: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {item.description}
                </Card.Text>
                <div className="mt-auto">
                  <h5 className="text-primary">${item.price}</h5>
                  <Button
                    variant="outline-primary"
                    className="w-100"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;