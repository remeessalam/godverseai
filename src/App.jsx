import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import ContactUsPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
    ],
  },
]);

export default AppRouter;
