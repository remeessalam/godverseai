import React from "react";
import RoundedHeader from "./RoundedHeader";
import { highlights } from "../util/constant";

const Highlights = () => {
  return (
    <section className="z-30">
      <div className="wrapper paddingtop paddingbottom">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-5">
            <RoundedHeader title={"Highlights"} bg={true} />
            <h1 className="main-title leading-tight">
              Join the Cosmic Journey - Ready to Elevate your Business
            </h1>
            <p className="desc">
              From local startups to interplanetary enterprises, GodverseAI is
              your gateway to quantum-level innovation. We believe in
              co-creation—partner with us to manifest futuristic solutions that
              captivate audiences across galaxies.
            </p>
            <button className="secondary-btn-white w-fit">Get Started</button>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 gap-4">
            {highlights.map((obj) => (
              <div className="bg-white/10 flex flex-col gap-2 p-5 border text-black dark:text-white border-slate-500 rounded-xl">
                <img src={obj.icon} alt={obj.title} className="w-7 " />
                <h3 className="small-heading">{obj.title}</h3>
                <p className="small-desc">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
