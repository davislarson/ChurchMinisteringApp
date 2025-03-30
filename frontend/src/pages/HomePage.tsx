import "../css/HomePage.css";
import EventCard from "../elements/EventCard";
// import Footer from "../elements/Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../elements/Navbar";
import { useState, useEffect } from "react";
import { Event } from "../types/Event";
import image from "../assets/Churchlogo.jpg"; // Import the image

function HomePage() {
  const [events, setEvents] = useState<Event[]>([]); // State to hold events
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating fetching events from an API or database
    fetchUpcomingEvents(); // Function to fetch the upcoming events
  }, []);

  const fetchUpcomingEvents = async () => {
    // Replace this URL with your actual endpoint
    const response = await fetch(
      "https://localhost:4000/api/Ministering/events"
    );
    const data = await response.json();
    // Filter the events to only show those that are upcoming
    const upcomingEvents = data.filter(
      (event: Event) => new Date(event.date) > new Date()
    );
    setEvents(upcomingEvents); // Set the state with the filtered events
  };

  fetchUpcomingEvents(); // Call the function to fetch events

  console.log(events); // Check if events is an array and contains data
  return (
    <>
      <Navbar headerTitle="Home" />
      <div className="bg-white py-5 text-center">
        <img src={image} className="homepage-image" style={{ width: '75px', height: '50px' }} />
        <br />
        <br />
        <h2 className="my-0">
          Welcome to the Church of Jesus Christ's new ministering app, Addy!
        </h2>
        <br />
        <h4 className="my-0">
          Choose from options below to kickstart your ministering efforts!
        </h4>
      </div>
      <br />

      <div className="center-div">
        <button
          className="d-flex justify-content-center align-items-center gap-2 bg-gray-custom px-3 py-2 border-0 shadow-sm hover-bg-light rounded"
          onClick={() => navigate("/ideas")}
        >
          Minister with AI
        </button>
      </div>
      <br />
      <br />
      <div className="center-div">
        <button
          className="d-flex justify-content-center align-items-center gap-2 bg-gray-custom px-3 py-2 border-0 shadow-sm hover-bg-light rounded"
          onClick={() => navigate("/calendar")}
        >
          Calendar
        </button>
      </div>
      <br />
      <br />
      <br />

      <h4>Upcoming Events</h4>

      <div className="center-div">
        {/* Render each event using EventCard */}
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.eventId}
              title={event.activity}
              subtitle={`${event.date} - ${event.address}`}
              date={event.date}
            />
          ))
        ) : (
          <p>No upcoming events</p>
        )}
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
