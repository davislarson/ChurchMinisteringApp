import AiAssistantPage from "./pages/AiAssistantPage";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import { createBrowserRouter as Router, RouterProvider } from "react-router";


const router = Router([
  {path: "/", element: <HomePage />},
  {path: "/calendar", element: <CalendarPage />},
  {path:"/nav", element: <MenuPage />},
  {path:"/ideas", element: <AiAssistantPage />}
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
