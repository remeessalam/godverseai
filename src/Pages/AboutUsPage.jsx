import React from "react";
import aboutusimg from "../assets/images/aboutusimg.png";
import { useTheme } from "../Context/ThemeContext";
const AboutUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="relative pt-[7rem] bg-white dark:bg-darkblack overflow-hidden">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
      />{" "}
      <div className="relative z-10 w-full h-full">
        <section>
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
                thinking with AI-driven solutions, we transform visionary ideas
                into immersive digital experiences that transcend borders,
                dimensions, and industries.
              </p>
            </div>
            <img src={aboutusimg} alt="aboutus-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
