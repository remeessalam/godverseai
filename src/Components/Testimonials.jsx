import React from "react";
import RoundedHeader from "./RoundedHeader";
import { testimonials } from "../util/constant";
import StarRating from "./StarRating";

const Testimonials = () => {
  return (
    <section className="">
      <div className="paddingtop paddingbottom wrapper flex flex-col items-center">
        <RoundedHeader title={"Testimonial"} />
        <h1 className="main-title text-center">
          Professionals use to <br />
          10x their Productivity
        </h1>
        <div className="min-h-screen  p-4 md:p-8 flex items-center justify-center">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white/10 hovershadow border-primary border rounded-lg p-6 flex flex-col justify-between
                     ${index === 0 && "md:col-span-1"}  ${
                    index === 1 && "md:col-span-2"
                  }`}
                >
                  <p className="text-white text-lg mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-white font-medium mb-2">
                      — {testimonial.author}
                    </p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
