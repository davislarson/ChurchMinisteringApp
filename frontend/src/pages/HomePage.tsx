import "../css/HomePage.css";
import EventCard from "../elements/EventCard";
import Footer from "../elements/Footer";
import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white sticky-top py-5 text-center">
        <h3 className="my-0">Home Page</h3>
      </div>
      <br />
      <br />

      <div className="center-div">
        <button className="d-flex justify-content-center align-items-center gap-2 bg-gray-custom px-3 py-2 border-0 shadow-sm hover-bg-light rounded"
        onClick={() => navigate("/ideas")}>
          Minister with AI
        </button>
      </div>
      <br />
      <br />
      <div className="center-div">
        <button className="d-flex justify-content-center align-items-center gap-2 bg-gray-custom px-3 py-2 border-0 shadow-sm hover-bg-light rounded"
        onClick={() => navigate("/calendar")}>
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
