import React from 'react';
import './footer.css';
import { FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa';

const footerLinks = [
  { label: "Branding", href: "#" },
  { label: "Website", href: "#" },
  { label: "Campaign", href: "#" },
];

const footerLinksRight = [
  { label: "Projects", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Contact", href: "#" },
];

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo-text">
              <div>
                <div className="footer-brand">
                  iidad<span className="footer-arrow">↗</span>
                </div>
                <div className="footer-subtext">
                  Creative minds<br />for creative brands
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider" />
          <div className="footer-center">
            <div className="footer-links">
              <div>
                {footerLinks.map(link => (
                  <a className="footer-link" href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div>
                {footerLinksRight.map(link => (
                  <a className="footer-link" href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-divider" />
          <div className="footer-right">
            <div className="footer-icons">
              <FaInstagram size={32} />
              <FaBehance size={32} />
              <FaLinkedin size={32} />
            </div>
          </div>
        </div>
      </div>
      {/* Legal notice OUTSIDE footer box */}
      <div className="footer-legal">
        Legal Notice
      </div>
    </>
  );
};

export default Footer;
