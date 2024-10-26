import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const NFTLandingPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse movement handlers for 3D effect
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const { left, top, width, height } = wrapper.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const middleX = width / 2;
    const middleY = height / 2;
    const offsetX = ((x - middleX) / middleX) * 15;
    const offsetY = ((y - middleY) / middleY) * 15;

    wrapper.style.setProperty("--rotateX", `-${offsetY}deg`);
    wrapper.style.setProperty("--rotateY", `${offsetX}deg`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.setProperty("--rotateX", "0deg");
      wrapper.style.setProperty("--rotateY", "0deg");
    }
  }, []);

  return (
    <div
      className="wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={wrapperRef}
    >
      {/* Particle Effect Container */}
      <div className="particles-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="container">
        {/* Navigation */}
        <nav className="nav">
          <div className="logo">
            <img src={Logo} alt="Jimpsons Logo" className="logo-image" />
          </div>
          <button className="button button-primary-connect">
            Connect Wallet
          </button>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content perspective-wrapper">
            <div className="hero-3d-container">
              <h2 className="hero-title glowing-text">
                {"Jimpsons".split("").map((char, idx) => (
                  <span key={idx} className="hero-title-char">
                    {char}
                  </span>
                ))}
              </h2>

              <div className="hero-card">
                <p className="hero-description">
                  Providing a fine line between supply and demand with strict
                  checks and balance from our trusty AI friends. Helping small
                  and big artists alike, we strive to provide the best platform
                  for everyone.
                </p>
              </div>

              <div className="hero-buttons floating-buttons">
                <Link
                  to="/presale"
                  className="button button-primary glowing-border"
                >
                  <span className="button-content">Join Presale Now</span>
                </Link>
                <Link
                  to="/whitepaper"
                  className="button button-outline pulse-border"
                >
                  <span className="button-content">Check Our Whitepaper</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="nft-grid">
            {["SISTERS", "BROTHERS", "MOTHER", "FATHER"].map((label, idx) => (
              <div key={idx} className={`nft-item nft-item-${idx + 1}`}>
                <div className="nft-content">
                  {label && <span>{label}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2 className="features-title">How it works</h2>
          <div className="features-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="feature-card">
                <div className="feature-icon">
                  {item === 1 ? (
                    <div className="hey-icon">hey</div>
                  ) : (
                    <div className="feature-placeholder" />
                  )}
                </div>
                <h3 className="feature-title">Get Involved</h3>
                <p className="feature-description">
                  Kickstart your NFT career as a novice or a pro, our platform
                  is sure to accommodate your various requirements.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>About Us</h3>
              <p>
                Empowering artists and creators in the NFT space with
                cutting-edge technology and community support.
              </p>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#marketplace">Presale</a>
                </li>
                <li>
                  <a href="#community">Social Links</a>
                </li>
                <li>
                  <a href="#create">Website(Building)</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Newsletter</h3>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="button button-primary">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Propheshy Jimpsons. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Decorative Elements */}
      {!isMobile && (
        <>
          <div className="ufo">
            <div className="ufo-body">
              <div className="ufo-light" />
            </div>
          </div>
          <div className="lightning">⚡</div>
          <div
            className="cursor"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        </>
      )}
    </div>
  );
};

export default NFTLandingPage;
