import React from "react";
import RoundedHeader from "../Components/RoundedHeader";
import { useTheme } from "../Context/ThemeContext";
import ServicesGrid from "../Components/ServicesGrid";
import HowWeWork from "../Components/HowWeWork";
import Testimonials from "../Components/Testimonials";
import servicebanner from "../assets/images/servicebanner.jpg";
import servicebannervideo from "../assets/video/servicebanner2.mp4";
import ReactPlayer from "react-player";
const ServicePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className=" ">
      <section className="pt-[4rem]">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[43rem] blur-3xl left-0 w-full z-10 h-full bg-footerBackground  `}
        />{" "}
        <section className="relative flex flex-col items-center gap-10 z-10 w-full h-full ">
          <div className="absolute left-0 bottom md:aspect-video md:max-h-[30rem] h-[44rem]">
            <ReactPlayer
              url={servicebannervideo}
              loop={true}
              playsinline
              playing={true}
              width="100vw"
              height="100%"
              muted
              className="object-cover vedio"
              config={{
                file: {
                  attributes: {
                    style: {
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    },
                  },
                },
              }}
            />
          </div>
          <div
            className="w-full min-h-[30rem] flex flex-col bg-cover  bg-center justify-center items-center gap-10 paddingtop paddingbottom "
            // style={{ backgroundImage: `url(${servicebanner})` }}
          >
            <RoundedHeader title={"Our Services"} />
            <h1
              data-aos="fade-up"
              className=" text-[56px]  text-center leading-tight font-bold dark:text-white text-white"
            >
              Simplify your Business
              <br /> Growth with GodverseAI
            </h1>
            <p
              className="desc text-center max-w-[50rem] !text-white"
              data-aos="fade-up"
            >
              With GodverseAI's quantum-level innovation and AI-driven
              solutions, designed to captivate audiences across galaxies.
              Partner with us to manifest futuristic solutions that transcend
              borders and industries.
            </p>
          </div>
          <div className="wrapper">
            <ServicesGrid />
          </div>
        </section>
      </section>
      <div className="relative overflow-hidden  min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <HowWeWork />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
