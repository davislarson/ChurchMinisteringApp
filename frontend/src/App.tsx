import MinisteringForm from "./MinisteringForm";
import AiAssistantPage from "./pages/AiAssistantPage";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import Navbar from "./elements/Navbar";
import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";


const router = Router([
  { path: "/", element: <HomePage /> },
  { path: "/calendar", element: <CalendarPage /> },
  { path: "/nav", element: <MenuPage /> },
  { path: "/ideas", element: <AiAssistantPage /> },
  { path: "/createEvent", element: <MinisteringForm /> },
  { path: '/navHeader', element: <Navbar headerTitle="Ministering App"/>}
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
