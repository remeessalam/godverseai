import React from "react";
import bannervideo from "../assets/video/bannervideo.mp4";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const HomePageBanner = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <div className="relative w-full">
      <ReactPlayer
        url={bannervideo}
        loop={true}
        playsinline
        playing={true}
        width="100%"
        height="100vh"
        muted
        className="object-cover"
        config={{
          file: {
            attributes: {
              style: {
                objectFit: "cover",
                width: "100vw",
                height: "100vh",
              },
            },
          },
        }}
      />
      <div className="absolute flex flex-col items-center justify-between    left-0 top-0 w-full h-full pt-[7rem]">
        <h1 className="hero-heading">Vision Beyond Reality</h1>
        <div className="flex flex-col gap-8 pb-5">
          <p className="font-bold text-base text-white sm:text-start text-center">
            Where Cosmic Innovation Meets Quantum-Level Intelligence
          </p>
          <div className="flex justify-center gap-5">
            <button
              onClick={() => navigateTo("/about-us")}
              className="primary-btn"
            >
              Get Start{" "}
            </button>
            <button
              onClick={() => navigateTo("/contact-us")}
              className="secondary-btn-white"
            >
              Contact Us{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
