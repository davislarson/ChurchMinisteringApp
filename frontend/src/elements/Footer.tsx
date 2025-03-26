import React from 'react';
import '../css/Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Link to={"/nav"} className="text-decoration-none">
        <div className="hamburger-menu">
          &#9776; {/* Hamburger menu icon */}
        </div>
      </Link>
      
    </div>
  );
};

export default Footer;