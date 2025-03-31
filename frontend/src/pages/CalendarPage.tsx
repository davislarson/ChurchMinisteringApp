import { useState, useEffect } from "react";
import EventCard from "../elements/EventCard";
// import Footer from "../elements/Footer";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import Navbar from "../elements/Navbar";
import { Event } from "../types/Event"; // Import the Event type
import "../css/CalendarPage.css";

// Define the type for the events dictionary
type EventsMap = Record<string, Event[]>;

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<EventsMap>({}); // Events state as a map of dates to events
  const navigate = useNavigate();

  // Handles Date Selection on calendar
  const handleDateChange = (date: Date | Date[] | null) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    } else if (Array.isArray(date) && date.length > 0) {
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

  // Fetch events from the database (using an API endpoint)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://localhost:4000/api/Ministering/events"
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched events:", data);

          const eventsMap: EventsMap = data.reduce(
            (acc: EventsMap, event: Event) => {
              const eventDate = event.date; // Assuming 'date' is the string in the format "YYYY-MM-DD"
              if (!acc[eventDate]) {
                acc[eventDate] = [];
              }
              acc[eventDate].push(event);
              return acc;
            },
            {}
          );

          setEvents(eventsMap);
        } else {
          console.error("Failed to fetch events:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Navbar headerTitle="Calendar" />
      <br />
      <h2>Ministering Calendar</h2>
      <br />
      {/* Wrap the Calendar component in a div for centering */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: "fit-content",
        }}
      >
        <Calendar
          className={"c"}
          onChange={(value) => handleDateChange(value as Date)}
        />
      </div>
      <br />
      <br />
      <div className="events-container">
        <h3>
          Events for{" "}
          {formattedDate ? (
            formattedDate
          ) : (
            <span style={{ color: "#a0a0a0" }}>*Please Select a date*</span>
          )}
        </h3>
        {/* gets event data for specific day */}
        {formattedDate && events[formattedDate] ? (
          events[formattedDate].map((event, index) => (
            <EventCard
              key={index}
              title={event.activity}
              subtitle={event.address}
              date={event.date}
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
          backgroundColor: "#19496f",
          color: "#e5e7eb",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => navigate("/createEvent")}
      >
        Create
      </button>

      <br />
      <br />
      {/* <Footer /> */}
    </>
  );
}

export default CalendarPage;
