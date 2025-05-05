import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4 mt-5 border-top">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h5>Foodie's Hub</h5>
            <p className="text-muted">
              Serving happiness one plate at a time. Order your favorite meals
              from us.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="text-decoration-none text-dark">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p className="mb-1">Email: support@foodieshub.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="text-center py-3 border-top small">
          &copy; {new Date().getFullYear()} Foodie's Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
