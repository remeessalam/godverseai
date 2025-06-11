import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Ourvalues = () => {
  const totalYrs = 3;
  const totalOnTimeCompletionPercentage = 100;
  const totalExperts = 10;
  const totalClients = 50;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 20);

      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section>
      <div className="paddingtop paddingbottom wrapper">
        <div
          ref={ref}
          data-aos="fade-up"
          className="w-full text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 rounded-3xl backdrop-blur-lg border border-slate-600 p-[2rem]"
        >
          <div className="w-full flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300 hover:bg-white/10 rounded-xl p-4 cursor-default">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title !text-white group-hover:text-primary-500 transition-colors duration-300">
                {yrs}
              </h1>
              <span className="absolute top-1 -right-3 text-lg group-hover:text-primary-500 transition-colors duration-300">
                +
              </span>
            </div>
            <p className="desc mt-3 !text-white group-hover:text-primary-500 transition-colors duration-300">
              Years of Experience
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300 hover:bg-white/10 rounded-xl p-4 cursor-default">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title !text-white group-hover:text-primary-500 transition-colors duration-300">
                {experts}
              </h1>
              <span className="absolute top-1 -right-3 text-lg group-hover:text-primary-500 transition-colors duration-300">
                +
              </span>
            </div>
            <p className="desc mt-3 !text-white group-hover:text-primary-500 transition-colors duration-300">
              Expert Team
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300 hover:bg-white/10 rounded-xl p-4 cursor-default">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title !text-white group-hover:text-primary-500 transition-colors duration-300">
                {clients}
              </h1>
              <span className="absolute top-1 -right-3 text-lg group-hover:text-primary-500 transition-colors duration-300">
                +
              </span>
            </div>
            <p className="desc mt-3 !text-white group-hover:text-primary-500 transition-colors duration-300">
              Clients
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300 hover:bg-white/10 rounded-xl p-4 cursor-default">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title !text-white group-hover:text-primary-500 transition-colors duration-300">
                {onTimeCompletion}
              </h1>
              <span className="absolute top-1 -right-3 text-lg group-hover:text-primary-500 transition-colors duration-300">
                %
              </span>
            </div>
            <p className="desc mt-3 !text-white group-hover:text-primary-500 transition-colors duration-300">
              On Time Completion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourvalues;
