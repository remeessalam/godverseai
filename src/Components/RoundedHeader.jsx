import React from "react";

const RoundedHeader = ({ title, bg }) => {
  return (
    <div
      data-aos="fade-up"
      className={`border z-50 w-fit border-slate-500 rounded-full px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
        bg
          ? `bg-transparent dark:text-white text-black hover:bg-opacity-10 hover:bg-gray-200 dark:hover:bg-gray-800`
          : `bg-gradient-to-r from-gray-600 to-darkblack text-white hover:from-gray-700 hover:to-darkblack hover:shadow-purple-500/20`
      }`}
    >
      <h1 className="text-[13px] font-medium tracking-wide">{title}</h1>
    </div>
  );
};

export default RoundedHeader;
