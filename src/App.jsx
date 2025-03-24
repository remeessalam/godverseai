import { createBrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
const AppLayout = lazy(() => import("./Layout/AppLayout"));
const ContactUsPage = lazy(() => import("./Pages/ContactUsPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutUsPage = lazy(() => import("./Pages/AboutUsPage"));

const BlogPage = lazy(() => import("./Pages/BlogPage"));
const BlogView = lazy(() => import("./Pages/BlogView"));

const ServicePage = lazy(() => import("./Pages/ServicePage"));
const ServiceDetails = lazy(() => import("./Pages/ServiceDetails"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));

import { LoadingSpinner } from "./Components/Loader";
AOS.init({
  once: true,
  duration: 1000,
  offset: -10,
});
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      // <LoadingSpinner />
      <Suspense fallback={<LoadingSpinner />}>
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              zIndex: "10000",
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />{" "}
        <AppLayout />{" "}
      </Suspense>
    ),

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
