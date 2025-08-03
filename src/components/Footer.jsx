import React from "react";

const Footer = () => {
  const isMobile = window.innerWidth <= 576;
    return(
        <footer>
          <div className="footer-head">
            <div className="footer-head-links-and-logotypes">
              <img className="whitepositivus-logo" src="footer-logo-positivus.svg" alt="Positivus"/>
              <div className="footer-head-links">
                <a href="">About us</a>
                <a href="">Services</a>
                <a href="">Use Cases</a>
                <a href="">Pricing</a>
                <a href="">Blog</a>
              </div>
              {!isMobile && (
                <div className="footer-head-logotypes">
                  <img src="footer-linkedin.svg" alt="linkedin" />
                  <img src="footer-facebook.svg" alt="facebook" />
                  <img src="footer-twitter.svg" alt="twitter" />
                </div>
              )}
            </div>
            <div className="footer-body">
              <div className="footer-body-contact">
                <h4>Contact us:</h4>
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St <br /> Moonstone City, Stardust State 12345</p>
              </div>
              <div className="footer-body-subscription">
                <input className="footer-body-subscription_input"  type="Email" name="Email" id="footer-Email" placeholder="Email"/>
                <button className="footer-body-subscription_button">Subscribe to news</button>
              </div>
              {isMobile && (
                <div className="footer-head-logotypes">
                  <img src="footer-linkedin.svg" alt="linkedin" />
                  <img src="footer-facebook.svg" alt="facebook" />
                  <img src="footer-twitter.svg" alt="twitter" />
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="footer-privacy">
            <p>© 2025 Positivus. All Rights Reserved.</p>
            <a href="#">Privacy Policy</a>
          </div>
        </footer>
    )
}

export default Footer