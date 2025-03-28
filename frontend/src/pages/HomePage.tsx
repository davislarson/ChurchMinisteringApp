import "../css/HomePage.css";
import EventCard from "../elements/EventCard";
import Footer from "../elements/Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../elements/Navbar";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar headerTitle="Home" />
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
        <EventCard
          title={"Event Name Example"}
          subtitle={"Event description example"}
          date={"00/00/0000"}
        />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
