import React from "react";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.png";
import WhyChooseUs from "../Components/WhyChooseUs";
import RoundedHeader from "../Components/RoundedHeader";
import ServicesGrid from "../Components/ServicesGrid";
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HomePageBanner />
      <section>
        <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
          <img src={homeaboutimg} alt="homeaboutimg" />
          <div>
            <h1 className="main-title leading-tight">Welcome to GodverseAI</h1>
            <p className="desc mt-4">
              In a reality where technology evolves at light speed, GodverseAI
              stands at the intersection of cosmic insight and cutting-edge
              innovation. By merging quantum-level thinking with AI-driven
              solutions, we transform visionary ideas into immersive digital
              experiences that transcend borders, dimensions, and industries.
              Whether you need a next-generation mobile app, an interstellar
              AR/VR environment, or an AI calling system that revolutionizes
              global communication, GodverseAI is here to guide you on this
              journey across galaxies.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <section className="bg-darkblack">
        <div className="flex flex-col gap-4 items-center w-full paddingtop paddingbottom">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title">Your Ultimate AI Solution</h1>
          <p className="desc max-w-[40rem]">
            Lorem ipsum dolor sit amet consectetur. Bibendum nulla ut dui non.
            Eu arcu fringilla morbi vel mi libero mattis et platea. Sagittis ut
            mi pretium arcu faucibus penatibus.
          </p>
        </div>
      </section>
      <ServicesGrid />
    </div>
  );
};

export default HomePage;
