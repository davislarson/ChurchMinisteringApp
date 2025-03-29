import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

interface NavbarProps {
  headerTitle: string; // Prop for the title
}

function Navbar({ headerTitle }: NavbarProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <h5 className="header-title">{headerTitle}</h5>
      <div className={`menu ${isOpen ? "open" : "closed"}`}>
        <ul className="navbar-nav justify-content-start">
          <li className="nav-item" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="nav-item" onClick={() => navigate("/ideas")}>
            Ideas With AI
          </li>
          <li className="nav-item" onClick={() => navigate("/calendar")}>
            Calendar
          </li>
          <li className="nav-item">Ministering Assignment</li>
          <li className="nav-item">Contact Leadership</li>
          <li className="nav-item">Settings</li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
