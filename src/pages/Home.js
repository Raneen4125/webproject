import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaGem, FaCertificate, FaShieldAlt, FaShippingFast } from 'react-icons/fa';
import jewelryData from '../data/jewelryData';
import modelImage from '../assets/model.jpg';
import insta1 from '../assets/image.png';     // Renamed for clarity
import insta2 from '../assets/image2.png';
import insta3 from '../assets/image3.png';

const Home = () => {
  const navigate = useNavigate();
  const featured = jewelryData.slice(0, 3);

  return (
    <Container className="py-4">
      {/* Hero Banner with Model */}
      <div className="py-4" style={{ backgroundColor: '#f8f3eb', borderRadius: '20px', overflow: 'hidden' }}>
        <Row className="align-items-center g-4">
          <Col md={6} className="text-center text-md-start px-4 px-md-5">
            <h1 style={{ color: '#6b4e3d', fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.2' }}>
              Lustreva Jewelry
            </h1>
            <p className="mt-3" style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Your one-stop destination for unique and exquisite jewelry pieces.
            </p>
            <button
              onClick={() => navigate('/products')}
              style={{
                backgroundColor: '#6b4e3d',
                color: '#f8f3eb',
                fontWeight: '600',
                padding: '0.8rem 2rem',
                borderRadius: '30px',
                border: 'none',
                marginTop: '1.2rem',
                fontSize: '1.1rem',
                boxShadow: '0 4px 10px rgba(107, 78, 61, 0.2)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Explore Collection
            </button>
          </Col>

          <Col md={6} className="d-flex justify-content-center">
            <div
              style={{
                width: '100%',
                maxWidth: '450px',
                height: '350px',
                backgroundImage: `url(${modelImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)'
              }}
            />
          </Col>
        </Row>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-5" style={{ backgroundColor: '#f8f3eb' }}>
        <h2 className="text-center mb-5" style={{ color: '#6b4e3d', fontFamily: "'Playfair Display', serif" }}>
          WHY CHOOSE US
        </h2>
        <Row className="g-4">
          {[
            { icon: <FaGem size={40} />, title: "Custom Design", desc: "Create your perfect piece." },
            { icon: <FaCertificate size={40} />, title: "Certified Quality", desc: "GIA-certified diamonds." },
            { icon: <FaShieldAlt size={40} />, title: "Lifetime Warranty", desc: "On all jewelry pieces." },
            { icon: <FaShippingFast size={40} />, title: "Free Shipping", desc: "On orders over $500." }
          ].map((item, i) => (
            <Col md={3} key={i} className="d-flex">
              <div
                className="p-4 text-center rounded shadow-sm"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e0d5c9',
                  flex: 1,
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ color: '#6b4e3d', marginBottom: '1rem' }}>{item.icon}</div>
                <h5 style={{ color: '#6b4e3d', fontWeight: '600', fontSize: '1.1rem' }}>{item.title}</h5>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Featured Products */}
      <h2 className="text-center mb-4 mt-5" style={{ color: '#6b4e3d' }}>✨ Our Jewelry Collection</h2>
      <Row>
        {featured.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card
              onClick={() => navigate(`/product/${item.id}`)}
              className="shadow-sm"
              style={{
                cursor: 'pointer',
                border: '1px solid #e0d5c9',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '250px', backgroundColor: '#f8f3eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxHeight: '90%', maxWidth: '90%', objectFit: 'contain' }}
                />
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <h5>${item.price}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <button
              onClick={() => navigate('/products')}
              style={{
                backgroundColor: '#6b4e3d',
                color: '#f8f3eb',
                fontWeight: '600',
                padding: '0.8rem 2rem',
                borderRadius: '30px',
                border: 'none',
                marginTop: '1.2rem',
                fontSize: '1.1rem',
                boxShadow: '0 4px 10px rgba(107, 78, 61, 0.2)',
                transition: 'transform 0.3s ease',
                alignContent: 'center',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Explore More
            </button>

      {/* FOLLOW US ON INSTAGRAM */}
      <div className="py-5 mt-5" style={{ backgroundColor: '#f8f3eb' }}>
        <h2
          className="text-center mb-4"
          style={{
            color: '#6b4e3d',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '600',
            fontSize: '2rem'
          }}
        >
          FOLLOW US ON INSTAGRAM
        </h2>
        <Row className="g-3 justify-content-center">
          {/* Instagram Post 1 */}
          <Col xs={6} md={4}>
         
            <div
              style={{
                height: '220px',
                backgroundColor: '#e0d5c9',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <img src={insta1} alt="Instagram Post 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Col>

          {/* Instagram Post 2 */}
          <Col xs={6} md={4}>
            <div
              style={{
                height: '220px',
                backgroundColor: '#e0d5c9',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <img src={insta2} alt="Instagram Post 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Col>

          {/* Instagram Post 3 */}
          <Col xs={6} md={4}>
            <div
              style={{
                height: '220px',
                backgroundColor: '#e0d5c9',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <img src={insta3} alt="Instagram Post 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <a
            href="https://instagram.com/lustreva.shop"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#6b4e3d',
              fontWeight: '600',
              textDecoration: 'underline',
              fontSize: '1.1rem'
            }}
          >
            @lustreva.shop
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Home;