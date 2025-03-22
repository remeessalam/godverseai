import React from "react";
import { serviceDetails } from "../util/services";
import { Circle } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

const ServiceDetails = () => {
  const serviceDetail = serviceDetails[0];
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="dark:bg-darkblack">
      <div className="pt-[4.5rem]">
        <section
          className=" flex justify-start p-10 items-end h-[30rem] bg-current bg-cover md:bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${serviceDetail.bannerimg})` }}
        >
          <h1 className="text-[48px] font-bold text-white">
            {serviceDetail.title}
          </h1>
        </section>
      </div>
      <div className="relative overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
        />
        <section className=" wrapper ">
          <div className="relative z-10">
            {/** SECTION ONE */}
            <section className=" paddingtop paddingbottom">
              <div>
                <h1 className="section-heading dark:text-white text-darkblack">
                  {serviceDetail.heading}
                </h1>
                <p className="desc mt-5">{serviceDetail.description}</p>
              </div>
            </section>
            {/** SECTION TWO */}

            <section className="grid md:grid-cols-2 paddingbottom">
              <div>
                <h2 className="text-[22px] font-bold dark:text-white text-darkblack">
                  {serviceDetail.secondHeading}
                </h2>
                <p className="desc !text-primary my-5">
                  {serviceDetail.secondHeading_subheading}
                </p>
                <ul className="flex flex-col gap-5">
                  {serviceDetail.services.map((obj) => (
                    <li key={obj.title} className="desc list-disc flex">
                      <Circle className="fill-primary text-primary mr-1" />
                      <span>
                        <strong>{obj.title}: </strong> {obj.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src={serviceDetail.imageone}
                  alt="image-one"
                  className="rounded-xl max-h-[30rem] w-full object-cover"
                />
              </div>
            </section>
            {/** SECTION THREE */}

            <section>
              <h2 className="text-[22px] font-bold dark:text-white text:darkbackground">
                {serviceDetail.thirdHeading}
              </h2>
              <p className="desc my-6">{serviceDetail.thirdDescription}</p>
              <p className="desc">
                <strong>{serviceDetail.whyMatter.split(":")[0]}:</strong>
                {serviceDetail.whyMatter.split(":")[1]}
              </p>
              <div className="flex justify-center my-6">
                <button className="primary-btn w-fit">Join Us Today</button>
              </div>
            </section>
            {/** SECTION FOUR */}

            <section className="paddingbottom">
              <hr className="border border-primary" />
              <div className="grid md:grid-cols-2 gap-10 mt-6 ">
                <img
                  src={serviceDetail.imgagetwo}
                  alt="image-two"
                  className="rounded-xl"
                />
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-[22px] font-bold dark:text-white text:darkbackground">
                      {serviceDetail.fourthHeading}
                    </h3>
                    <p className="desc mt-6">
                      {serviceDetail.fourthDescripiton}
                    </p>
                  </div>
                  <button className="primary-btn w-fit">Join Us Today</button>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
