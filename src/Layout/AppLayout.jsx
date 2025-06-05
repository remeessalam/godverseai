import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import WhatsAppIcon from "../Components/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css";
import bgvideo from "../assets/video/backgroundvideo.mp4";
import ReactPlayer from "react-player";
const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 1000,
    offset: -10,
  });
  return (
    <div>
      <Header />
      <div className="fixed flex justify-center items-center opacity-20 -z-10 top-0 bg-contain bg-center bg-no-repeat w-screen  h-screen">
        <ReactPlayer
          url={bgvideo}
          loop={true}
          playsinline
          playing={true}
          width="100%"
          height="100%"
          muted
        />
      </div>
      <WhatsAppIcon />
      <ScrollToTop />
      <div className="bg-white/60 dark:bg-darkbackground/10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
