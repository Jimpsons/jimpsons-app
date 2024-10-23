import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.svg";

const NFTLandingPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse movement handlers
  const handleMouseMove = (e: React.MouseEvent) => {
    // Update mouse position
    setMousePosition({ x: e.clientX, y: e.clientY });

    // Handle 3D effect
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
  };

  const handleMouseLeave = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.setProperty("--rotateX", "0deg");
    wrapper.style.setProperty("--rotateY", "0deg");
  };

  useEffect(() => {
    const wrapper = document.querySelector(
      ".perspective-wrapper"
    ) as HTMLElement;
    if (!wrapper) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = wrapper.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const middleX = width / 2;
      const middleY = height / 2;

      const offsetX = ((x - middleX) / middleX) * 15;
      const offsetY = ((y - middleY) / middleY) * 15;

      wrapper.style.setProperty("--rotateX", `-${offsetY}deg`);
      wrapper.style.setProperty("--rotateY", `${offsetX}deg`);
    };

    const handleMouseLeave = () => {
      wrapper.style.setProperty("--rotateX", "0deg");
      wrapper.style.setProperty("--rotateY", "0deg");
    };

    // Explicitly type the event listener
    wrapper.addEventListener("mousemove", handleMouseMove as EventListener);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener(
        "mousemove",
        handleMouseMove as EventListener
      );
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
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
            {/* <h1 className="logo-text">Jimpsons</h1> */}
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
                <span className="hero-title-char">J</span>
                <span className="hero-title-char">i</span>
                <span className="hero-title-char">m</span>
                <span className="hero-title-char">p</span>
                <span className="hero-title-char">s</span>
                <span className="hero-title-char">o</span>
                <span className="hero-title-char">n</span>
                <span className="hero-title-char">s</span>
              </h2>

              <div className="hero-card">
                <p className="hero-description">
                  Providing a fine line between supply and demand with strict
                  checks and balance from our trusty AI friends. Helping small
                  and big artists alike, we strive to provide the best platform
                  for everyone
                </p>
              </div>

              <div className="hero-buttons floating-buttons">
                <button className="button button-primary glowing-border">
                  <span className="button-content">Join Presale Now</span>
                  <div className="button-glow"></div>
                </button>
                <button className="button button-outline pulse-border">
                  <span className="button-content">Check Our Whitepaper</span>
                  <div className="button-particles"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="nft-grid">
            <div className="nft-item nft-item-1">
              <div className="nft-content">
                <span>SISTERS</span>
              </div>
            </div>
            <div className="nft-item nft-item-2">
              <div className="nft-content">
                <div className="nft-circle" />
              </div>
            </div>
            <div className="nft-item nft-item-3">
              <div className="nft-content">
                <div className="nft-mouth" />
              </div>
            </div>
            <div className="nft-item nft-item-4">
              <div className="nft-content">
                <div className="nft-bubble" />
              </div>
            </div>
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
                  <a href="#marketplace">Marketplace</a>
                </li>
                <li>
                  <a href="#create">Create NFT</a>
                </li>
                <li>
                  <a href="#community">Community</a>
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
            <p>&copy; 2024 Jimpsons. All rights reserved.</p>
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
