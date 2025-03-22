import React from "react";
import RoundedHeader from "../Components/RoundedHeader";
import { useTheme } from "../Context/ThemeContext";
import ServicesGrid from "../Components/ServicesGrid";
import HowWeWork from "../Components/HowWeWork";
import Testimonials from "../Components/Testimonials";

const ServicePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className=" bg-white dark:bg-darkblack">
      <section className=" pt-[7rem]">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
        />{" "}
        <section className="relative flex flex-col items-center gap-10 wrapper paddingtop paddingbottom z-10 w-full h-full">
          <RoundedHeader title={"Our Services"} />
          <h1 className=" text-[56px] text-center leading-tight font-bold dark:text-white text-darkblack">
            Simplify your Business
            <br /> Growth with GodverseAI
          </h1>
          <p className="desc text-center max-w-[50rem]">
            With GodverseAI's quantum-level innovation and AI-driven solutions,
            designed to captivate audiences across galaxies. Partner with us to
            manifest futuristic solutions that transcend borders and industries.
          </p>
          <ServicesGrid />
        </section>
      </section>
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
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
