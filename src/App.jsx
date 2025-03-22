import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import ContactUsPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ServicePage from "./Pages/ServicePage";
import ServiceDetails from "./Pages/ServiceDetails";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/services", element: <ServicePage /> },
      { path: "/services/:title", element: <ServiceDetails /> },
      { path: "/contact-us", element: <ContactUsPage /> },
    ],
  },
]);

export default AppRouter;
