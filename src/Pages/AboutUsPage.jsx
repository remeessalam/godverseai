import React from "react";
import aboutusimg from "../assets/images/aboutusimg.png";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurStory from "../Components/OurStory";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
const AboutUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className=" bg-white dark:bg-darkblack">
      <section className="relative pt-[7rem]  overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
        />{" "}
        <section className="relative z-10 w-full h-full">
          <div>
            <div className="wrapper paddingtop paddingbottom grid md:grid-cols-2 gap-10">
              <div>
                <h1 className="text-8xl font-bold text-darkblack dark:text-white">
                  About Us
                </h1>
                <p className="desc mt-10">
                  Welcome to GodverseAI, where cosmic innovation converges with
                  quantum-level intelligence. In a reality where technology
                  evolves at light speed, we stand at the intersection of cosmic
                  insight and cutting-edge innovation. By merging quantum-level
                  thinking with AI-driven solutions, we transform visionary
                  ideas into immersive digital experiences that transcend
                  borders, dimensions, and industries.
                </p>
              </div>
              <img src={aboutusimg} alt="aboutus-img" />
            </div>
          </div>
        </section>
      </section>
      <div className="relative overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
        />
        <section className="relative z-10 w-full h-full">
          <CoreValues />
          <VisionMission />
          <OurStory />
          <UnlockEfficiency />
          <Faq />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
