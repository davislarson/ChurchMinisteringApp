import React from 'react';
import '../css/EventCard.css'
interface EventCardProps {
  title: string;
  subtitle: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, subtitle, date }) => {
  return (
    <div className="event-card">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="date">{date}</div>
    </div>
  );
};

export default EventCard;