import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import ContactUsPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";

import BlogPage from "./Pages/BlogPage";
import BlogView from "./Pages/BlogView";

import ServicePage from "./Pages/ServicePage";
import ServiceDetails from "./Pages/ServiceDetails";
import LandingPage from "./Pages/LandingPage";

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
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogView />,
      },
    ],
  },
  {
    path: "/web-development",
    element: <LandingPage page={"web-development"} />,
  },
  {
    path: "/app-development",
    element: <LandingPage page={"app-development"} />,
  },
]);

export default AppRouter;
