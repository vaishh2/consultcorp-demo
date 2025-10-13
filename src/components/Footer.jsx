import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <p>Email: info@consultcorp-demo.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 42 Innovation Drive, Tech City, USA</p>
      </div>
      <p className="copyright">
        © 2025 ConsultCorp Solutions. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
