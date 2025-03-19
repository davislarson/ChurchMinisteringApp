import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import NavPage from "./pages/NavPage";
import { createBrowserRouter as Router, RouterProvider } from "react-router";

const router = Router([
  {path: "/", element: <HomePage />},
  {path: "/calendar", element: <CalendarPage />},
  {path:"/nav", element: <NavPage />},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
