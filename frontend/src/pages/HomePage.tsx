import "../css/HomePage.css";
import EventCard from "../elements/EventCard";
import Footer from "../elements/Footer";
function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <h3>Upcoming Events</h3>
      <div className="center-div">
        <button className="ministering-button">Minister with AI</button>
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
