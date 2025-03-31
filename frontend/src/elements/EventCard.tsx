import React from "react";
import "../css/EventCard.css";
import { Link } from "react-router-dom";

interface EventCardProps {
	title: string;
	subtitle: string;
	date: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, subtitle, date }) => {
	return (
		<Link to={"/createEvent"} className="event-card-link text-decoration-none">
			<div className="event-card">
				<div className="title">{title}</div>
				<div className="subtitle">{subtitle}</div>
				<div className="date">{date}</div>
			</div>
		</Link>
	);
};

export default EventCard;
