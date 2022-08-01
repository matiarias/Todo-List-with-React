import React from "react";
import "../footer/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/matiasarias27/"
          target="_blank"
          className="mb-3"
        >
          <i className="bi bi-linkedin linkedin-icon"></i>
        </a>
        <a href="https://github.com/matiarias" target="_blank">
          <i className="bi bi-github github-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
