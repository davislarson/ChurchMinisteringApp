import "../css/HomePage.css";
import EventCard from "../elements/EventCard";
import Footer from "../elements/Footer";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <h3>Upcoming Events</h3>
      <div className="center-div">
        <Link to={"/"} className="text-decoration-none">
          <button className="ministering-button">Minister with AI</button>
        </Link>
      </div>
      <EventCard
        title={"Event Name Example"}
        subtitle={"Event description example"}
        date={"00/00/0000"}
      />
      <Footer />
    </>
  );
}

export default HomePage;
