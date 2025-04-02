function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>ForeverU</h3>
              <p>Preserving memories and connections for generations to come.</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 ForeverU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;