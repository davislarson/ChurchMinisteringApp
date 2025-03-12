import React from 'react';
import '../css/Footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="hamburger-menu">
        &#9776; {/* Hamburger menu icon */}
      </div>
    </div>
  );
};

export default Footer;