import React from "react";
import "../css/Footer.css"; // Import the CSS file
import { Link } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const goback = () => {
		if (location.pathname === "/nav") {
			navigate(-1); // Go back to the previous page
		} else {
			navigate("/nav"); // Navigate to the "/nav" page
		}
	};

	return (
		<div className="footer">
			<button className="hamburger-menu" onClick={goback}>
				&#9776; {/* Hamburger menu icon */}
			</button>
		</div>
	);
};

export default Footer;
