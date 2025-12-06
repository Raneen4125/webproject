import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import '../styles/Credit.css';

const Credit = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const { cart, clearCart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setShowModal(true);
  };

  const handleConfirmPayment = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email is required.');
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email.');
      return;
    }

    setIsConfirmed(true);
    setEmailError('');

    setTimeout(() => {
      clearCart();
      setShowModal(false);
      setIsConfirmed(false);
      setEmail('');
      setShowSuccessAlert(true);
    }, 1800);
  };

  useEffect(() => {
    let timer;
    if (showSuccessAlert) {
      timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showSuccessAlert]);

  const handleClearCart = () => {

    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  return (
    <Container className="py-5 credit-container">
      <h2 className="credit-heading text-center mb-5">Your Shopping Cart</h2>

      {showSuccessAlert && (
        <Alert variant="success" className="credit-alert-success text-center mb-5">
          <Alert.Heading>🎉 Order Completed Successfully!</Alert.Heading>
          <p>Thank you for your purchase! A receipt was sent to your email.</p>
        </Alert>
      )}
      

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted fs-5 credit-empty-text">Your cart is empty.</p>
          <Button
            onClick={() => navigate('/products')}
            className="btn-elegant rounded-pill px-5 py-2"
             variant="light"
          >
            Browse Collection
          </Button>
        </div>
      ) : (
        <>
          <Row className="g-4">
            {cart.map((item, index) => (
              <Col md={12} key={index}>
                <div className="credit-cart-item">
                  <div className="credit-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="credit-item-info">
                    <h6 className="credit-item-title">{item.name}</h6>
                    <p className="credit-item-desc text-muted">{item.description}</p>
                    <strong className="credit-item-price">${item.price}</strong>
                  </div>
                  <Button
                    size="sm"
                    className="btn-remove rounded-circle"
                    onClick={() => removeFromCart(index)}
                     variant="light"
                  >
                    ✕
                  </Button>
                </div>
              </Col>
            ))}
          </Row>

          <div className="credit-summary mt-5">
            <div className="credit-total">
              <h4 className="mb-0">
                Total: <span className="credit-gold">${total}</span>
              </h4>
            </div>
            <div className="credit-actions d-flex gap-3 flex-wrap">
              <Button
                onClick={handleCheckout}
                 variant="light"
                className="btn-elegant rounded-pill px-4 py-2"
              >
                Confirm Order
              </Button>
              <Button
                onClick={handleClearCart}
                 variant="light"
                className="btn-elegant rounded-pill px-4 py-2"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="text-center mt-5">
            <Button
              onClick={() => navigate('/products')}
               variant="light"
              className="btn-elegant rounded-pill px-5 py-2"
            >
              ← Continue Shopping
            </Button>
          </div>
        </>
      )}

      {/* Payment Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="credit-modal"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>🫶 Secure Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isConfirmed ? (
            <Alert variant="success" className="text-center">
              <Alert.Heading>💳 Payment Verified!</Alert.Heading>
              <p>Receipt sent to <strong>{email}</strong></p>
            </Alert>
          ) : (
            <Form onSubmit={handleConfirmPayment}>
              <p>
                <strong>Total:</strong>{' '}
                <span className="credit-gold">${total}</span>
              </p>
              <Form.Group className="mb-4">
                <Form.Label>Email for Receipt</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!emailError}
                  className="credit-input"
                />
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                type="submit"
                className="btn-elegant w-100 py-2 rounded-pill"
              >
                Confirm Payment
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Credit;