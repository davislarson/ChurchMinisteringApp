import { useState } from "react";
import EventCard from "../elements/EventCard";
import Footer from "../elements/Footer";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";

// Define the type for events
interface Event {
  title: string;
  subtitle: string;
}

// Define the type for the events dictionary
type EventsMap = Record<string, Event[]>;

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  // This is dummy data until the database is connected
  const events: EventsMap = {
    "2025-03-17": [
      { title: "Meeting at 10 AM", subtitle: "Discuss project updates" },
      { title: "Lunch with Sarah", subtitle: "Catch up at the café" },
    ],
    "2025-03-18": [
      { title: "Project deadline", subtitle: "Submit final draft" },
      { title: "Call with client", subtitle: "Review contract details" },
    ],
  };

  // Handles Date Selection on calendar
  const handleDateChange = (date: Date | Date[]) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    } else if (Array.isArray(date)) {
      setSelectedDate(date[0]);
    } else {
      setSelectedDate(null);
    }
  };

  // Formats the selected date
  const formattedDate =
    selectedDate && selectedDate instanceof Date
      ? selectedDate.toISOString().split("T")[0]
      : "";

  return (
    <>
      <h2>Calendar Page</h2>
      {/* I haven't been able to fix the error line from showing below, but it doesn't seem to break the site so idk */}
      <Calendar onChange={(date: Date | Date[]) => handleDateChange(date)} />

      <br />
      <br />
      <div>
        {/* Shows the event schedule for a specific day */}
        <h3>
          Events for{" "}
          {formattedDate ? (
            formattedDate
          ) : (
            <span style={{ color: "#a0a0a0" }}>Select a date</span>
          )}
        </h3>
        {/* gets event data for specific day */}
        {formattedDate && events[formattedDate] ? (
          events[formattedDate].map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              subtitle={event.subtitle}
              date={formattedDate}
            />
          ))
        ) : (
          <p>No events scheduled.</p>
        )}
      </div>

      {/* floating create button */}
      <button
        style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          padding: "15px 30px",
          backgroundColor: "#007da5",
          color: "white",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => navigate('/createEvent')}
      >
        Create
      </button>

      <br />
      <br />
      <Footer />
    </>
  );
}

export default CalendarPage;
