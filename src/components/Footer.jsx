import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="global-container">  {/* This now uses the full-width styles from Footer.css */}
      <footer id="contact">
        <div className="footer-content px-4 sm:px-6 md:px-8 lg:px-12">  {/* Added responsive padding for better spacing */}
          <h3>Contact Us</h3>
          <p>Email: info@consultcorp-demo.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 42 Innovation Drive, Tech City, USA</p>
        </div>
        <p className="copyright">
          © 2025 ConsultCorp Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
