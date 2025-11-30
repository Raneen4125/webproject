import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setAlert({ show: true, type: 'error', message: 'Please enter your email.' });
      return;
    }
    if (!validateEmail(email)) {
      setAlert({ show: true, type: 'error', message: 'Please enter a valid email.' });
      return;
    }
    setAlert({ show: true, type: 'success', message: 'Thank you! You’re subscribed.' });
    setEmail('');
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 3000);
  };

  return (
    <footer className="footer-elegant">
      <Container>
        <Row className="footer-content">
          <Col md={6} className="footer-section mb-4 mb-md-0">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </Col>

          <Col md={6} className="footer-section">
            <h5 className="footer-heading">Newsletter</h5>
            <p className="newsletter-text">Subscribe for exclusive offers!</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="newsletter-button">Register</button>
              </div>
              {alert.show && (
                <div className={`alert-message ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                  {alert.message}
                </div>
              )}
            </form>
          </Col>
        </Row>

        <hr className="footer-divider" />
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Lustreva Jewelry Collection. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;