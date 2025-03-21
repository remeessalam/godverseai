import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import ContactUsPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
    ],
  },
]);

export default AppRouter;
