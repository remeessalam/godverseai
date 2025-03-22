import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import ContactUsPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import BlogPage from "./Pages/BlogPage";
import BlogView from "./Pages/BlogView";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUsPage /> },
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
]);

export default AppRouter;
