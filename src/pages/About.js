import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/About.css';

const About = () => {
  return (
    <Container className="about-container py-5">
      <div className="about-content text-center">
        <h1 className="about-title">Crafted in Elegance, Worn with Confidence</h1>

        <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p>
            Since our founding in 2020, <strong>Lustreva Jewelry Collection</strong> has redefined modern luxury through timeless design, ethical craftsmanship, and an unwavering commitment to excellence.
          </p>

          <p>
            Every piece in our collection is thoughtfully designed in-house and meticulously handcrafted using only the finest ethically sourced gemstones, recycled gold, and conflict-free diamonds—because beauty should never come at the cost of conscience.
          </p>

          <p>
            What sets us apart? It’s not just the materials—it’s the <em>meaning</em> behind them. At Lustreva, we believe jewelry is more than adornment; it’s a legacy, a memory, a whispered promise. That’s why each creation is infused with intention, artistry, and a story worth passing down through generations.
          </p>

          <div className="about-why-us mt-4 p-4">
            <strong>Why choose Lustreva?</strong><br />
            ✦ Curated collections inspired by heritage and innovation<br />
            ✦ Ethically sourced, sustainably crafted<br />
            ✦ Lifetime care and personalized service<br />
            ✦ Designed for the woman who dares to shine—quietly, confidently, unmistakably.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;